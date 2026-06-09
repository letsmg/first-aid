<?php

namespace Database\Seeders;

use App\Models\User; // Import the User model
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder; 
use Hash; // Import the Hash facade for password hashing

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 10 users with different roles and data
        $users = [
            ['name' => 'Admin User', 'email' => 'admin@example.com', 'password' => Hash::make('password'), 'level_access' => 'ADMIN'],
            ['name' => 'Staff User 1', 'email' => 'staff1@example.com', 'password' => Hash::make('password'), 'level_access' => 'STAFF'],
            ['name' => 'Customer User 1', 'email' => 'customer1@example.com', 'password' => Hash::make('password'), 'level_access' => 'CUSTOMER'],
            ['name' => 'Admin User 2', 'email' => 'admin2@example.com', 'password' => Hash::make('password'), 'level_access' => 'ADMIN'],
            ['name' => 'Staff User 2', 'email' => 'staff2@example.com', 'password' => Hash::make('password'), 'level_access' => 'STAFF'],
            ['name' => 'Customer User 2', 'email' => 'customer2@example.com', 'password' => Hash::make('password'), 'level_access' => 'CUSTOMER'],
            ['name' => 'Admin User 3', 'email' => 'admin3@example.com', 'password' => Hash::make('password'), 'level_access' => 'ADMIN'],
            ['name' => 'Staff User 3', 'email' => 'staff3@example.com', 'password' => Hash::make('password'), 'level_access' => 'STAFF'],
            ['name' => 'Customer User 3', 'email' => 'customer3@example.com', 'password' => Hash::make('password'), 'level_access' => 'CUSTOMER'],
            ['name' => 'Customer User 4', 'email' => 'customer4@example.com', 'password' => Hash::make('password'), 'level_access' => 'CUSTOMER']
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}