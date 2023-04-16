<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Twilio\Rest\Client;

class VerifyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $code = $request->post('code');

        $sid = config('app.twilio.account_sid');
        $token = config('app.twilio.auth_token');
        $client = new Client($sid, $token);

        $user = User::where('voter_id', $request->voter_id)->firstOrFail();
        $verification_sid = config('app.twilio.verification_sid');

        $verification_check = $client->verify->v2->services($verification_sid)
            ->verificationChecks
            ->create(['code' => $code, 'to' => $user->phone]);

        if($verification_check->status === 'approved') {
            return ['status' => 'success', 'token' => $user->createToken( 'login_token')->plainTextToken];
        }

        return ['status' => 'failed'];
    }
}
