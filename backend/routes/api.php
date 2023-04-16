<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', \App\Http\Controllers\Auth\LoginController::class);
Route::post('/admin/login', [\App\Http\Controllers\Auth\AdminController::class, 'login']);
Route::post('/verify', \App\Http\Controllers\Auth\VerifyController::class);

Route::middleware('auth:sanctum')->group(function() {
    Route::post('/campaign', [\App\Http\Controllers\InstitutionController::class, 'store']);
});

Route::middleware(['auth:sanctum', 'admin'])->group(function() {
    Route::get('/admin/institutions', [\App\Http\Controllers\InstitutionController::class, 'index']);

    Route::post('admin/{institution}/count', [\App\Http\Controllers\InstitutionController::class, 'count']);
    Route::post('admin/{institution}/approve', [\App\Http\Controllers\InstitutionController::class, 'approve']);
    Route::post('admin/{institution}/reject', [\App\Http\Controllers\InstitutionController::class, 'reject']);

});


Route::any('testpdf', [\App\Http\Controllers\TestController::class, 'pdf']);
