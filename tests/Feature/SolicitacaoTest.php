<?php

use App\Models\Solicitacao;
use Tests\TestCase;

use App\Models\User;

class SolicitacaoTest extends TestCase
{
    public function test_criar_solicitacao()
    {
        // Arrange
        $client = User::find(1); // Assuming user with ID 1 is a client

        // Act
        $solicitacao = Solicitacao::create([
            'client_id' => $client->id,
            'request_details' => 'Teste de criação de solicitação',
            'urgency' => 'não',
            'type' => 'telefone',
        ]);

        // Assert
        $this->assertDatabaseHas('solicitações', [
            'client_id' => $client->id,
            'request_description' => 'Teste de criação de solicitação',
            'urgency' => 'não',
            'type' => 'telefone',
        ]);
    }


    test('criar usuario com nivel de acesso', function () {
        $user = User::factory()->create([
            'nivel_de_acesso' => 'ADMIN',
        ]);

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'nome' => $user->nome,
            'email' => $user->email,
            'senha' => $user->password,
            'nivel_de_acesso' => 'ADMIN',
        ]);
    });
}