<?php namespace App\Models\Admin\Users;

class UserRolesModel extends \CodeIgniter\Model {

   protected $db;
   protected $idUsers;

   public function __construct($idUsers = null) {
      $this->db = \Config\Database::connect();

      $this->idUsers = $idUsers;
   }

   function submit($post = []) {
      $table = $this->db->table('tb_user_roles');
      $table->where('id_users', $post['idUsers']);
      $table->delete();

      $roles = $post['roles'];
      if (!empty($roles)) {
         $setRoles = [];
         foreach (explode(',', $roles) as $key) {
            array_push($setRoles, [
               'id_users' => $post['idUsers'],
               'id_role' => $key
            ]);
         }
         $table->insertBatch($setRoles);
      }
   }

   function getUsers($post = []) {
      $table = $this->db->table('tb_users a');
      $table->select('last_name');
      $table->where('id', $post['id']);

      $get = $table->get();
      $data = $get->getRowArray();

      if (isset($data)) {
         $response = [
            'idUsers' => $post['id'],
            'last_name' => $data['last_name']
         ];
         return $response;
      } else {
         return false;
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
      $table->select('id, concat(last_name, \' \', first_name) as fullname, public_name, username, email');
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