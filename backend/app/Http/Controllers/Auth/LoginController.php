<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Twilio\Rest\Client;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $sid = config('app.twilio.account_sid');
        $token = config('app.twilio.auth_token');
        $client = new Client($sid, $token);


        $user = User::where('voter_id', $request->voter_id)->firstOrFail();
        $verification_sid = config('app.twilio.verification_sid');

        $verification = $client->verify->v2->services($verification_sid)
            ->verifications
            ->create($user->phone, 'sms');


//        if (!$verification->valid) {
//            return ['status' => 'error', 'errors' => $verification->errors];
//        }

        return ['status' => 'success'];
    }
}
