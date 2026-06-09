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
        Schema::create('solicitations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained('customers')->onDelete('cascade');
            $table->text('solicitacao');
            $table->boolean('urgencia')->default(0);
            $table->tinyInteger('tipo')->default(0); // 0: telefone, 1: app, 2: presencial
            $table->text('diagnostico')->nullable();
            $table->timestamp('data_solicitacao');
            $table->foreignId('usuario_atendimento_id')->nullable()->constrained('users');
            $table->tinyInteger('status')->default(0); // 0: aguardando, 1: sendo atendido, 2: finalizado
            $table->tinyInteger('avaliacao')->nullable(); // 0: ruim, 1: boa, 2: ótima, 3: excelente
>>>>+++ REPLACE

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('solicitations');
    }
};