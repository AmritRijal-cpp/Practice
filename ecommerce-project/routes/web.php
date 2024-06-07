<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.home');
});

Route::get('/about', function () {
    return view('pages.contact');
});

Route::get('/header', function () {
    return view('includes.header');
});

Route::get('/welcome', function () {
    return view('welcome');
});