<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'tax_id',
        'address',
        'neighborhood',
        'city',
        'zip_code',
        'phone1',
        'phone2'
    ];

    protected $casts = [
        'tax_id' => 'encrypted',
        'phone2' => 'encrypted',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function membership()
    {
        return $this->hasOne(Membership::class, 'customer_id');
    }

    public function solicitations()
    {
        return $this->hasMany(Solicitation::class);
    }
}