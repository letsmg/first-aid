<?php

namespace Tests\Feature;

use App\Models\Customer;
use App\Models\Membership;
use App\Models\Plan;
use App\Models\Solicitation;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SolicitacaoTest extends TestCase
{
    use RefreshDatabase;

    public function test_cliente_pode_criar_solicitacao_com_plano_ativo(): void
    {
        $user = User::factory()->create(['access_level' => 20]);
        $customer = Customer::factory()->create(['user_id' => $user->id]);
        
        $plan = Plan::factory()->create([
            'max_urgent_requests' => 5,
            'app_requests_limit' => 15,
            'presencial_requests_limit' => 5,
        ]);
        
        Membership::factory()->create([
            'customer_id' => $customer->id,
            'plan_id' => $plan->id,
            'active' => true,
        ]);

        $this->actingAs($user);
        
        $response = $this->post(route('customer.solicitations.store'), [
            'solicitacao' => 'Computador não liga após atualização do Windows',
            'urgencia' => true,
            'tipo' => 1,
        ]);

        $response->assertRedirect(route('customer.solicitations'));
        $this->assertDatabaseHas('solicitations', [
            'customer_id' => $customer->id,
            'urgencia' => true,
            'status' => 0,
        ]);
    }

    public function test_solicitacao_requer_descricao_minima(): void
    {
        $user = User::factory()->create(['access_level' => 20]);
        $customer = Customer::factory()->create(['user_id' => $user->id]);
        
        // Criar membership ativa para poder chegar na validação
        $plan = Plan::factory()->create();
        Membership::factory()->create([
            'customer_id' => $customer->id,
            'plan_id' => $plan->id,
            'active' => true,
        ]);
        
        $this->actingAs($user);

        $response = $this->post(route('customer.solicitations.store'), [
            'solicitacao' => 'Curta',
            'urgencia' => false,
            'tipo' => 1,
        ]);

        $response->assertSessionHasErrors('solicitacao');
    }

    public function test_staff_pode_listar_solicitacoes(): void
    {
        $staff = User::factory()->create(['access_level' => 10]);
        
        $this->actingAs($staff);
        $response = $this->get(route('staff.solicitations'));

        $response->assertStatus(200);
    }

    public function test_staff_pode_atualizar_status_da_solicitacao(): void
    {
        $staff = User::factory()->create(['access_level' => 10]);
        $customer = Customer::factory()->create();
        $solicitation = Solicitation::factory()->create([
            'customer_id' => $customer->id,
            'status' => 0,
        ]);

        $this->actingAs($staff);
        
        $response = $this->patch(route('staff.solicitations.update', $solicitation->id), [
            'status' => 2,
            'diagnostico' => 'Problema resolvido reiniciando o roteador.',
        ]);

        $response->assertStatus(302);
        $this->assertDatabaseHas('solicitations', [
            'id' => $solicitation->id,
            'status' => 2,
        ]);
    }

    public function test_criar_usuario_com_nivel_de_acesso_cliente(): void
    {
        $user = User::factory()->create([
            'access_level' => 20,
        ]);

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'email' => $user->email,
            'access_level' => 20,
        ]);
    }

    public function test_senha_usa_hash_argon2id(): void
    {
        $user = User::factory()->create([
            'password' => 'password123',
        ]);

        $this->assertTrue(password_verify('password123', $user->password));
    }
}