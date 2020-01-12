<?php namespace App\Models\Admin\Users;

use CodeIgniter\Model;

class AccountModel extends Model {

   protected $db;
   protected $idUsers;

   public function __construct($idUsers = null) {
      $this->db = \Config\Database::connect();

      $this->idUsers = $idUsers;
   }

   function suspendUser($post = []) {
      $status = $post['status'];
      $data['status'] = $status === 'f' ? true : false;

      $table = $this->db->table('tb_users');
      $table->where('id', $post['id']);
      $table->update($data);
   }

   function deleteAccount($post = []) {
      $table = $this->db->table('tb_users');
      $table->where('id', $post['id']);
      $table->where('id !=', $this->idUsers);
      $table->delete();
   }

   function getDetailEdit($id) {
      $table = $this->db->table('tb_users');
      $table->select('first_name, last_name, public_name, username, email, country');
      $table->where('id', $id);
      $table->where('id !=', $this->idUsers);
      $query = $table->get();
      $data = $query->getRowArray();

      if (isset($data)) {
         return $data;
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

   function submit($post = []) {
      $table = $this->db->table('tb_users');

      if ($post['pageType'] === 'insert') {
         $post['password'] = password_hash($post['password'], PASSWORD_BCRYPT);
         $post['uploaded'] = date('Y-m-d H:i:s');
         $post['modified'] = date('Y-m-d H:i:s');
         $post['status'] = true;

         unset($post['pageType'], $post['confirm_password']);
         $table->insert($post);
      } else if ($post['pageType'] === 'update') {
         unset($post['pageType'], $post['username'], $post['email'], $post['confirm_password']);

         if (!empty($post['password'])) {
            $post['password'] = password_hash($post['password'], PASSWORD_BCRYPT);
         } else {
            unset($post['password']);
         }

         $table->where('id', $post['id']);
         unset($post['id']);
         $table->update($post);
      }
   }

   function getData() {
      $table = $this->_queryData();
      if ($_POST['length'] != -1)
         $table->limit($_POST['length'], $_POST['start']);
      return $table->get();
   }
   
   function countData() {
      $table = $this->db->table('tb_users');
      $table->where('id !=', $this->idUsers);
      return $table->countAllResults();
   }
   
   function filteredData() {
      $table = $this->_queryData();
      return $table->countAllResults();
   }
   
   private function _queryData() {
      $table = $this->db->table('tb_users');
      $table->select('id, concat(last_name, \' \', first_name) as fullname, public_name, username, email, status');
      $table->where('id !=', $this->idUsers);
   
      $i = 0;
      $column_search = ['first_name', 'last_name', 'public_name', 'username', 'email'];
      $column_order = ['last_name', 'public_name', 'username', 'email'];
      foreach ($column_search as $item) {
         if ($_POST['search']['value']) {
            if ($i === 0) {
               $table->groupStart();
               $table->like($item, $_POST['search']['value']);
            } else {
               $table->orLike($item, $_POST['search']['value']);
            }
   
            if (count($column_search) - 1 == $i)
               $table->groupEnd();
         }
         $i++;
      }
   
      $column = $_POST['order'][0]['column'];
      $dir = $_POST['order'][0]['dir'];
      $table->orderBy($column_order[$column], $dir);

      return $table;
   }

}