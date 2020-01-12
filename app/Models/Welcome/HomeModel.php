<?php namespace App\Models\Welcome;

class HomeModel extends \CodeIgniter\Model {

   protected $db;
   protected $initial;

   public function __construct($initial) {
      $this->db = \Config\Database::connect();

      $this->initial = $initial;
   }

   function getJournalInfo() {
      $table = $this->db->table('tb_journal a');
      $table->select('a.name, b.about_journal, c.additional_content');
      $table->join('tb_journal_masthead b', 'b.id_journal = a.id');
      $table->join('tb_journal_apperance c', 'c.id_journal = a.id');
      $table->where('a.initial', $this->initial);

      $get = $table->get();
      $data = $get->getRowArray();

      if (isset($data)) {
         $response = [
            'name' => $data['name'],
            'about_journal' => str_replace('&#8230;', '...', word_limiter(strip_tags(html_entity_decode($data['about_journal'])), 30)),
            'additional_content' => html_entity_decode($data['additional_content'])
         ];
         return $response;
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

}