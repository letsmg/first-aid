<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Membership;
use App\Models\Plan;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class MembershipFactory extends Factory
{
    protected $model = Membership::class;

    public function definition(): array
    {
        return [
            'customer_id' => Customer::factory(),
            'plan_id' => Plan::factory(),
            'due_date' => Carbon::now()->addMonth(),
            'contract_date' => Carbon::now()->subMonth(),
            'active' => true,
        ];
    }
}