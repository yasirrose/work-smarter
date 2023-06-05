<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\Auth\VerificationController;
// use Auth;
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

// Auth::routes();
// Auth::routes();
// Route::post('/register', [ApplicationController::class, 'index']);

Route::group(['middleware' => ['auth']], function() {
    /**
    * Verification Routes
    */
    Route::get('/email/verify', [VerificationController::class, 'show'])->name('verification.notice');
    Route::get('/email/verify/{id}/{hash}', [VerificationController::class, 'verify'])->name('verification.verify')->middleware(['signed']);
    Route::post('/email/resend', [VerificationController::class, 'resend'])->name('verification.resend');
    //only verified account can access with this group
    Route::group(['middleware' => ['verified']], function() {
        /**
         * Dashboard Routes
         */
        Route::get('/dashboard', 'DashboardController@index')->name('dashboard.index');
    });
   
});

Route::get('{any}', [ApplicationController::class, 'index'])->where('any', '.*');