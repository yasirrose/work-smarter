<?php

namespace App\Http\Controllers\API;
use Auth;
use Validator;
use App\Models\User;
use Illuminate\Http\Request;    
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cookie;
use App\Http\Controllers\API\BaseController as BaseController;

class LoginController extends BaseController
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
         
            'email' => 'required|email',
            'password' => 'required',

        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            $success['name'] =  $user->name;

            $cookie_name = "secret";
            $cookie_token = $success['token'];
            setcookie($cookie_name, $cookie_token, time() + 3600, "/");
   
            return $this->sendResponse($success, 'Login successfully.');
        } 
        else{ 
            return $this->sendError(['status'=>false,'message'=>'Unauthorized']);
        } 
    }

    public function logout(Request $request){
        setcookie('secret', '', time() + 3600, "/");
       return $this->sendResponse('Logged Out', 'Logged out successfully.');
    }
}
