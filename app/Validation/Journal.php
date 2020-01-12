<?php namespace App\Validation;

class Journal {

   public $createJournal = [
      'journalName' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ],
      'journalInitial' => [
         'rules' => 'required|is_unique[tb_journal.initial]',
         'errors' => [
            'required' => 'Can not be empty.',
            'is_unique' => 'Initial already registered.'
         ]
      ]
   ];

   public $delete = [
      'id' => 'required|numeric',
      'initial' => 'required'
   ];

   public $updateMasthead = [
      'id_journal' => 'required|numeric',
      'name' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ],
      'initial' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ]
   ];

   public $updateContact = [
      'id_journal' => 'required|numeric',
      'name' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ],
      'email' => [
         'rules' => 'required|valid_email',
         'errors' => [
            'required' => 'Can not be empty.',
            'valid_email' => 'Email is invalid.'
         ]
      ]
   ];

   public $uploadApperance = [
      'id_journal' => 'required|numeric',
      'field' => 'required',
      'initial' => 'required',
      'files' => 'required'
   ];

   public $updateApperance = [
      'id_journal' => 'required|numeric',
      'initial' => 'required'
   ];

   public $updateSubmission = [
      'id_journal' => 'required|numeric'
   ];

   public $readImage = [
      'path' => 'required',
      'file_name' => 'required'
   ];

   public $uploadIndexing = [
      'id_journal' => 'required|numeric',
      'description' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ]
   ];

   public $createdUser = [
      'id_journal' => 'required|numeric',
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
      'country' => [
         'rules' => 'required|min_length[2]|max_length[2]',
         'errors' => [
            'required' => 'Can not be empty.',
            'min_length' => 'At least 2 characters.',
            'max_length' => 'A maximum of 2 characters.'
         ]
      ]
   ];

   public $deleteUsers = [
      'id' => 'required|numeric',
      'id_journal' => 'required|numeric'
   ];
   
   public $deleteSubmissionPreparation = [
      'id' => 'required|numeric',
      'id_journal' => 'required|numeric'
   ];
   
   public $editSubmissionPreparation = [
      'id' => 'required|numeric',
      'id_journal' => 'required|numeric'
   ];

   public $submissionPreparation = [
      'id_journal' => 'required|numeric',
      'label' => [
         'rules' => 'required',
         'errors' => [
            'required' => 'Can not be empty.'
         ]
      ]
   ];

   public $submitExistUsers = [
      'content' => 'required',
      'id_journal' => 'required|numeric'
   ];

}