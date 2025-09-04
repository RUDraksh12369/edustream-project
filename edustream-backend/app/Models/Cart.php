<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Cart extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'carts';

    protected $fillable = [
        'user_id', // which user owns this cart
        'courses', // array of course IDs added to cart
    ];
}
