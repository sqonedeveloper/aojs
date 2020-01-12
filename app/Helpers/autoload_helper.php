<?php

function settings($key) {
   $db = \Config\Database::connect();

   $table = $db->table('tb_settings');
   $table->select($key);
   $query = $table->get();
   $data = $query->getRowArray();

   return $data[$key];
}