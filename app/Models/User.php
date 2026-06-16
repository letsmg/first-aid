<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Membership;
use App\Models\Customer; // Importando Customer

#[Fillable(['name', 'email', 'password', 'access_level', 'privacy_policy_accepted_at'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            // A senha é tratada como hash no nível da aplicação para forçar o uso de Argon2id.
            'password' => 'hashed', 
        ];
    }

    /**
     * Get the associated customer profile (One-to-one).
     */
    public function customer()
    {
        return $this->hasOne(Customer::class);
    }

    /**
     * Get the membership associated with the user's customer profile.
     */
    public function membership()
    {
        return $this->hasOneThrough(
            Membership::class,
            Customer::class,
            'user_id', // Foreign key on customers table
            'customer_id', // Foreign key on memberships table
            'id', // Local key on users table
            'id' // Local key on customers table
        );
    }
}