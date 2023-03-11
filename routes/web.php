<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\V1\BlogController;
use App\Http\Controllers\V1\ProductsController;
use App\Http\Controllers\V1\NewsletterController;
use App\Http\Controllers\V1\ContactController;

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

    Route::group(["prefix" => "produtos", "controller" => ProductsController::class], function () {
        Route::get("/", "index")->name("products");
    });

    Route::group(["prefix" => "newsletter", "controller" => NewsletterController::class], function () {
        Route::get("/", "index")->name("newsletter");
    });

    Route::group(["prefix" => "contato", "controller" => ContactController::class], function () {
        Route::get("/", "index")->name("contact");
    });
});
