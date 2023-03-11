<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * @return View 
     */

    public function index()
    {
        $sendToView = [
            "isContact" => true,
            "pageTitle" => "Admin - Mensagens de Contato",
            "scripts" => $this->getScripts(),
            "styles" => $this->getStyles(),
        ];

        return view("pages.admin.contact.index", $sendToView);
    }

    /**
     * @return Array
     */

    private function getScripts()
    {
        return [
            "mainBundle" => asset("js/V1/Bundles/main.bundle.js"),
            "contactBundle" => asset("js/V1/Bundles/contact.bundle.js"),
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
