<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class CustomersTableSeeder extends Seeder
{
    public function run(): void
    {
        // Create additional users for customers without existing user_id
        $extraUsers = [
            ['name' => 'Fernanda Costa', 'email' => 'fernanda@email.com'],
            ['name' => 'Carlos Eduardo Pereira', 'email' => 'carlosedu@email.com'],
            ['name' => 'Ana Beatriz Martins', 'email' => 'anabeatriz@email.com'],
            ['name' => 'Tech Solutions ME', 'email' => 'techsolutions@email.com'],
            ['name' => 'Patrícia Lima', 'email' => 'patricia@email.com'],
        ];

        foreach ($extraUsers as $extraUser) {
            User::create([
                'name' => $extraUser['name'],
                'email' => $extraUser['email'],
                'password' => Hash::make('password'),
                'access_level' => 20,
                'privacy_policy_accepted_at' => now(),
            ]);
        }

        // Customer IDs 6-10 correspondem aos users com access_level = 20
        $customers = [
            [
                'user_id' => 6,
                'name' => 'Maria Silva',
                'tax_id' => '529.982.247-25',
                'address' => 'Rua das Flores, 123',
                'neighborhood' => 'Centro',
                'city' => 'São Paulo',
                'zip_code' => '01001-000',
                'phone1' => '(11) 99999-0001',
                'phone2' => '(11) 98888-0001',
            ],
            [
                'user_id' => 7,
                'name' => 'João Santos',
                'tax_id' => '975.834.620-87',
                'address' => 'Av. Paulista, 456',
                'neighborhood' => 'Bela Vista',
                'city' => 'São Paulo',
                'zip_code' => '01310-000',
                'phone1' => '(11) 99999-0002',
                'phone2' => null,
            ],
            [
                'user_id' => 8,
                'name' => 'Empresa Tech Ltda',
                'tax_id' => '11.222.333/0001-81',
                'address' => 'Rua do Comércio, 789',
                'neighborhood' => 'Industrial',
                'city' => 'São Paulo',
                'zip_code' => '02002-000',
                'phone1' => '(11) 99999-0003',
                'phone2' => '(11) 98888-0003',
            ],
            [
                'user_id' => 9,
                'name' => 'Lucia Oliveira',
                'tax_id' => '348.567.920-41',
                'address' => 'Rua Augusta, 321',
                'neighborhood' => 'Consolação',
                'city' => 'São Paulo',
                'zip_code' => '01304-000',
                'phone1' => '(11) 99999-0004',
                'phone2' => null,
            ],
            [
                'user_id' => 10,
                'name' => 'Roberto Almeida',
                'tax_id' => '761.234.089-53',
                'address' => 'Alameda Santos, 654',
                'neighborhood' => 'Jardins',
                'city' => 'São Paulo',
                'zip_code' => '01418-000',
                'phone1' => '(11) 99999-0005',
                'phone2' => '(11) 98888-0005',
            ],
            [
                'user_id' => 11,
                'name' => 'Fernanda Costa',
                'tax_id' => '123.456.789-09',
                'address' => 'Rua México, 100',
                'neighborhood' => 'Centro',
                'city' => 'Rio de Janeiro',
                'zip_code' => '20031-000',
                'phone1' => '(21) 99999-0006',
                'phone2' => null,
            ],
            [
                'user_id' => 12,
                'name' => 'Carlos Eduardo Pereira',
                'tax_id' => '987.654.321-00',
                'address' => 'Av. Atlântica, 2000',
                'neighborhood' => 'Copacabana',
                'city' => 'Rio de Janeiro',
                'zip_code' => '22021-000',
                'phone1' => '(21) 99999-0007',
                'phone2' => '(21) 98888-0007',
            ],
            [
                'user_id' => 13,
                'name' => 'Ana Beatriz Martins',
                'tax_id' => '456.789.123-80',
                'address' => 'Rua XV de Novembro, 500',
                'neighborhood' => 'Centro',
                'city' => 'Curitiba',
                'zip_code' => '80020-000',
                'phone1' => '(41) 99999-0008',
                'phone2' => null,
            ],
            [
                'user_id' => 14,
                'name' => 'Tech Solutions ME',
                'tax_id' => '33.444.555/0001-66',
                'address' => 'Av. das Nações, 1500',
                'neighborhood' => 'Sul',
                'city' => 'Belo Horizonte',
                'zip_code' => '30140-000',
                'phone1' => '(31) 99999-0009',
                'phone2' => '(31) 98888-0009',
            ],
            [
                'user_id' => 15,
                'name' => 'Patrícia Lima',
                'tax_id' => '789.123.456-60',
                'address' => 'Rua dos Pinheiros, 800',
                'neighborhood' => 'Pinheiros',
                'city' => 'São Paulo',
                'zip_code' => '05422-000',
                'phone1' => '(11) 99999-0010',
                'phone2' => null,
            ],
        ];

        foreach ($customers as $customer) {
            Customer::create($customer);
        }
    }
}