<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'title' => 'Welcome'
    ]);
});
Route::get('/admin/login', function () {
    return Inertia::render('admin/Login', []);
})->name('admin.login');

Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/Dashboard', []);
})->name('admin.dashboard');

Route::get('/admin/user', [\App\Http\Controllers\Admin\User::class, 'show'])->name('admin.user');

Route::get('/admin/sub/add', function () {
    return Inertia::render('sub/Add', []);
})->name('admin.sub.add');

Route::get('/admin/sub/edit', function () {
    return Inertia::render('sub/Edit', []);
})->name('admin.sub.edit');

Route::get('/admin/callhistorylist', function () {
    return Inertia::render('admin/CallHistoryList', []);
})->name('admin.callhistorylist');

Route::get('/admin/payment', function () {
    return Inertia::render('admin/Payment', []);
})->name('admin.payment');

Route::get('/admin/numbers', function () {
    return Inertia::render('admin/Numbers', []);
})->name('admin.numbers');

Route::get('/admin/news', function () {
    return Inertia::render('admin/News', []);
})->name('admin.news');

Route::get('/admin/report', function () {
    return Inertia::render('admin/Report', []);
})->name('admin.report');

Route::get('/admin/profile', function () {
    return Inertia::render('admin/Profile', []);
})->name('admin.profile');

Route::get('/admin/logout', function () {
    return '退出登录';
})->name('admin.logout');

Route::get('/company/logout', function () {
    return '退出登录';
})->name('company.logout');









