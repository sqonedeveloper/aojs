<?php namespace App\Models\Admin;

use CodeIgniter\I18n\Time;

class JournalModel extends \CodeIgniter\Model {

   protected $db;
   protected $idUsers;

   public function __construct($idUsers = null) {
      $this->db = \Config\Database::connect();

      $this->idUsers = $idUsers;
   }

   function submitExistUsers($post = []) {
      $content = json_decode($post['content'], true);

      $table = $this->db->table('tb_journal_users');
      $table->insert([
         'id_journal' => $post['id_journal'],
         'id_users' => $content['id']
      ]);

      return $this->_getUsersJournal($post['id_journal']);
   }

   function getUserExistsLists($userExists = []) {
      $table = $this->db->table('tb_users');
      $table->select('id, first_name, last_name, public_name, username, email, country');
      $table->whereNotIn('id', $userExists);

      $get = $table->get();
      return $get->getResultArray();
   }

   function editSubmissionPreparation($post = []) {
      $table = $this->db->table('tb_journal_submission_preparation');
      $table->select('label, id');
      $table->where('id_journal', $post['id_journal']);
      $table->where('id', $post['id']);

      $get = $table->get();
      $data = $get->getRowArray();

      if (isset($data)) {
         return $data;
      } else {
         return false;
      }
   }

   private function _getSubmissionPreparation($id_journal) {
      $table = $this->db->table('tb_journal_submission_preparation');
      $table->select('id, label');
      $table->where('id_journal', $id_journal);

      $get = $table->get();
      return $get->getResultArray();
   }

   function deleteSubmissionPreparation($post = []) {
      $table = $this->db->table('tb_journal_submission_preparation');
      $table->where('id_journal', $post['id_journal']);
      $table->where('id', $post['id']);
      $table->delete();

      return $this->_getSubmissionPreparation($post['id_journal']);
   }

   function submissionPreparation($post = []) {
      $table = $this->db->table('tb_journal_submission_preparation');
      if ($post['editPreparation'] === 'true') {
         $table->where('id', $post['idSubmissionPreparation']);
         $table->where('id_journal', $post['id_journal']);
         $table->update([
            'label' => $post['label']
         ]);
      } else {
         $table->insert([
            'id_journal' => $post['id_journal'],
            'label' => $post['label']
         ]);
      }
      
      return $this->_getSubmissionPreparation($post['id_journal']);
   }

   function deleteUsers($post = []) {
      $table = $this->db->table('tb_journal_users');
      $table->where('id', $post['id']);
      $table->where('id_journal', $post['id_journal']);
      $table->delete();

      return $this->_getUsersJournal($post['id_journal']);
   }

   private function _getUsersJournal($id_journal) {
      $table = $this->db->table('tb_journal_users a');
      $table->select('a.id, b.first_name, b.last_name, b.public_name, b.email, b.username');
      $table->join('tb_users b', 'b.id = a.id_users');
      $table->where('a.id_journal', $id_journal);

      $get = $table->get();
      $response = [];
      foreach ($get->getResultArray() as $data) {
         array_push($response, [
            'id' => $data['id'],
            'fullname' => $data['last_name'] . ' ' . $data['first_name'],
            'public_name' => $data['public_name'],
            'username' => $data['username'],
            'email' => $data['email']
         ]);
      }
      return $response;
   }

   function createdUser($post = []) {
      $journalUsers = $this->db->table('tb_journal_users');

      $fields = "(first_name, last_name, public_name, username, email, password, country)";
      $values = "('".$post['first_name']."', '".$post['last_name']."', '".$post['public_name']."', '".$post['username']."', '".$post['email']."', '".password_hash($post['password'], PASSWORD_BCRYPT)."', '".$post['country']."')";
      $sqlUsers = "insert into tb_users $fields values $values returning id;";
      $users = $this->db->query($sqlUsers)->getRowArray();

      $journalUsers->insert([
         'id_journal' => $post['id_journal'],
         'id_users' => $users['id']
      ]);

      return $this->_getUsersJournal($post['id_journal']);
   }

   function uploadIndexing($post = []) {
      $table = $this->db->table('tb_journal_indexing');

      $post['custom_tags'] = htmlentities($post['custom_tags']);

      $table->where('id_journal', $post['id_journal']);
      $table->update($post);
   }

   function uploadApperance($post = []) {
      $table = $this->db->table('tb_journal_apperance');

      $data[$post['field']] = '.' . $post['field'];

      $table->where('id_journal', $post['id_journal']);
      $table->update($data);
   }

   function updateApperance($post = []) {
      $table = $this->db->table('tb_journal_apperance');
      $table->where('id_journal', $post['id_journal']);
      $table->update([
         'page_footer' => htmlentities($post['page_footer']),
         'additional_content' => htmlentities($post['additional_content'])
      ]);
   }

   function updateContact($post = []) {
      $table = $this->db->table('tb_journal_contact');

      $table->where('id_journal', $post['id_journal']);
      $table->update($post);
   }

   function updateMasthead($post = []) {
      $journal = $this->db->table('tb_journal');
      $masthead = $this->db->table('tb_journal_masthead');

      $journal->where('id', $post['id_journal']);
      $journal->update([
         'name' => $post['name'],
         'summary' => htmlentities($post['summary']),
         'modified' => new Time('now')
      ]);

      $masthead->where('id_journal', $post['id_journal']);
      $masthead->update([
         'abbreviation' => $post['abbreviation'],
         'publisher' => $post['publisher'],
         'online_issn' => $post['online_issn'],
         'print_issn' => $post['print_issn'],
         'editorial_team' => htmlentities($post['editorial_team']),
         'about_journal' => htmlentities($post['about_journal'])
      ]);
   }

   function updateSubmission($post = []) {
      $table = $this->db->table('tb_journal_submission');
      unset($post['updateType']);

      $post['author_guidelines'] = htmlentities($post['author_guidelines']);
      $post['privacy_statement'] = htmlentities($post['privacy_statement']);

      $table->where('id_journal', $post['id_journal']);
      $table->update($post);
   }

   function getDetailJournal($id, $type) {
      $table = $this->db->table('tb_journal a');

      if ($type === 'masthead') {
         $select[$type] = ['a.name', 'a.summary', 'a.initial', 'b.abbreviation', 'b.publisher', 'b.online_issn', 'b.print_issn', 'b.editorial_team', 'b.about_journal'];
      } else if ($type === 'contact') {
         $select[$type] = ['b.name', 'b.title', 'b.email', 'b.phone', 'b.affiliation'];
      } else if ($type === 'apperance') {
         $select[$type] = ['b.page_footer', 'a.initial', 'b.additional_content'];
      } else if ($type === 'submission') {
         $select[$type] = ['b.author_guidelines', 'b.privacy_statement', 'c.id', 'c.label'];
      } else if ($type === 'indexing') {
         $select[$type] = ['b.description', 'a.initial', 'b.custom_tags'];
      } else if ($type === 'users') {
         $select[$type] = ['b.id', 'b.id_users', 'c.first_name', 'c.last_name', 'c.public_name', 'c.username', 'c.email'];
      }

      $table->select(implode(',', $select[$type]));
      $table->join('tb_journal_'. $type .' b', 'b.id_journal = a.id');
      if ($type === 'users') {
         $table->join('tb_users c', 'c.id = b.id_users', 'left');
      } else if ($type === 'submission') {
         $table->join('tb_journal_submission_preparation c', 'c.id_journal = a.id', 'left');
      }
      $table->where('a.id', $id);
      $table->where('a.author_created', $this->idUsers);
      $query = $table->get();
      $data = $query->getRowArray();

      $htmlDecode = ['summary', 'editorial_team', 'about_journal', 'author_guidelines', 'privacy_statement', 'page_footer', 'custom_tags'];

      if (isset($data)) {
         $output = [];
         foreach ($select[$type] as $fields) {
            $exp = explode('.', $fields);
            $field = $exp[1];

            if (in_array($field, $htmlDecode)) {
               $output[$field] = html_entity_decode($data[$field]);
            } else {
               $output[$field] = (string) $data[$field];
            }
         }

         $usersLists['users'] = [];
         if ($type === 'users') {
            foreach ($query->getResultArray() as $data) {
               array_push($usersLists['users'], [
                  'id' => $data['id'],
                  'id_users' => $data['id_users'],
                  'fullname' => $data['last_name'] . ' ' . $data['first_name'],
                  'public_name' => $data['public_name'],
                  'username' => $data['username'],
                  'email' => $data['email']
               ]);
            }
         }

         $submissionPreparation['submissionPreparation'] = [];
         if ($type === 'submission') {
            foreach ($query->getResultArray() as $data) {
               array_push($submissionPreparation['submissionPreparation'], [
                  'id' => $data['id'],
                  'label' => $data['label']
               ]);
            }
         }
         
         $response[$type] = array_merge($output, $usersLists, $submissionPreparation);
         return $response;
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

   function deleteJournal($post = []) {
      $apperance = $this->db->table('tb_journal_apperance');
      $apperance->select('logo, favicon, thumbnail');
      $apperance->where('id_journal', $post['id']);
      $queryApperance = $apperance->get();
      $dataApperance = $queryApperance->getRowArray();

      if (isset($dataApperance)) {
         @unlink(ROOTPATH . 'public/' . $post['initial'] . '/' . $dataApperance['logo']);
         @unlink(ROOTPATH . 'public/' . $post['initial'] . '/' . $dataApperance['favicon']);
         @unlink(ROOTPATH . 'public/' . $post['initial'] . '/' . $dataApperance['thumbnail']);
      }

      $table = $this->db->table('tb_journal');
      $table->where('id', $post['id']);
      $table->delete();
   }

   function createJournal($post = []) {
      $query = $this->db->query("insert into tb_journal (name, initial, uploaded, modified, author_created)
         values ('".$post['journalName']."', '".url_title($post['journalInitial'], '-', true)."', '".new \CodeIgniter\I18n\Time('now')."', '".new \CodeIgniter\I18n\Time('now')."', ".$this->idUsers.")
         RETURNING id;");
      $data = $query->getRowArray();

      $tableLists = ['masthead', 'contact', 'apperance', 'submission', 'indexing'];
      foreach ($tableLists as $table) {
         $submit = $this->db->table('tb_journal_' . $table);

         $submit->insert(['id_journal' => $data['id']]);
      }

      $users = $this->db->table('tb_journal_users');
      $users->insert([
         'id_journal' => $data['id'],
         'id_users' => $this->idUsers
      ]);

      return $data['id'];
   }

   function getData() {
      $table = $this->_queryData();
      if ($_POST['length'] != -1)
         $table->limit($_POST['length'], $_POST['start']);
      return $table->get();
   }
   
   function countData() {
      $table = $this->db->table('tb_journal');
      return $table->countAllResults();
   }
   
   function filteredData() {
      $table = $this->_queryData();
      return $table->countAllResults();
   }
   
   private function _queryData() {
      $table = $this->db->table('tb_journal');
      $table->select('id, name, initial');
   
      $i = 0;
      $column_search = ['name', 'initial'];
      $column_order = ['name', 'initial'];
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