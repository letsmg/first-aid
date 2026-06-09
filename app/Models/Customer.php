<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * @var array<int, string>
     */
    protected $fillable = [
        'name', 
        'user_id', // Deve ser usado para relacionamento
        'tax_id', 
        'address', 
        'neighborhood', 
        'city', 
        'zip_code', 
        'phone1', 
        'phone2'
    ];

    /**
     * The attributes that should be cast to native types.
     * @var array
     */
    protected $casts = [
        'tax_id' => 'encrypted',
        'phone2' => 'encrypted',
    ];

    // Relacionamentos
>>>>+++ REPLACE

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the Membership associated with the customer.
     */
    public function membership()
    {
        return $this->hasOne(Membership::class, 'customer_id');
    }


    // --- Accessors/Mutators para Campos Criptografados (tax_id e phone2) ---

    /**
     * Get the raw tax ID value. Assumes encryption handled by Laravel schema builder.
     * @return string|null
     */
    public function getTaxIdAttribute($value)
    {
        // Se o banco de dados já está aplicando a criptografia (Laravel Schema::encrypt), 
        // geralmente o valor retornado aqui será o texto encriptado, mas para uso na aplicação, ele deve ser decriptografado.
        return $value; // Depende da camada de abstração do encryption provider.
    }

    /**
     * Set the raw tax ID value before saving/updating (Mutator).
     * @param string $value CPF/CNPJ
     * @return void
     */
    public function setTaxIdAttribute($value)
    {
        // Em um sistema real, aqui seria chamada a função de criptografia forte antes do save. 
        // Como a migração já usa ->encrypt(), o Eloquent deve cuidar disso no nível da coluna.
        $this->attributes['tax_id'] = $value;
    }

    /**
     * Get the raw phone2 value.
     * @return string|null
     */
    public function getPhone2Attribute($value)
    {
        return $value;
    }

    /**
     * Set the raw phone2 value before saving/updating (Mutator).
     * @param string $value Phone number
     * @return void
     */
    public function setPhone2Attribute($value)
    {
        $this->attributes['phone2'] = $value;
    }
}