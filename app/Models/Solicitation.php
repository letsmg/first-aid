<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitation extends Model
{
    use HasFactory;

    protected $table = 'solicitations';

    protected $fillable = [
        'customer_id',
        'solicitacao',
        'urgencia',
        'tipo',
        'diagnostico',
        'data_solicitacao',
        'usuario_atendimento_id',
        'status',
        'avaliacao',
    ];

    protected $casts = [
        'urgencia' => 'boolean',
        'data_solicitacao' => 'datetime',
        'status' => 'integer',
        'tipo' => 'integer',
        'avaliacao' => 'integer',
    ];

    /**
     * Relacionamento com o cliente
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Relacionamento com o usuário (staff) que atendeu
     */
    public function attendant()
    {
        return $this->belongsTo(User::class, 'usuario_atendimento_id');
    }
}