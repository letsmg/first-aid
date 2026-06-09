<?php

use Illuminate\Database\Seeder;
use App\Models\Customer; // Import the Customer model


class CreateCustomersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 10 sample customers
        Customer::create([
            'nome' => 'John Doe',
            'fk_usuario' => 1, // Assuming user ID 1 exists
            'cpf/cnpj' => '12345678900',
            'endereco' => '123 Main St',
            'bairro' => 'Downtown',
            'cidade' => 'Anytown',
            'cep' => '12345-6789',
            'fone1' => '555-123-4567',
        ]);

        Customer::create([
            'nome' => 'Jane Smith',
            'fk_usuario' => 2, // Assuming user ID 2 exists
            'cpf/cnpj' => '98765432100',
            'endereco' => '456 Oak Ave',
            'bairro' => 'Uptown',
            'cidade' => 'Anytown',
            'cep' => '67890-1234',
            'fone1' => '555-987-6543',
        ]);

        // Add more customers here (up to 10 total)
    }
}
