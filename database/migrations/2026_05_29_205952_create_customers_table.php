<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
$table->foreignId('user_id')->constrained();
$table->string('cpf_cnpj')->encrypt();
$table->text('address');
$table->string('neighborhood');
$table->string('city');
$table->string('zip_code');
$table->string('phone1');
$table->string('phone2')->nullable()->encrypt();
$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
