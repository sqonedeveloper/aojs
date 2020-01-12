<?php namespace App\Controllers\Admin\Users;

use App\Models\Admin\Users\UserRolesModel;
use App\Validation\UserRoles as Validate;

class UserRoles extends \App\Controllers\AdminPanel {

   public function index() {
      $footerJs['role'] = $this->userRoles();

      $this->data = [
         'title' => 'User Roles',
         'internalCss' => $this->app->datatable['css'],
         'internalJs' => [
            $this->app->datatable['js'],
            'http://localhost:8080/adminUsersRoleLists.js'
         ],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

   public function getData() {
      if ($this->request->isAJAX()) {
         $model = new UserRolesModel($this->users['id']);
         $query = $model->getData();
   
         $i = $_POST['start'];
         $response = [];
         foreach ($query->getResultArray() as $data) {
            $i++;
   
            $result = [];
            $result['id'] = $data['id'];
            $result[] = $data['fullname'];
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
         show_404();
      }
   }

   public function getUsers() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->getUsers)) {
            $model = new UserRolesModel();
            $content = $model->getUsers($post);

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

   public function submit() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->submit)) {
            $model = new UserRolesModel();
            $model->submit($post);

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

}