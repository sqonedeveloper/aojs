<?php namespace App\Controllers\Admin\Users;

use App\Validation\Users as Validate;

class Profile extends \App\Controllers\AdminPanel {

   protected $db;

   public function __construct() {
      $this->db = \Config\Database::connect();
   }

   public function index() {
      $footerJs['country'] = $this->arrayCountry();
      $footerJs['detail'] = $this->_getDetailProfile();

      $this->data = [
         'title' => 'Profile',
         'internalJs' => ['http://localhost:8080/adminUsersProfile.js'],
         'footerJs' => $footerJs
      ];

      $this->template($this->data);
   }

   private function _getDetailProfile() {
      $table = $this->db->table('tb_users');
      $table->select('affiliation, bio_statement, country, email, first_name, last_name, mailing_addres, phone, public_name, signature, username, website');
      $table->where('id', $this->users['id']);

      $get = $table->get();
      $data = $get->getRowArray();

      if (isset($data)) {
         $fields = $get->getFieldNames();
         foreach ($fields as $field) {
            $response[$field] = (string) $data[$field];
         }
         return $response;
      } else {
         $this->notFound();
      }
   }

   public function update() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         $string = 'updateProfileTab_' . $post['tab'];
         if ($this->validate($validate->{$string})) {
            $this->_handleUpdate($post);
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

   private function _handleUpdate($post) {
      $table = $this->db->table('tb_users');

      if (!empty($post['password'])) {
         $post['password'] = password_hash($post['password'], PASSWORD_BCRYPT);
      } else {
         unset($post['password']);
      }

      if (!empty($post['avatar'])) {
         $path = ROOTPATH . 'public/assets/img/.' . $this->users['username'];
         write_file($path, $post['avatar']);
         @chmod($path, 0777);
      }

      unset($post['tab'], $post['confirm_password'], $post['avatar']);
      $table->where('id', $this->users['id']);
      $table->update($post);
   }

}