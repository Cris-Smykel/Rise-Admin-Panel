<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * @return View 
     */

    public function index()
    {
        $sendToView = [
            "pageTitle" => "Admin Blog",
            "scripts" => $this->getScripts(),
            "styles" => $this->getStyles(),
        ];

        return view("pages.admin.blog.index", $sendToView);
    }

    /**
     * @return Array
     */

    private function getScripts()
    {
        return [
            "blogBundle" => asset("js/V1/Bundles/blog.bundle.js"),
        ];
    }

    /**
     * @return Array
     */

    private function getStyles()
    {
        return [
            "globalStyles" => asset("css/V1/Pages/admin/globalStyles.css"),
            "adminStyles" => asset("css/V1/Pages/admin/admin.css")
        ];
    }
}
