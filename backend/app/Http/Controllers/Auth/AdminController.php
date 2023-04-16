<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->firstOrFail();

        if (Hash::check($request->password, $user->password)) {
            return ['status' => 'success', 'token' => $user->createToken( 'login_token')->plainTextToken];
        }

        return response(['status' => 'failed', 'errors' => ['password' => 'Given Password doesn\'t match']], 422);
    }
}
