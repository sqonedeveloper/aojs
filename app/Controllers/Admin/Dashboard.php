<?php namespace App\Controllers\Admin;

class Dashboard extends \App\Controllers\AdminPanel {

   public function index() {
      $this->data = [
         'title' => 'Dashboard',
         'internalCss' => $this->app->datatable['css'],
         'internalJs' => [
            $this->app->datatable['js'],
            'http://localhost:8080/dashboard.js'
         ]
      ];

      $this->template($this->data);
   }

}