<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;

class User extends \App\Http\Controllers\Controller
{
    public function show()
    {
        return Inertia::render('admin/User');
    }
}
