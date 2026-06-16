<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    protected $model = Customer::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'name' => fake()->name(),
            'tax_id' => fake()->numerify('###.###.###-##'),
            'address' => fake()->streetAddress(),
            'neighborhood' => fake()->word(),
            'city' => fake()->city(),
            'zip_code' => fake()->numerify('#####-###'),
            'phone1' => fake()->phoneNumber(),
            'phone2' => null,
        ];
    }
}