<?php namespace App\Controllers;

class PublicPanel extends \CodeIgniter\Controller {

   protected $journal = [];
   protected $helpers = [
      'style',
      'autoload',
      'filesystem',
      'text'
   ];
   protected $segmentArray = [];

   public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger) {
      parent::initController($request, $response, $logger);

      $this->_checkJournalExists($request->uri->getSegment(1));
      $this->segmentArray = $request->uri->getSegments();
   }

   private function _checkJournalExists($initial) {
      $db = \Config\Database::connect();
      $table = $db->table('tb_journal a');
      $table->select('a.name, a.initial, b.description, b.custom_tags');
      $table->join('tb_journal_indexing b', 'b.id_journal = a.id');
      $table->where('a.initial', $initial);
      $data = $table->get()->getRowArray();

      if (isset($data)) {
         $this->journal = [
            'name' => $data['name'],
            'initial' => $data['initial'],
            'metaDescription' => $data['description'],
            'metaCustomTags' => html_entity_decode($data['custom_tags'])
         ];
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

   public function template($content = []) {
      $internalJs = [
         'http://localhost:8080/vendor.js',
         'http://localhost:8080/welcomeHeader.js'
      ];
      if (!empty($content['internalJs'])) {
         foreach ($content['internalJs'] as $key) {
            $internalJs[] = $key;
         }
      }

      $footerJs['navigation'] = $this->_generateNavigation();
      if (!empty($content['footerJs'])) {
         foreach ($content['footerJs'] as $key => $val) {
            $footerJs[$key] = $val;
         }
      }

      $data['title'] = $content['title'];
      $data['metaDescription'] = $this->journal['metaDescription'];
      $data['metaCustomTags'] = $this->journal['metaCustomTags'];
      $data['internalJs'] = script_tag($internalJs);
      $data['segment'] = json_encode($this->segmentArray);
      $data['footerJs'] = json_encode($footerJs);

      echo view('PublicPanel', $data);
   }

   private function _generateNavigation() {
      $config = [
         [
            'label' => 'Issue',
            'url' => '#',
            'active' => ['issue'],
            'sub' => true,
            'child' => [
               [
                  'label' => 'Current',
                  'active' => ['current'],
                  'url' => site_url($this->journal['initial'] . '/issue/current')
               ],
               [
                  'label' => 'Archive',
                  'active' => ['archive'],
                  'url' => site_url($this->journal['initial'] . '/issue/archive')
               ]
            ]
         ], [
            'label' => 'About',
            'url' => '#',
            'active' => ['about'],
            'sub' => true,
            'child' => [
               [
                  'label' => 'Privacy',
                  'active' => ['privacy'],
                  'url' => site_url($this->journal['initial'] . '/about/privacy')
               ],
               [
                  'label' => 'Editorial Team',
                  'active' => ['editorialTeam'],
                  'url' => site_url($this->journal['initial'] . '/about/editorialTeam')
               ],
               [
                  'label' => 'Submissions',
                  'active' => ['submissions'],
                  'url' => site_url($this->journal['initial'] . '/about/submissions')
               ]
            ]
         ]
      ];
      return $config;
   }

}