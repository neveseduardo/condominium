<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['cors'], 'prefix' => 'auth', 'namespace' => 'API'], function () {
	Route::post('login', 'Auth\AuthController@login');
});

Route::fallback(function(){
	return response()->json(['message' => 'A rota não foi encontrada'], 404);
});
