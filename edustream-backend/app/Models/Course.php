<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class Course extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'courses';

    protected $fillable = [
        'title', 'description', 'video_url', 'image_url', 'price'
    ];
}
