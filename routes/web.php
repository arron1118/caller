<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
//    return view('welcome');
    return \Inertia\Inertia::render('Welcome', [
        'title' => 'Welcome'
    ]);
});
Route::get('/admin/login', function () {
    return \Inertia\Inertia::render('Login', []);
})->name('/admin/login');

Route::get('/admin/dashboard', function () {
    return \Inertia\Inertia::render('Dashboard', []);
})->name('/admin/dashboard');

Route::get('/admin/user', function () {
    return \Inertia\Inertia::render('User', []);
})->name('/admin/user');

Route::get('/admin/callhistorylist', function () {
    return \Inertia\Inertia::render('CallHistoryList', []);
})->name('/admin/callhistorylist');
