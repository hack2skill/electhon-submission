<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'is_school',
        'email',
        'phone',
        'google_sheets_url',
        'is_approved',
        'last_count',
        'added_by'
    ];
}
