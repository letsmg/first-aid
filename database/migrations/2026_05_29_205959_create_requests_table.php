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
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained();
$table->text('request');
$table->boolean('urgency')->default(false);
$table->enum('type', ['0', '1', '2']);
$table->text('diagnosis');
$table->dateTime('request_date');
$table->foreignId('attending_user_id')->nullable()->constrained('users');
$table->enum('status', ['0', '1', '2']);
$table->enum('evaluation', ['0', '1', '2', '3']);
$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests');
    }
};
