<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * @return View 
     */

    public function index()
    {
        $sendToView = [
            "isProducts" => true,
            "pageTitle" => "Admin - Meus Produtos",
            "scripts" => $this->getScripts(),
            "styles" => $this->getStyles(),
        ];

        return view("pages.admin.products.index", $sendToView);
    }

    /**
     * @return Array
     */

    private function getScripts()
    {
        return [
            "mainBundle" => asset("js/V1/Bundles/main.bundle.js"),
            "productsBundle" => asset("js/V1/Bundles/products.bundle.js"),
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
