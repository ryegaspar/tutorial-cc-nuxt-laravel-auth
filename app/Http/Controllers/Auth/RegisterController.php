<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'email'    => 'email|required|unique:users,email',
            'name'     => 'required',
            'password' => 'required'
        ]);

        $user = User::create([
            'email'    => $request->email,
            'name'     => $request->name,
            'password' => bcrypt($request->password)
        ]);

        return $user;
    }
}
