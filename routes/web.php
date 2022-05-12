<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Http\Controllers\Admin\User;

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
    return redirect('/portal');
});

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return redirect()->route('admin.login')->with(['msg' => '请先登录']);
    });
    Route::get('/login', function () {
        return Inertia::render('admin/Login', []);
    })->name('admin.login');

    Route::get('/dashboard', function () {
        return Inertia::render('admin/Dashboard', []);
    })->name('admin.dashboard');

    Route::get('/user', [User::class, 'show'])->name('admin.user');

    Route::get('/sub/add', function () {
        return Inertia::render('sub/Add', []);
    })->name('admin.sub.add');

    Route::get('/sub/edit', function () {
        return Inertia::render('sub/Edit', []);
    })->name('admin.sub.edit');

    Route::get('/callhistorylist', function () {
        return Inertia::render('admin/CallHistoryList', []);
    })->name('admin.callhistorylist');

    Route::get('/payment', function () {
        return Inertia::render('admin/Payment', []);
    })->name('admin.payment');

    Route::get('/numbers', function () {
        return Inertia::render('admin/Numbers', []);
    })->name('admin.numbers');

    Route::get('/news', function () {
        return Inertia::render('admin/News', []);
    })->name('admin.news');

    Route::get('/report', function () {
        return Inertia::render('admin/Report', []);
    })->name('admin.report');

    Route::get('/profile', function () {
        return Inertia::render('admin/Profile', []);
    })->name('admin.profile');

    Route::get('/logout', function () {
        return redirect()->route('admin.login')->with(['msg' => '退出成功']);
    })->name('admin.logout');

    Route::get('/settings', function () {
        return Inertia::render('admin/Settings', []);
    })->name('admin.settings');

});


Route::post('/getHistoryList', [\App\Http\Controllers\Api\CallHistory::class, 'getHistoryList'])->name('getHistoryList');

Route::prefix('company')->group(function () {
    Route::get('/', function () {
        return Inertia::render('company/Dashboard');
    })->name('company.dashboard');

    Route::get('/user', function () {
        return Inertia::render('company/User', []);
    })->name('company.user');

    Route::get('/sub/add', function () {
        return Inertia::render('sub/Add', []);
    })->name('company.sub.add');

    Route::get('/sub/edit', function () {
        return Inertia::render('sub/Edit', []);
    })->name('company.sub.edit');

    Route::get('/callhistorylist', function () {
        return Inertia::render('company/CallHistoryList', []);
    })->name('company.callhistorylist');

    Route::get('/payment', function () {
        return Inertia::render('company/Payment', []);
    })->name('company.payment');

    Route::get('/report', function () {
        return Inertia::render('company/Report', []);
    })->name('company.report');

    Route::get('/customer', function () {
        return Inertia::render('company/Customer', []);
    })->name('company.customer');

    Route::get('/login', function () {
        return Inertia::render('company/Login');
    })->name('company.login');

    Route::get('/logout', function () {
        return redirect()->route('company.login')->with(['msg' => '退出成功']);
    })->name('company.logout');
});

Route::prefix('portal')->group(function () {
    Route::get('/', function () {
        return '喵头鹰呼叫中心首页';
    });
});







