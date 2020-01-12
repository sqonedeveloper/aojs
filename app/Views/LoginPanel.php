<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon.png">
   <title>Login Panel</title>
   <?php
   echo css_tag([
      'assets/css/bootstrap.min.css',
      'assets/css/style.min.css',
      'assets/css/blue.css'
   ]);
   echo '<style type="text/css">';
   $minify = new \App\Libraries\Minify();
   echo $minify->css('public/assets/css/custom_login.css');
   echo '</style>';
   ?>
   <!--[if lt IE 9]>
   <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
   <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body>
   <section id="wrapper"></section>
   <?php
   echo script_tag([
      'assets/js/jquery.min.js',
      'assets/js/popper.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/waves.js'
   ]);
   echo '<script type="text/javascript">';
   echo 'var siteURL = "' . site_url() . '";';
   echo '</script>';
   echo $internalJs;
   ?>
</body>
</html>