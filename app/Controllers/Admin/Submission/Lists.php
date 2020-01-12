<?php namespace App\Controllers\Admin\Submission;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;
use App\Controllers\AdminPanel;
use App\Models\Admin\SubmissionModel;

class Lists extends AdminPanel {

   public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger) {
      parent::initController($request, $response, $logger);
   }

   public function index() {
      $model = new SubmissionModel($this->users['id']);
      $footerJs['journalLists'] = $model->getJournalLists();

      $this->data = [
         'title' => 'Submissions',
         'internalJs' => ['http://localhost:8080/adminSubmissionLists.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

}