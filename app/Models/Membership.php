<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * @var array<int, string>
     */
    protected $fillable = [
        'customer_id', 
        'plan_id', 
        'due_date',
        'contract_date',
        'active'
    ];

    /**
     * Define o relacionamento com User (opcional, dependendo do design)
     * No entanto, a migração sugere que memberships está ligado ao customer.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class); 
    }

    /**
     * Define o relacionamento com Plan.
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class, 'plan_id');
    }
}