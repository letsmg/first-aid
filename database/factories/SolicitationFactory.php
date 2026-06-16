<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Solicitation;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class SolicitationFactory extends Factory
{
    protected $model = Solicitation::class;

    public function definition(): array
    {
        return [
            'customer_id' => Customer::factory(),
            'solicitacao' => fake()->sentence(10),
            'urgencia' => fake()->boolean(20),
            'tipo' => fake()->randomElement([0, 1, 2]),
            'diagnostico' => null,
            'data_solicitacao' => Carbon::now()->subDays(fake()->numberBetween(0, 30)),
            'usuario_atendimento_id' => null,
            'status' => 0,
            'avaliacao' => null,
        ];
    }
}