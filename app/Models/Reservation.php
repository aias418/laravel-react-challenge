<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'listing',
    //     'guest',
    //     'check_in',
    //     'check_out',
    // ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'listing' => 'array',
        'guest' => 'array',
        'customFields' => 'array',
        'integration' => 'array',
        'money' => 'array',
    ];
}
