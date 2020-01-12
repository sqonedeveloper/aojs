<?php namespace App\Controllers;

class Readimage extends \CodeIgniter\Controller {

   public function index() {
      if ($this->request->isAJAX()) {
         $response = ['status' => false];
         $post = $this->request->getVar();

         if ($this->validate([
            'file_name' => 'required',
            'path' => 'required',
            'field_response' => 'required'
         ])) {
            $file = file_get_contents(ROOTPATH . $post['path'] . '/.' . $post['file_name']);

            $response['status'] = true;
            $response[$post['field_response']] = $file;
         }
         return $this->response->setJSON($response);
      } else {
         throw \CodeIgniter\Exceptions\PageNotFoundException::forPageNotFound();
      }
   }

}