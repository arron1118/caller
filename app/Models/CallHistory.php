<?php

namespace App\Models;

use \Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CallHistory extends Model
{
    use HasFactory;

    protected $table = 'call_history';

    public function getCreatetimeAttribute($value)
    {
        return date('Y-m-d H:i:s', $value);
    }
}
