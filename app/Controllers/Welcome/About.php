<?php namespace App\Controllers\Welcome;

use App\Models\Welcome\AboutModel;

class About extends \App\Controllers\PublicPanel {

   public function submissions() {
      $model = new AboutModel($this->journal['initial']);
      $footerJs['detail'] = $model->submissions();

      $this->data = [
         'title' => 'Submissions',
         'internalJs' => ['http://localhost:8080/welcomeAboutSubmissions.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }
   
   public function privacy() {
      $model = new AboutModel($this->journal['initial']);
      $footerJs['detail'] = $model->privacy();

      $this->data = [
         'title' => 'Privacy',
         'internalJs' => ['http://localhost:8080/welcomeAboutPrivacy.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

   public function editorialTeam() {
      $model = new AboutModel($this->journal['initial']);
      $footerJs['detail'] = $model->editorialTeam();

      $this->data = [
         'title' => 'Editorial Team',
         'internalJs' => ['http://localhost:8080/welcomeAboutEditorialTeam.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

   public function journal() {
      $model = new AboutModel($this->journal['initial']);
      $footerJs['detail'] = $model->aboutTheJournal();

      $this->data = [
         'title' => 'About the journal',
         'internalJs' => ['http://localhost:8080/welcomeAboutJournal.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

}