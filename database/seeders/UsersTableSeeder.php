<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            // STAFF - Administradores (access_level: 11)
            ['name' => 'Admin Master', 'email' => 'admin@firstaid.com', 'password' => Hash::make('password'), 'access_level' => 11],
            ['name' => 'Admin Suporte', 'email' => 'admin2@firstaid.com', 'password' => Hash::make('password'), 'access_level' => 11],

            // STAFF - Padrão (access_level: 10)
            ['name' => 'Carlos Técnico', 'email' => 'carlos@firstaid.com', 'password' => Hash::make('password'), 'access_level' => 10],
            ['name' => 'Ana Atendente', 'email' => 'ana@firstaid.com', 'password' => Hash::make('password'), 'access_level' => 10],
            ['name' => 'Pedro Suporte', 'email' => 'pedro@firstaid.com', 'password' => Hash::make('password'), 'access_level' => 10],

            // CUSTOMERS - Clientes (access_level: 20)
            ['name' => 'Maria Silva', 'email' => 'maria@email.com', 'password' => Hash::make('password'), 'access_level' => 20],
            ['name' => 'João Santos', 'email' => 'joao@email.com', 'password' => Hash::make('password'), 'access_level' => 20],
            ['name' => 'Empresa Tech Ltda', 'email' => 'contato@techltda.com', 'password' => Hash::make('password'), 'access_level' => 20],
            ['name' => 'Lucia Oliveira', 'email' => 'lucia@email.com', 'password' => Hash::make('password'), 'access_level' => 20],
            ['name' => 'Roberto Almeida', 'email' => 'roberto@email.com', 'password' => Hash::make('password'), 'access_level' => 20],
        ];

        foreach ($users as $user) {
            User::create($user + ['privacy_policy_accepted_at' => now()]);
        }
    }
}