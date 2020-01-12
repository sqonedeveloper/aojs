<?php namespace App\Validation;

class UserRoles {

   public $getUsers = [
      'id' => 'required|numeric'
   ];

   public $submit = [
      'idUsers' => 'required|numeric'
   ];

}