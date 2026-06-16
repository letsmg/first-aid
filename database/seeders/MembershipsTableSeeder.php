<?php

namespace Database\Seeders;

use App\Models\Membership;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MembershipsTableSeeder extends Seeder
{
    public function run(): void
    {
        $memberships = [
            // Customer 1 (Maria) - Plano Master
            [
                'customer_id' => 1,
                'plan_id' => 3,
                'due_date' => Carbon::now()->addMonth(),
                'contract_date' => Carbon::now()->subMonths(6),
                'active' => true,
            ],
            // Customer 2 (João) - Plano Pro
            [
                'customer_id' => 2,
                'plan_id' => 2,
                'due_date' => Carbon::now()->addDays(15),
                'contract_date' => Carbon::now()->subMonths(3),
                'active' => true,
            ],
            // Customer 3 (Empresa Tech) - Plano Master
            [
                'customer_id' => 3,
                'plan_id' => 3,
                'due_date' => Carbon::now()->addMonths(2),
                'contract_date' => Carbon::now()->subYear(),
                'active' => true,
            ],
            // Customer 4 (Lucia) - Plano Básico
            [
                'customer_id' => 4,
                'plan_id' => 1,
                'due_date' => Carbon::now()->addDays(5),
                'contract_date' => Carbon::now()->subMonth(),
                'active' => true,
            ],
            // Customer 5 (Roberto) - Plano Pro
            [
                'customer_id' => 5,
                'plan_id' => 2,
                'due_date' => Carbon::now()->addDays(20),
                'contract_date' => Carbon::now()->subMonths(2),
                'active' => true,
            ],
            // Customer 6 (Fernanda) - Plano Básico
            [
                'customer_id' => 6,
                'plan_id' => 1,
                'due_date' => Carbon::now()->subDay(), // venceu ontem
                'contract_date' => Carbon::now()->subMonths(1),
                'active' => false,
            ],
            // Customer 7 (Carlos Eduardo) - Plano Pro
            [
                'customer_id' => 7,
                'plan_id' => 2,
                'due_date' => Carbon::now()->addMonth(),
                'contract_date' => Carbon::now()->subMonths(4),
                'active' => true,
            ],
            // Customer 8 (Ana Beatriz) - Plano Básico
            [
                'customer_id' => 8,
                'plan_id' => 1,
                'due_date' => Carbon::now()->addDays(10),
                'contract_date' => Carbon::now()->subDays(20),
                'active' => true,
            ],
            // Customer 9 (Tech Solutions) - Plano Master
            [
                'customer_id' => 9,
                'plan_id' => 3,
                'due_date' => Carbon::now()->addMonths(3),
                'contract_date' => Carbon::now()->subMonths(8),
                'active' => true,
            ],
            // Customer 10 (Patrícia) - Plano Básico
            [
                'customer_id' => 10,
                'plan_id' => 1,
                'due_date' => Carbon::now()->subDays(5), // venceu
                'contract_date' => Carbon::now()->subMonths(2),
                'active' => false,
            ],
        ];

        foreach ($memberships as $membership) {
            Membership::create($membership);
        }
    }
}