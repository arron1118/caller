<?php

namespace App\Http\Controllers\Api;

use App\Models\CallHistory as CallHistoryModel;
use Illuminate\Support\Facades\Request;

class CallHistory extends \App\Http\Controllers\Controller
{

    public function getHistoryList(Request $request)
    {
        $page = $request::input('page', 1);
        $limit = $request::input('limit', 10);

        $total = CallHistoryModel::count();
        $list = CallHistoryModel::orderBy('createtime', 'desc')->offset(($page - 1) * $limit)->limit($limit)->get();

        return response()->json(['code' => 1, 'msg' => 'success', 'total' => $total, 'data' => $list]);
    }
}
