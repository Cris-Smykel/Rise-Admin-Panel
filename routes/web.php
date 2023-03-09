<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\V1\BlogController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(["prefix" => "admin"], function () {
    Route::group(["prefix" => "blog", "controller" => BlogController::class], function () {
        Route::get("/", "index")->name("blog");
    });
});
