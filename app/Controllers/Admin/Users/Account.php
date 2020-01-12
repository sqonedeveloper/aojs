<?php namespace App\Controllers\Admin\Users;

use App\Validation\Users as Validate;
use App\Models\Admin\Users\AccountModel;

class Account extends \App\Controllers\AdminPanel {

   public function index() {
      $this->data = [
         'title' => 'Users Account',
         'internalCss' => $this->app->datatable['css'],
         'internalJs' => [
            $this->app->datatable['js'],
            'http://localhost:8080/adminUsersAccount.js'
         ]
      ];

      $this->template($this->data);
   }
   
   public function addNew() {
      $footerJs['country'] = $this->arrayCountry();

      $this->data = [
         'title' => 'Add New Users',
         'pageType' => 'insert',
         'internalJs' => [
            'http://localhost:8080/adminUsersAccountForms.js'
         ],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }
   
   public function edit($id) {
      $model = new AccountModel();

      $footerJs['country'] = $this->arrayCountry();
      $footerJs['detail'] = $model->getDetailEdit($id);

      $this->data = [
         'title' => 'Edit Users',
         'pageType' => 'update',
         'internalJs' => [
            'http://localhost:8080/adminUsersAccountForms.js'
         ],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

   public function submit() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->{$post['pageType']})) {
            $model = new AccountModel();
            $model->submit($post);

            $response['status'] = true;
            $response['msg_response'] = 'Data saved successfully.';
            $response['emptyPost'] = $this->emptyPost($post);
         } else {
            $response['msg_response'] = 'Something went wrong.';
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

   public function delete() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->delete)) {
            $model = new AccountModel();
            $model->deleteAccount($post);

            @unlink(ROOTPATH . 'public/assets/img/.' . $post['username']);

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
         $model = new AccountModel($this->users['id']);
         $query = $model->getData();
   
         $i = $_POST['start'];
         $response = [];
         foreach ($query->getResultArray() as $data) {
            $i++;
   
            $action = '<div class="row-actions">';
            $action .= '<span class="edit"><a data-id="'.$data['id'].'">Edit</a></span>';
            $action .= '<span class="delete"><a data-id="'.$data['id'].'" data-avatar="'.$data['username'].'" data-type="delete">Delete</a></span>';
            if ($data['status'] === 'f') {
               $action .= '<span class="edit"><a data-id="'.$data['id'].'" data-status="'.$data['status'].'">Activate User</a></span>';
            } else {
               $action .= '<span class="edit"><a data-id="'.$data['id'].'" data-status="'.$data['status'].'">Suspend User</a></span>';
            }
            $action .= '</div>';
   
            $result = [];
            $result[] = $data['fullname'] . '<br/>' . $action;
            $result[] = $data['public_name'];
            $result[] = $data['username'];
            $result[] = $data['email'];
   
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

   public function suspendUser() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->suspendUser)) {
            $model = new AccountModel();
            $model->suspendUser($post);

            $status = $post['status'];
            $message = $status === 'f' ? 'activate' : 'suspended';

            $response['status'] = true;
            $response['msg_response'] = 'User successfully '.$message.'.';
         } else {
            $response['msg_response'] = 'Something went wrong.';
         }
         return $this->response->setJSON($response);
      } else {
         $this->notFound();
      }
   }

}