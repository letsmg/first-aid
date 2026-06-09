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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            // Níveis de acesso: STAFF (10-PADRÃO, 11-ADMIN), CUSTOMERS (20-CLIENTE)
            $table->tinyInteger('access_level')->default(10); // 10: PADRÃO, 11: ADMIN, 20: CLIENTE
>>>>+++ REPLACE

            $table->timestamp('privacy_policy_accepted_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
