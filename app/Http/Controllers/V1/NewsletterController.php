<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    /**
     * @return View 
     */

    public function index()
    {
        $sendToView = [
            "isNewsletter" => true,
            "pageTitle" => "Admin - Registro da Newsletter",
            "scripts" => $this->getScripts(),
            "styles" => $this->getStyles(),
        ];

        return view("pages.admin.newsletter.index", $sendToView);
    }

    /**
     * @return Array
     */

    private function getScripts()
    {
        return [
            "mainBundle" => asset("js/V1/Bundles/main.bundle.js"),
            "newsletterBundle" => asset("js/V1/Bundles/newsletter.bundle.js"),
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
