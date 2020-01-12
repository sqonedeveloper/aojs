<?php namespace App\Controllers\Welcome;

use App\Models\Welcome\HomeModel;

class Home extends \App\Controllers\PublicPanel {

   public function index() {
      $model = new HomeModel($this->journal['initial']);
      $footerJs['journal'] = $model->getJournalInfo();

      $this->data = [
         'title' => $this->journal['name'],
         'internalJs' => ['http://localhost:8080/welcomeHome.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

}