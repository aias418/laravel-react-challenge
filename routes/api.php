<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [App\Http\Controllers\Api\Auth\AuthController::class,'authenticate']);
Route::post('/register', [App\Http\Controllers\Api\Auth\AuthController::class,'register']);
Route::get('/auth/user', function (Request $request) {
    $user = [
        'name' => 'admin',
        'email' => 'admin@admin.com',
        'password' => Hash::make('password'),
    ];
    return ['data' => $user];
    // return ['data' => $request->user()];
});
Route::resources([
    'reservations' => ReservationController::class,
]);  
Route::group(['middleware' => 'auth:sanctum'], function() {
    // Route::get('/auth/user', function (Request $request) {
    //     return ['data' => $request->user()];
    // });
    Route::delete('/logout', [App\Http\Controllers\Api\Auth\AuthController::class,'logout']);
    // Route::resources([
    //     'reservations' => ReservationController::class,
    // ]);   
});
