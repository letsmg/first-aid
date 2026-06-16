<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlansTableSeeder extends Seeder
{
    public function run(): void
    {
        $plans = [
            [
                'name' => 'Básico',
                'max_urgent_requests' => 2,
                'app_requests_limit' => 5,
                'presencial_requests_limit' => 0,
            ],
            [
                'name' => 'Pro',
                'max_urgent_requests' => 5,
                'app_requests_limit' => 15,
                'presencial_requests_limit' => 5,
            ],
            [
                'name' => 'Master',
                'max_urgent_requests' => -1, // ilimitado
                'app_requests_limit' => -1,  // ilimitado
                'presencial_requests_limit' => 15,
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}