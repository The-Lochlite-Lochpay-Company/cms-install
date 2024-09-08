<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/to-login', function (Request $request) {
    return \Lochlitecms::login();
})->name('login');