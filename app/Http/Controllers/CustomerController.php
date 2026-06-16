<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::with('user', 'membership.plan')->get();
        return Inertia::render('Staff/Customers/Index', [
            'customers' => $customers
        ]);
    }

    public function create()
    {
        return Inertia::render('Staff/Customers/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'tax_id' => 'required|string|max:20',
            'phone1' => 'required|string|max:20',
            'phone2' => 'nullable|string|max:20',
            'address' => 'required|string|max:255',
            'neighborhood' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zip_code' => 'required|string|max:10',
        ], [
            'name.required' => 'O nome é obrigatório.',
            'email.required' => 'O email é obrigatório.',
            'email.unique' => 'Este email já está cadastrado.',
            'password.required' => 'A senha é obrigatória.',
            'password.min' => 'A senha deve ter no mínimo 8 caracteres.',
            'tax_id.required' => 'O CPF/CNPJ é obrigatório.',
            'phone1.required' => 'O telefone principal é obrigatório.',
            'address.required' => 'O endereço é obrigatório.',
            'neighborhood.required' => 'O bairro é obrigatório.',
            'city.required' => 'A cidade é obrigatória.',
            'zip_code.required' => 'O CEP é obrigatório.',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'access_level' => 20, // CLIENTE
        ]);

        Customer::create([
            'user_id' => $user->id,
            'name' => $validated['name'],
            'tax_id' => $validated['tax_id'],
            'phone1' => $validated['phone1'],
            'phone2' => $validated['phone2'],
            'address' => $validated['address'],
            'neighborhood' => $validated['neighborhood'],
            'city' => $validated['city'],
            'zip_code' => $validated['zip_code'],
        ]);

        return redirect()->route('customers.index')
            ->with('success', 'Cliente cadastrado com sucesso!');
    }

    public function edit(Customer $customer)
    {
        $customer->load('user');
        return Inertia::render('Staff/Customers/Edit', [
            'customer' => $customer
        ]);
    }

    public function update(Request $request, Customer $customer)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'tax_id' => 'required|string|max:20',
            'phone1' => 'required|string|max:20',
            'phone2' => 'nullable|string|max:20',
            'address' => 'required|string|max:255',
            'neighborhood' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zip_code' => 'required|string|max:10',
        ], [
            'name.required' => 'O nome é obrigatório.',
            'tax_id.required' => 'O CPF/CNPJ é obrigatório.',
            'phone1.required' => 'O telefone principal é obrigatório.',
            'address.required' => 'O endereço é obrigatório.',
            'neighborhood.required' => 'O bairro é obrigatório.',
            'city.required' => 'A cidade é obrigatória.',
            'zip_code.required' => 'O CEP é obrigatório.',
        ]);

        $customer->update($validated);
        $customer->user->update(['name' => $validated['name']]);

        return redirect()->route('customers.index')
            ->with('success', 'Cliente atualizado com sucesso!');
    }

    public function destroy(Customer $customer)
    {
        $customer->user->delete();
        $customer->delete();

        return redirect()->route('customers.index')
            ->with('success', 'Cliente excluído com sucesso!');
    }
}