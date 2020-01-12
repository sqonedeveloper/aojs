<?php namespace App\Controllers;

use Config\App;
use PhpCountriesArray\CountriesArray;

include APPPATH . 'ThirdParty/CountriesArray.php';

class AdminPanel extends \CodeIgniter\Controller {

   protected $helpers = [
      'style',
      'autoload',
      'filesystem'
   ];
   
   protected $users = [];

   public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger) {
      parent::initController($request, $response, $logger);

      $this->app = new App();

      $session = \Config\Services::session();
      $count = count($session->get());
      if ($count >= 6) {
         if ($session->get('isLogin')) {
            $this->users = $session->get();
         }
      } else {
         exit('You need to login?');
      }
   }

   public function template($content = []) {
      $internalCss = [];
      if (!empty($content['internalCss'])) {
         foreach ($content['internalCss'] as $key) {
            $internalCss[] = $key;
         }
      }
      
      $internalJs = [
         'http://localhost:8080/vendor.js',
         'http://localhost:8080/adminHeader.js',
         'http://localhost:8080/adminNavigation.js'
      ];
      
      if (!empty($content['internalJs'])) {
         foreach ($content['internalJs'] as $key) {
            $internalJs[] = $key;
         }
      }

      try {
         $user['name'] = $this->users['name'];
         $user['email'] = $this->users['email'];
         $user['username'] = $this->users['username'];
      } catch (\Exception $e) {
         exit('You need to login?');
      }

      $footerJs['navigation'] = $this->_generateNavigation();
      $footerJs['user'] = $user;
      if (!empty($content['footerJs'])) {
         foreach ($content['footerJs'] as $key => $val) {
            $footerJs[$key] = $val;
         }
      }

      $data['title'] = $content['title'];
      $data['segment'] = $this->_generateSegment();
      $data['pageType'] = @$content['pageType'];
      $data['internalCss'] = css_tag($internalCss);
      $data['internalJs'] = script_tag($internalJs);
      $data['footerJs'] = json_encode($footerJs);

      echo view('AdminPanel', $data);
   }

   private function _generateNavigation() {
      $db = \Config\Database::connect();

      $table = $db->table('tb_user_roles');
      $table->where('id_users', $this->users['id']);

      $get = $table->get();

      $default[] = [
         'label' => 'Dashboard',
         'icon' => 'mdi mdi-home',
         'url' => '/admin/dashboard',
         'active' => ['dashboard', 'journal'],
         'sub' => false
      ];

      $response = [];
      foreach ($get->getResultArray() as $data) {
         $response[] = $this->_configNavigation($data['id_role']);
      }
      return array_merge($default, $response);

      /* echo '<pre>';
      print_r($get->getResultArray());
      echo '</pre>';
      die();

      $config = [
         [
            'label' => 'Dashboard',
            'icon' => 'mdi mdi-home',
            'url' => '/admin/dashboard',
            'active' => ['dashboard', 'journal'],
            'sub' => false
         ], [
            'label' => 'Users',
            'icon' => 'mdi mdi-account',
            'url' => '#',
            'active' => ['users'],
            'sub' => true,
            'child' => [
               [
                  'label' => 'Account',
                  'active' => ['account', 'profile'],
                  'url' => '/admin/users/account'
               ],
               [
                  'label' => 'User Roles',
                  'active' => ['userRoles'],
                  'url' => '/admin/users/userRoles'
               ]
            ]
         ]
      ];
      return $config; */
   }

   private function _configNavigation($key) {
      $config[1] = [];
      $config[2] = [];
      $config[3] = [];
      $config[4] = [];
      $config[5] = [];
      $config[6] = [];
      $config[7] = [];
      $config[8] = [];
      $config[9] = [];
      $config[10] = [];
      $config[11] = [];
      $config[12] = [];
      $config[13] = [
         'label' => 'Submissions',
         'icon' => 'mdi mdi-home',
         'url' => '/admin/submission',
         'active' => ['submission'],
         'sub' => false
      ];
      $config[14] = [];
      $config[15] = [];
      $config[16] = [];
      $config[17] = [];
      return $config[$key];
   }

   private function _generateSegment() {
      $string = uri_string();
      $exp_string = explode('/', $string);

      $set_segment = [];
      for ($i = 0; $i < count($exp_string); $i++) {
         $set_segment[$i + 1] = $exp_string[$i];
      }

      return json_encode($set_segment);
   }

   public function notFound() {
      throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
   }

   public function emptyPost($post = []) {
      $response = [];
      foreach ($post as $key => $val) {
         $response[$key] = '';
      }
      return $response;
   }

   public function arrayCountry() {
      $response = [];
      foreach (CountriesArray::get() as $key => $val) {
         array_push($response, [
            'value' => $key,
            'label' => $val
         ]);
      }
      return $response;
   }

   public function userRoles($key = null) {
      $config = [
         ['value' => 1, 'label' => 'Journal manager'],
         ['value' => 2, 'label' => 'Journal editor'],
         ['value' => 3, 'label' => 'Production editor'],
         ['value' => 4, 'label' => 'Section editor'],
         ['value' => 5, 'label' => 'Guest editor'],
         ['value' => 6, 'label' => 'Copyeditor'],
         ['value' => 7, 'label' => 'Designer'],
         ['value' => 8, 'label' => 'Funding coordinator'],
         ['value' => 9, 'label' => 'Indexer'],
         ['value' => 10, 'label' => 'Layout Editor'],
         ['value' => 11, 'label' => 'Marketing and sales coordinator'],
         ['value' => 12, 'label' => 'Proofreader'],
         ['value' => 13, 'label' => 'Author'],
         ['value' => 14, 'label' => 'Translator'],
         ['value' => 15, 'label' => 'Reviewer'],
         ['value' => 16, 'label' => 'Reader'],
         ['value' => 17, 'label' => 'Subscription Manager']
      ];
      
      if (isset($key)) {
         return $config[$key];
      } else {
         return $config;
      }
   }

   public function articleComponents($key = null) {
      $config = [
         ['value' => 1, 'label' => 'Article Text'],
         ['value' => 2, 'label' => 'Research Instrument'],
         ['value' => 3, 'label' => 'Research Materials'],
         ['value' => 4, 'label' => 'Research Results'],
         ['value' => 5, 'label' => 'Transcripts'],
         ['value' => 6, 'label' => 'Data Analysis'],
         ['value' => 7, 'label' => 'Data Set'],
         ['value' => 8, 'label' => 'Source Texts'],
         ['value' => 9, 'label' => 'Other']
      ];

      if (isset($key)) {
         return $config[$key];
      } else {
         return $config;
      }
   }

}