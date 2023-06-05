<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [API\LoginController::class, 'login']);

Route::post('/register', [API\RegisterController::class, 'register']);
// Route::post('logout','UserController@logoutApi');
// Route::post('logout', [API\LoginController::class, 'logoutApi']);
Route::middleware('token')->group(function () {
    Route::post('logout', [API\LoginController::class, 'logout']); 
});

    
Route::group(['prefix' => 'admin',  'middleware' => 'token'], function(){

    Route::get('getAdminInfo', [API\AdminController::class, 'getAdminInfo']); 
    Route::post('updateAdminInfo', [API\AdminController::class, 'updateAdminInfo']); 
    Route::post('updatePassword', [API\AdminController::class, 'updatePassword']); 
    Route::post('updateEmail', [API\AdminController::class, 'updateEmail']);
    Route::get('getUserLogs', [API\AdminController::class, 'getUserLogs']);
    Route::get('getAppLinks', [API\AdminController::class, 'getAppLinks']);
    Route::post('createUser', [API\AdminController::class, 'createUser']);
    Route::get('getUsers', [API\AdminController::class, 'getUsers']);
    Route::post('updateProfileInfo', [API\AdminController::class, 'updateProfileInfo']);
});

Route::group(['prefix' => 'client',  'middleware' => 'token'], function(){
    
});