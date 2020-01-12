<?php namespace App\Validation;

class Login {

   public $submit = [
      'username' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ],
      'password' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ]
   ];

}