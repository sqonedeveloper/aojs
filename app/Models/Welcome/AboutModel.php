<?php namespace App\Models\Welcome;

class AboutModel extends \CodeIgniter\Model {

   protected $db;
   protected $initial;
   protected $isLogin;

   public function __construct($initial) {
      $this->db = \Config\Database::connect();
      $this->initial = $initial;

      $session = \Config\Services::session();
      $this->isLogin = $session->get('isLogin');
   }

   public function submissions() {
      $table = $this->db->table('tb_journal a');
      $table->select('b.privacy_statement, a.id');
      $table->join('tb_journal_submission b', 'b.id_journal = a.id');
      $table->where('a.initial', $this->initial);

      $get = $table->get();
      $data = $get->getRowArray();

      $journalPreparation = $this->db->table('tb_journal_submission_preparation');
      $journalPreparation->select('label');
      $journalPreparation->where('id_journal', $data['id']);

      $getPreparation = $journalPreparation->get();
      
      if ($this->isLogin) {
         $response['editUrl'] = [
            'privacy' => site_url('admin/journal/wizard/'.$data['id'].'/submission'),
            'submission_preparation' => site_url('admin/journal/wizard/'.$data['id'].'/submission')
         ];
      }
      $response['privacy'] = html_entity_decode($data['privacy_statement']);
      $response['submission_preparation'] = $getPreparation->getResultArray();
      return $response;
   }

   function privacy() {
      $table = $this->db->table('tb_journal a');
      $table->select('b.privacy_statement, a.id');
      $table->join('tb_journal_submission b', 'b.id_journal = a.id');
      $table->where('a.initial', $this->initial);

      $get = $table->get();
      $data = $get->getRowArray();

      if ($this->isLogin) {
         $response['editUrl']['privacy'] = site_url('admin/journal/wizard/'.$data['id'].'/submission');
      }
      $response['privacy'] = html_entity_decode($data['privacy_statement']);
      return $response;
   }

   function editorialTeam() {
      $table = $this->db->table('tb_journal a');
      $table->select('b.editorial_team, a.id');
      $table->join('tb_journal_masthead b', 'b.id_journal = a.id');
      $table->where('a.initial', $this->initial);

      $get = $table->get();
      $data = $get->getRowArray();

      if ($this->isLogin) {
         $response['editUrl']['editorial_team'] = site_url('admin/journal/wizard/'.$data['id'].'/masthead');
      }
      $response['editorial_team'] = html_entity_decode($data['editorial_team']);
      return $response;
   }

   function aboutTheJournal() {
      $table = $this->db->table('tb_journal a');
      $table->select('b.about_journal, a.id');
      $table->join('tb_journal_masthead b', 'b.id_journal = a.id');
      $table->where('a.initial', $this->initial);

      $get = $table->get();
      $data = $get->getRowArray();

      if ($this->isLogin) {
         $response['editUrl']['about_journal'] = site_url('admin/journal/wizard/'.$data['id'].'/masthead');
      }
      $response['about_journal'] = html_entity_decode($data['about_journal']);
      return $response;
   }

}