<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\Institution;
use Carbon\Carbon;
use Google\Service\AdMob\App;
use Illuminate\Http\Request;
use Revolution\Google\Sheets\Facades\Sheets;

class InstitutionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'is_school' => 'required|boolean',
            'email' => 'required|email',
            'phone' => 'required|string',
            'google_sheets_url' => 'required|string',
        ]);

        Institution::create($request->all() + ['added_by' => auth()->user()->id]);

        return ['status' => 'success'];
    }

    public function approve(Institution $institution)
    {
        $institution->update(['is_approved' => true]);

        //Intimate the institution email

        return ['status' => 'success'];
    }

    public function reject(Institution $institution)
    {
        $institution->delete();

        //Intimate the institution email

        return ['status' => 'success'];
    }

    public function index()
    {
        $colleges = Institution::where('is_approved', true)->where('is_school', false)->get();
        $schools = Institution::where('is_approved', true)->where('is_school', true)->get();
        $unapproved = Institution::where('is_approved', false)->get();

        return [
            'college' => $colleges,
            'school' => $schools,
            'unapproved' => $unapproved
        ];
    }

    public function count(Institution $institution)
    {
        $values = Sheets::spreadsheet($institution->google_sheets_url)
            ->sheet("A:I")
            ->all();

        unset($values[0]);

        $count = 0;

        foreach ($values as $row) {
            if ($row[1] < Carbon::now()->subYear(18)->format('d/m/Y')) {
                continue;
            }

            if (Application::where('aadhar_id', $row[2])->exists()) {
                continue;
            }

            $count++;
        }

        return $count;
    }
}
