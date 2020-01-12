<?php namespace App\Controllers;

class Welcome extends \CodeIgniter\Controller {

   protected $db;

   public function __construct() {
      $this->db = \Config\Database::connect();
   }

   public function index() {
      $table = $this->db->table('tb_journal');
      $table->select('initial');
      $get = $table->get();
      $data = $get->getRowArray();
      $count = $table->countAllResults();

      if ($count === 1) {
         return redirect()->to(site_url($data['initial']));
      }
   }

}