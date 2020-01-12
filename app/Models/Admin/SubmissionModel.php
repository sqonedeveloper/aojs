<?php namespace App\Models\Admin;

use CodeIgniter\Model;

class SubmissionModel extends Model {

   protected $db;
   protected $idUsers;

   public function __construct($idUsers = null) {
      $this->db = \Config\Database::connect();
      $this->idUsers = $idUsers;
   }

   function getHistoryStart($post = []) {
      $table = $this->db->table('tb_submission_start');
      $table->select('comment');
      $table->where('id_journal', $post['id_journal']);
      $table->where('id_users', $this->idUsers);

      $get = $table->get();
      $data = $get->getRowArray();

      if (isset($data)) {
         return html_entity_decode($data['comment']);
      } else {
         return '';
      }
   }

   function submitStart($post = []) {
      $table = $this->db->table('tb_submission_start');
      $table->where('id_users', $this->idUsers);
      $table->where('id_journal', $post['id_journal']);

      $get = $table->get();
      $data = $get->getRowArray();

      if (isset($data)) {
         $table->where('id_journal', $post['id_journal']);
         $table->where('id_users', $this->idUsers);
         $table->update([
            'comment' => htmlentities($post['comment']),
            'modified' => date('Y-m-d H:i:s')
         ]);
      } else {
         $table->insert([
            'id_journal' => $post['id_journal'],
            'comment' => htmlentities($post['comment']),
            'id_users' => $this->idUsers,
            'uploaded' => date('Y-m-d H:i:s'),
            'modified' => date('Y-m-d H:i:s')
         ]);
      }
   }

   function getJournalLists() {
      $table = $this->db->table('tb_journal_users a');
      $table->select('a.id_journal, b.name');
      $table->join('tb_journal b', 'b.id = a.id_journal');
      $table->where('a.id_users', $this->idUsers);

      $get = $table->get();
      $data = $get->getRowArray();

      if (isset($data)) {
         return $get->getResultArray();
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

   function journalPreparation($idJournal) {
      $table = $this->db->table('tb_journal_submission_preparation');
      $table->select('label');
      $table->where('id_journal', $idJournal);

      $get = $table->get();
      return $get->getResultArray();
   }

}