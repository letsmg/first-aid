<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SolicitationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/servicos', function () {
    return Inertia::render('Servicos');
})->name('servicos');

Route::get('/termos', function () {
    return Inertia::render('Termos');
})->name('termos');

Route::get('/privacidade', function () {
    return Inertia::render('Privacidade');
})->name('privacidade');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Rotas STAFF
Route::middleware(['auth', 'verified'])->prefix('staff')->name('staff.')->group(function () {
    // Clientes
    Route::resource('customers', CustomerController::class)->except(['show']);
    
    // Solicitações
    Route::get('/solicitations', [SolicitationController::class, 'index'])->name('solicitations');
    Route::patch('/solicitations/{solicitation}', [SolicitationController::class, 'update'])->name('solicitations.update');
});

// Rotas CUSTOMER
Route::middleware(['auth', 'verified'])->prefix('customer')->name('customer.')->group(function () {
    Route::get('/solicitations', [SolicitationController::class, 'mySolicitations'])->name('solicitations');
    Route::get('/solicitations/create', [SolicitationController::class, 'create'])->name('solicitations.create');
    Route::post('/solicitations', [SolicitationController::class, 'store'])->name('solicitations.store');
    Route::patch('/solicitations/{solicitation}/evaluate', [SolicitationController::class, 'evaluate'])->name('solicitations.evaluate');
});

require __DIR__.'/auth.php';
