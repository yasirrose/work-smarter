<?php

namespace App\Http\Controllers\Api;

use Hash;
use Validator;
use Carbon\Carbon;
use App\Models\User;
use App\Models\AppLink;
use App\Models\UserLog;
use App\Models\Keywords;
use App\Models\fileUpload;
use App\Models\UserDetail;
use App\Models\saveFileData;
use Illuminate\Http\Request;
use App\Models\fileProcessLogs;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\API\BaseController as BaseController;
   


class AdminController extends BaseController
{
    public function getAdminInfo(Request $request)
    {

   		if(Auth::guard('api')->check()){
   			if(Auth::guard('api')->user()->is_admin == 1){
   				$user = Auth::guard('api')->user();
   				return $this->sendResponse($user, 'user is admin');
   			}else{
   				return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
   			}
   		}else{
   			return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
   		}
    }
	public function updateAdminInfo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users,email,'.Auth::guard('api')->user()->id,
			'name' => 'required',
            'username' => 'required|unique:users,username,'.Auth::guard('api')->user()->id,
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
		
        $adminUser = User::where('email', Auth::guard('api')->user()->email)->first();
		$adminUser->username = $request->username;
		$adminUser->name = $request->name;
		$adminUser->email = $request->email;
        $adminUser->save();

        $success['user_id'] =  $adminUser->id;
   
        return $this->sendResponse($success, 'User updated successfully.');
    }
	public function updatePassword(Request $request)
    {
		try {
			$validator = Validator::make($request->all(), [
				'old_password' => 'required',
				'password' => 'required|same:confirm_password',
				'confirm_password' => 'required',
			]);
	   
			if($validator->fails()){
				return response()->json(['status'=>422,'message' => $validator->errors()]);
			}
			if(Auth::attempt(['email' => Auth::guard('api')->user()->email, 'password' => $request->old_password])){ 
				if($request->password == $request->confirm_password){
					$adminUser = User::where('email', Auth::guard('api')->user()->email)->first();
					$adminUser->password = bcrypt($request->password);
					$adminUser->save();
					$success['user_id'] =  $adminUser->id;
					return $this->sendResponse($success, 'Password changed successfully.');
				}else{
					return $this->sendError('mismatched', 'Please make sure new and confirm password is same');    
				}
			}else{
				return $this->sendError('old password invalid', 'Cannot verify old password');
			}
		  } catch (\Exception $e) {
			  return $e->getMessage();
		}
    }
	public function updateEmail(Request $request)
	{
		try{
			$validator = Validator::make($request->all(), [
				'email' => 'required|same:repeat_email',
				'repeat_email' => 'required',
			]);
			if($validator->fails()){
				return response()->json(['status'=>422,'message' => $validator->errors()]);
			}
			
			if($request->email == $request->repeat_email){
				$adminUser = User::where('email', Auth::guard('api')->user()->email)->first();
				$adminUser->email = $request->email;
				$adminUser->save();
				$success['user_id'] =  $adminUser->id;
				return $this->sendResponse($success, 'Email updated successfully.');
			}else{
				return $this->sendError('Something goes wrong', 'Cannot update data');
			}
		} catch (\Exception $e) {
			return $e->getMessage();
		}
	}
	public function getAppLinks(){
		try {
			$data = AppLink::orderBy('id','desc')->get();
			return $this->sendResponse($data,true);
		} catch (\Exception $e) {
			return $e->getMessage();
		}
	}
	public function getUserLogs(){
		try {
			$data = UserLog::orderBy('id','desc')->get();
			return $this->sendResponse($data,true);
		} catch (\Exception $e) {
			return $e->getMessage();
		}
	}
	public function getUsers(){
		try {
			$data = User::orderBy('id','desc')->get();
			return $this->sendResponse($data,true);
		} catch (\Exception $e) {
			return $e->getMessage();
		}
	}
	public function createUser(Request $request){
		try {
			$validator = Validator::make($request->all(), [
				'email' => 'required|email|unique:users',
				'first_name' => 'required',
				'last_name' => 'required',
				'username' => 'required',
			]);
			if($request->isRandomPassword == 1){
				$request->password = bcrypt(rand(1000,100000));
			} else {
				$validator = Validator::make($request->all(), [
					'email' => 'required|email|unique:users',
					'first_name' => 'required',
					'last_name' => 'required',
					'username' => 'required',
					'password' => 'required|same:confirm_password',
					'confirm_password' => 'required',
				]);
				$request->password = bcrypt($request->password);
			}
			if($validator->fails()){
				return response()->json(['status'=>422,'message' => $validator->errors()]);
			}
			$user = New User;
			$user->email = $request->email;
			$user->first_name = $request->first_name;
			$user->last_name = $request->last_name;
			$user->username = $request->username;
			$user->status = $request->status;
			$user->password = $request->password;
			if($user->save()){
				return $this->sendResponse($user,'Data has been updted');
			} else {
				return $this->sendResponse('Something goes wrong',false);
			}
		} catch (\Exception $e) {
			return $e->getMessage();
		}
	}
	public function updateProfileInfo(Request $request){
		try {
			$validator = Validator::make($request->all(), [
				'email' => 'required|email|unique:users',
				'first_name' => 'required',
				'last_name' => 'required',
				'mobile' => 'required',
			]);
			if($validator->fails()){
				return response()->json(['status'=>422,'message' => $validator->errors()]);
			}
		$user = User::find(Auth::guard('api')->user()->id);
		$user->first_name = $request->first_name;
		$user->last_name = $request->last_name;
		$user->email = $request->email;
		$user->mobile = $request->mobile;
		if($user->save()){
			$user = UserDetail::firstOrNew(array('user_id' => Auth::guard('api')->user()->id));
			$user->organization_name = $request->organization_name;
			$user->billing_address = $request->billing_address;
			$user->type = $request->type;
			$user->save();
			return $this->sendResponse($user,'Data has been updted');
		} else {
			return $this->sendResponse('Something goes wrong',false);
		}

		} catch (\Exception $e) {
			return $e->getMessage();
		}
	}
}