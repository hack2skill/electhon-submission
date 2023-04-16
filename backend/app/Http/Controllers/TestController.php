<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Blade;
use Revolution\Google\Sheets\Facades\Sheets;

class TestController extends Controller
{
    public function index()
    {
        $getrange = 'A:I';
        $values = Sheets::spreadsheet(env('post_spreadsheet_id'))
            ->sheet("A:I")
            ->all();



        return $values;
    }

    public function index1()
    {
        $getrange = 'A:I';
        $values = Sheets::spreadsheet('1MikSxYCtDdiu_H9GnIUtBzz8WugnmFoXnCR_U8LtifQ')
            ->sheet("A:I")
            ->all();

        $output = [];

        $values = Collection::make($values);

        $values = $values->groupBy(function ($value) {
            return $value[0];
        });


        $backgroundColor = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
        ];

        $borderColor =  [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ];

        $i = 0;

        $sums = Collection::make([]);

        $averages = Collection::make([]);

        $time = Carbon::now()->startOfDay();

        $labels = [];

        while(!$time->isTomorrow()) {
            $labels[] = $time->toTimeString();
            $time = $time->addMinutes(30);
        }

        foreach ($values as $key => $value) {
            $data = $value->pluck(3);
            $array = [0];

            $time = Carbon::now()->startOfDay();
            $index = 0;

            while(!$time->isTomorrow()) {

                $current_sum = 0;
                $current_count = 0;
                if ($index !== null){
                    try {
                        $current_ts = Carbon::createFromTimeString($value[$index][1])->format("H:m:s");
                        while ($current_ts > $time->format("H:m:s") && $current_ts < $time->clone()->addMinutes(30)->format("H:m:s")) {
                            $current_sum += $value[$index][3] < 0 ? 0 : $value[$index][3];
                            $current_count ++;
                            $index ++;
                            $current_ts = Carbon::createFromTimeString($value[$index][1])->format("H:m:s");
                        }
                    } catch (\ErrorException $e) {
                        $index = null;
                    }
                }

                $time = $time->addMinutes(30);

                if ($current_count > 1) {
                    $array[] = $current_sum / $current_count;
                } else {
                    $array[] = $current_sum;
                }
            }

            $output[] = [
                'label' => $key,
                'data' => $array,
                'borderColor'=> $borderColor[$i],
                'backgroundColor'=> $backgroundColor[$i],
                'largest_usage' => $data->max(),
                'average_usage' => $data->avg(),
                'total_usage' => $data->sum(),
                'peaks' => array_keys($array, $data->max())
            ];

            $averages->add($data->avg());

            foreach ($array as $inner_key => $item) {
                $sums[$inner_key] = ($sums[$inner_key] ?? 0) + $item;
            }

            $i++;
        }

//        $peak_indexes = array_keys($sums->toArray(), $sums->max());
//        $average = $averages->avg();

        return [
            'labels' => $labels,
            'data' => $output,
//            'peaks' => $peak_indexes,
//            'average' => $average,
        ];
    }

    public function pdf()
    {
        $html = <<<'HTML'
        <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>DIGITAL BOOTH SLIP</title>
</head>
<body>
	
	<div class="resMainTop" style="padding-top: 110px; display:flex; align-items:center; justify-content: center;width: 75%">
		<p class="allContentResMain" style="padding-top: 73px;width: 100%;text-align:center; margin-left: 20%;color:#000;font-size: 30px !important;font-family: 'Josefin Sans', sans-serif;font-weight: 400;line-height:38px;margin-top: 15%;">This is the digital booth slip of <br><u>{{ $participant_name }}</u><br>residing in {{ $team_name }}  <br>
	    </p>
	</div>
	<img style="display: inline-block;height: 70px;width: 70px;float: right;margin-top: -2%;margin-right: 25px" src="data:image/png;base64, {!! base64_encode(QrCode::format('png')->size(100)->generate($certificate_url)) !!}" alt="image">
</body>
</html>
HTML;

        return \Barryvdh\Snappy\Facades\SnappyPdf::loadHTML(Blade::render($html, [
            'participant_name' => "Bhuvanesh T G",
            'team_name' => "H8791 Batz\n Divide Suite\n 153 North Edwardomouth,\n MS 73399-9107",
            'certificate_url' => 'www.google.com'
        ]))->setPaper('a4')
            ->setOptions(['margin-top' => 0, 'margin-bottom' => 0, 'margin-left' => 0,'margin-right' => 0])
            ->inline();

    }
}
