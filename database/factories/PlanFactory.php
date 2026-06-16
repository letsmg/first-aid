<?php

namespace Database\Factories;

use App\Models\Plan;
use Illuminate\Database\Eloquent\Factories\Factory;

class PlanFactory extends Factory
{
    protected $model = Plan::class;

    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['Básico', 'Pro', 'Master']),
            'max_urgent_requests' => fake()->randomElement([2, 5, -1]),
            'app_requests_limit' => fake()->randomElement([5, 15, -1]),
            'presencial_requests_limit' => fake()->randomElement([0, 5, 15]),
        ];
    }
}