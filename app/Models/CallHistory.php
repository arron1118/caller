<?php

namespace App\Models;

class CallHistory extends \Illuminate\Database\Eloquent\Model
{
    protected $table = 'call_history';

    public function getCreatetimeAttribute($value)
    {
        return date('Y-m-d H:i:s', $value);
    }
}
