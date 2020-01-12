<?php namespace App\Controllers\Admin\Submission;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;
use App\Controllers\AdminPanel;
use App\Models\Admin\SubmissionModel;
use App\Validation\Submission as Validate;

class Wizard extends AdminPanel {

   public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger) {
      parent::initController($request, $response, $logger);
   }

   public function start() {
      $model = new SubmissionModel($this->users['id']);
      $footerJs['listsJournal'] = $model->getJournalLists();

      $this->data = [
         'title' => 'Start',
         'internalCss' => $this->app->trumbowyg['css'],
         'internalJs' => ['http://localhost:8080/adminSubmissionWizardStart.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

   public function upload($idJournal) {
      $this->data = [
         'title' => 'Upload Submission',
         'internalJs' => ['http://localhost:8080/adminSubmissionWizardUpload.js']
      ];

      $this->template($this->data);
   }

   public function getJournalPreparation() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();
      
         if ($this->validate($validate->journalPreparation)) {
            $model = new SubmissionModel();

            $response['status'] = true;
            $response['journalPreparation'] = $model->journalPreparation($post);
         } else {
            $response['msg_response'] = 'Somerhing went wrong?';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function submitStart() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();
      
         if ($this->validate($validate->submitStart)) {
            $model = new SubmissionModel($this->users['id']);
            $model->submitStart($post);
            
            $response['status'] = true;
            $response['id_journal'] = $post['id_journal'];
         } else {
            $response['msg_response'] = 'Somerhing went wrong?';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function getHistoryStart() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();
      
         if ($this->validate($validate->getHistoryStart)) {
            $model = new SubmissionModel($this->users['id']);
            $comment = $model->getHistoryStart($post);

            $response['status'] = true;
            $response['comment'] = $comment;
         } else {
            $response['msg_response'] = 'Somerhing went wrong?';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

}