<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'max_urgent_requests',
        'app_requests_limit',
        'presencial_requests_limit',
    ];

    public function memberships()
    {
        return $this->hasMany(Membership::class);
    }
}
