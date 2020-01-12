<?php namespace App\Controllers;

class Sitemap extends \CodeIgniter\Controller {

   protected $db;

   public function __construct() {
      $this->db = \Config\Database::connect();
   }

   public function index($initial) {
      $table = $this->db->table('tb_journal');
      $table->select('initial');
      $table->where('initial', $initial);
      
      $query = $table->get();
      $data = $query->getRowArray();

      if (isset($data)) {
         $content = [
            'login',
            $data['initial'],
            $data['initial'] . '/register',
            $data['initial'] . '/about/submissions',
            $data['initial'] . '/about/journal',
            $data['initial'] . '/search',
            $data['initial'] . '/issue/current',
            $data['initial'] . '/issue/archive'
         ];

         $html = '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">';
         foreach ($content as $row) {
            $html .= '<url>';
            $html .= '<loc>'.site_url($row).'</loc>';
            $html .= '</url>';
         }
         $html .= '</urlset>';

         return $this->response->setXML($html);
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

}