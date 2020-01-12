<?php namespace App\Controllers\Admin;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;
use App\Validation\Journal as Validate;
use App\Models\Admin\JournalModel;

class Journal extends \App\Controllers\AdminPanel {

   public $userExists = [];

   public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger) {
      parent::initController($request, $response, $logger);

      $users = explode(',', $request->getGetPost('exists'));
      $this->userExists = $users;
   }

   public function wizard($id, $type) {
      $arrTitle = [
         'masthead' => 'Masthead',
         'contact' => 'Contact',
         'apperance' => 'Apperance',
         'submission' => 'Submission',
         'indexing' => 'Indexing',
         'users' => 'Users'
      ];

      if (!in_array($type, array_keys($arrTitle))) {
         $this->notFound();
      }

      $model = new JournalModel($this->users['id']);

      $this->data = [
         'title' => $arrTitle[$type],
         'internalCss' => $this->app->trumbowyg['css'],
         'internalJs' => ['http://localhost:8080/adminJournal'. ucfirst($type) .'.js'],
         'footerJs' => array_merge($model->getDetailJournal($id, $type), ['country' => $this->arrayCountry()])
      ];

      $this->template($this->data);
   }

   public function createJournal() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->createJournal)) {
            $model = new JournalModel($this->users['id']);

            $initialPath = ROOTPATH . 'public/' . url_title($post['journalInitial'], '-', true);
            if (!is_writable(ROOTPATH . 'public')) {
               $response['errors']['createPath'] = 'Permission denied ' . $initialPath;
            } else {
               mkdir($initialPath);
               chmod($initialPath, 0777);

               $writeFile = ['.logo', '.favicon', '.thumbnail'];
               foreach ($writeFile as $file) {
                  write_file($initialPath . '/' . $file, false);
                  chmod($initialPath . '/' . $file, 0777);
               }

               $response['status'] = true;
               $response['msg_response'] = 'Data saved successfully.';
               $response['content'] = $model->createJournal($post);
            }
         } else {
            $response['errors'] = \Config\Services::validation()->getErrors();
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function delete() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->delete)) {
            $model = new JournalModel();
            $model->deleteJournal($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data successfully deleted.';
         } else {
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function getData() {
      if ($this->request->isAJAX()) {
         $model = new JournalModel();
         $query = $model->getData();
   
         $i = $_POST['start'];
         $response = [];
         foreach ($query->getResultArray() as $data) {
            $i++;
   
            $action = '<div class="row-actions">';
            $action .= '<span class="edit"><a data-id="'.$data['id'].'">Edit</a></span>';
            $action .= '<span class="delete"><a data-id="'.$data['id'].'" data-initial="'.$data['initial'].'" data-type="delete">Delete</a></span>';
            $action .= '</div>';
   
            $result = [];
            $result[] = $data['name'] . '<br/>' . $action;
            $result[] = $data['initial'];
   
            $response[] = $result;
         }
   
         $output = array(
            'draw'            => intval($_POST['draw']),
            'recordsTotal'    => intval($model->countData()),
            'recordsFiltered' => intval($model->filteredData()),
            'data'            => $response
         );
         return $this->response->setJSON($output);
      } else {
         $this->notFound();
      }
   }

   public function updateMasthead() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->updateMasthead)) {
            $model = new JournalModel();
            $model->updateMasthead($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
         } else {
            $response['msg_response'] = 'Something went wrong.';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function updateContact() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->updateContact)) {
            $model = new JournalModel();
            $model->updateContact($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
         } else {
            $response['msg_response'] = 'Something went wrong.';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function uploadApperance() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->uploadApperance)) {
            /* $path = ROOTPATH . 'public/' . $post['initial'] . '/.' . $post['field'];
            write_file($path, $post['files']);

            $model = new JournalModel();
            $model->uploadApperance($post); */

            $response['status'] = true;
            $response['content'][$post['field']] = $post['files'];
         } else {
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function updateApperance() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->updateApperance)) {
            $model = new JournalModel();
            $model->updateApperance($post);

            $write_path = ROOTPATH . 'public/' . $post['initial'];
            if (!empty($post['thumbnail'])) write_file($write_path . '/.thumbnail', $post['thumbnail']);
            if (!empty($post['logo'])) write_file($write_path . '/.logo', $post['logo']);
            if (!empty($post['favicon'])) write_file($write_path . '/.favicon', $post['favicon']);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
         } else {
            $response['errors'] = \Config\Services::validation()->getErrors();
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function updateSubmission() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->updateSubmission)) {
            $model = new JournalModel();
            $model->updateSubmission($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
         } else {
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function readImage() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->readImage)) {
            $file = file_get_contents(ROOTPATH . $post['path'] . '/.' . $post['file_name']);

            $response['status'] = true;
            $response['content'][$post['file_name']] = $file;
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function uploadIndexing() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->uploadIndexing)) {
            $model = new JournalModel();
            $model->uploadIndexing($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
         } else {
            $response['msg_response'] = 'Something went wrong.';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function createdUser() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->createdUser)) {
            $model = new JournalModel();
            $content = $model->createdUser($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
            $response['emptyPost'] = $this->emptyPost($post);
            $response['usersLists'] = $content;
            $response['modalUser'] = false;
         } else {
            $response['msg_response'] = 'Something went wrong.';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function deleteUsers() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->deleteUsers)) {
            $model = new JournalModel();
            $content = $model->deleteUsers($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data successfully deleted.';
            $response['usersLists'] = $content;
         } else {
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }
   
   public function submissionPreparation() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->submissionPreparation)) {
            $model = new JournalModel();
            $content = $model->submissionPreparation($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
            $response['submissionPreparation'] = $content;
         } else {
            $response['msg_response'] = 'Something went wrong.';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function deleteSubmissionPreparation() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->deleteSubmissionPreparation)) {
            $model = new JournalModel();
            $content = $model->deleteSubmissionPreparation($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data successfully deleted.';
            $response['submissionPreparation'] = $content;
         } else {
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }
   
   public function editSubmissionPreparation() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->editSubmissionPreparation)) {
            $model = new JournalModel();
            $content = $model->editSubmissionPreparation($post);

            $response['status'] = ($content ? true : false);
            $response['content'] = $content;
         } else {
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function chooseUserExists() {
      if ($this->request->isAJAX()) {
         $model = new JournalModel();
         $response['results'] = $model->getUserExistsLists($this->userExists);
         $response['content'] = $this->userExists;

         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function submitExistUsers() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();
      
         if ($this->validate($validate->submitExistUsers)) {
            $model = new JournalModel();

            $response['status'] = true;
            $response['modalUsersExists'] = false;
            $response['msg_response'] = 'Data saved successfully.';
            $response['usersLists'] = $model->submitExistUsers($post);
         } else {
            $response['msg_response'] = 'Something went wrong?';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

}