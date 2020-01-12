<?php namespace App\Validation;

class Users {

   public $insert = [
      'pageType' => 'required',
      'first_name' => [
         'rules' => 'required|min_length[2]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 2 characters.'
         ]
      ],
      'last_name' => [
         'rules' => 'required|min_length[4]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 4 characters.'
         ]
      ],
      'username' => [
         'rules' => 'required|min_length[8]|max_length[15]|is_unique[tb_users.username]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 8 characters.',
            'max_length' => 'A maximum of 15 characters.',
            'is_unique' => 'This username has already been registered.'
         ]
      ],
      'email' => [
         'rules' => 'required|min_length[8]|valid_email|is_unique[tb_users.email]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 8 characters.',
            'valid_email' => 'Email is invalid.',
            'is_unique' => 'This e-mail is already registered.'
         ]
      ],
      'password' => [
         'rules' => 'required|min_length[6]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 6 characters.',
         ]
      ],
      'confirm_password' => [
         'rules' => 'required|min_length[6]|matches[password]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 6 characters.',
            'matches' => 'Passwords don\'t match.'
         ]
      ],
      'country' => [
         'rules' => 'required|min_length[2]|max_length[2]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 2 characters.',
            'max_length' => 'A maximum of 2 characters.'
         ]
      ]
   ];

   public $update = [
      'pageType' => 'required',
      'id' => 'required|numeric',
      'first_name' => [
         'rules' => 'required|min_length[2]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 2 characters.'
         ]
      ],
      'last_name' => [
         'rules' => 'required|min_length[4]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 4 characters.'
         ]
      ],
      'username' => [
         'rules' => 'required|min_length[8]|max_length[15]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 8 characters.',
            'max_length' => 'A maximum of 15 characters.'
         ]
      ],
      'email' => [
         'rules' => 'required|min_length[8]|valid_email',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 8 characters.',
            'valid_email' => 'Email is invalid.'
         ]
      ],
      'confirm_password' => [
         'rules' => 'matches[password]',
         'errors' => [
            'matches' => 'Passwords don\'t match.'
         ]
      ],
      'country' => [
         'rules' => 'required|min_length[2]|max_length[2]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 2 characters.',
            'max_length' => 'A maximum of 2 characters.'
         ]
      ]
   ];

   public $delete = [
      'id' => 'required|numeric'
   ];

   public $updateProfileTab_1 = [
      'first_name' => [
         'rules' => 'required|min_length[2]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 2 characters.'
         ]
      ],
      'last_name' => [
         'rules' => 'required|min_length[4]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 4 characters.'
         ]
      ],
      'username' => [
         'rules' => 'required|min_length[8]|max_length[15]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 8 characters.',
            'max_length' => 'A maximum of 15 characters.'
         ]
      ],
      'email' => [
         'rules' => 'required|min_length[8]|valid_email',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 8 characters.',
            'valid_email' => 'Email is invalid.'
         ]
      ],
      'country' => [
         'rules' => 'required|min_length[2]|max_length[2]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 2 characters.',
            'max_length' => 'A maximum of 2 characters.'
         ]
      ]
   ];

   public $suspendUser = [
      'id' => 'required|numeric',
      'status' => 'required'
   ];

}