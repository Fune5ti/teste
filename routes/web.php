<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/users', 'as' => 'users.'], function () {
    Route::get('/list', [UserController::class, 'index'])->name('index');
});
