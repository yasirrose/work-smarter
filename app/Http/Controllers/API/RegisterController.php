<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;
   


class RegisterController extends BaseController
{
    public function register(Request $request)
    {
        // dd('here'); 
        // dd($request);
        // $validator = Validator::make($request->all(), [
        //     // 'name' => 'required',
        //     'email' => 'required|email|unique:users',
        //     'username' => 'required|unique:users',
        //     'password' => 'required',

        // ]);
   
        // if($validator->fails()){
        //     return $this->sendError('Validation Error.', $validator->errors());       
        // }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        event(new Registered($user));
        auth()->login($user);
        // return redirect('/')->with('success', "Account successfully registered.");
        return $this->sendResponse($success, 'User register successfully.');
    }
}