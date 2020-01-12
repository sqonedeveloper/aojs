<?php namespace App\Controllers;

use App\Validation\Login as Validate;

class Login extends \CodeIgniter\Controller {

   protected $helpers = ['style'];

   protected $db;

   public function __construct() {
      $this->db = \Config\Database::connect();
   }

   public function index() {
      $session = \Config\Services::session();

      $count = count($session->get());
      if ($count >= 6) {
         if ($session->get('isLogin')) {
            return redirect()->to(site_url('admin/dashboard'));
         }
      }

      $this->data = [
         'internalJs' => script_tag([
            'http://localhost:8080/vendor.js',
            'http://localhost:8080/login.js'
         ])
      ];

      echo view('LoginPanel', $this->data);
   }

   public function submit() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false, 'errors' => [], 'msg_response' => ''];
         $post = $this->request->getVar();
         $validate = new Validate();

         if ($this->validate($validate->submit)) {
            $data = $this->_resolve_user_login($post['username'], $post['password']);

            if ($data) {
               $session = \Config\Services::session();
               $generateUsers = [
                  'isLogin' => true,
                  'id' => $data['id'],
                  'username' => $data['username'],
                  'name' => $data['last_name'],
                  'email' => $data['email']
               ];
               $session->set($generateUsers);

               $response['status'] = true;
            } else {
               $response['msg_response'] = 'Incorrect Username or Password.';
            }
         } else {
            $response['errors'] = \Config\Services::validation()->getErrors();
         }
         return $this->response->setJSON($response);
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

   private function _resolve_user_login($username, $password) {
      $table = $this->db->table('tb_users');
      $table->select('*');
      $table->where('status', true);
      $table->where('username', $username);

      $query = $table->get();
      $data = $query->getRowArray();

      if (isset($data)) {
         $verify = $this->_verify_password_hash($password, $data['password']);

         if ($verify) {
            return $data;
         } else {
            return false;
         }
      } else {
         return false;
      }
   }

   private function _verify_password_hash($password, $hash) {
      return password_verify($password, $hash);
   }

   public function logout() {
      $session = \Config\Services::session();
      $session->remove(['isLogin', 'id', 'avatar', 'name', 'email']);
      $session->destroy();
      return redirect()->to(site_url('login'));
   }

}