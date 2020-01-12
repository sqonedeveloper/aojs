<?php namespace App\Validation;

class Submission {

   public $journalPreparation = [
      'id_journal' => [
         'rules' => 'required|numeric',
         'errors' => [
            'required' => 'Can not be empty.',
            'numeric' => 'Can only be filled with numbers.'
         ]
      ]
   ];

   public $submitStart = [
      'id_journal' => [
         'rules' => 'required|numeric',
         'errors' => [
            'required' => 'Can not be empty.',
            'numeric' => 'Can only be filled with numbers.'
         ]
      ]
   ];

   public $getHistoryStart = [
      'id_journal' => [
         'rules' => 'required|numeric',
         'errors' => [
            'required' => 'Can not be empty.',
            'numeric' => 'Can only be filled with numbers.'
         ]
      ]
   ];

}