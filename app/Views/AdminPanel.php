<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <meta name="author" content="sqone.developer@gmail.com">
   <link rel="icon" type="image/png" sizes="16x16" href="" />
   <title><?php echo $title;?></title>
   <?php
   echo css_tag([
      'assets/css/bootstrap.min.css',
      'assets/css/style.min.css',
      'assets/css/blue.css'
   ]);
   echo @$internalCss;
   echo '<style type="text/css">';
   $minify = new \App\Libraries\Minify();
   echo $minify->css('public/assets/css/custom.css');
   echo '</style>';
   ?>
   <!--[if lt IE 9]>
   <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
   <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
</head>
<body class="fix-header fix-sidebar card-no-border">
   <div class="preloader">
      <svg class="circular" viewBox="25 25 50 50">
         <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
      </svg>
   </div>
   <div id="main-wrapper">
      <div id="header" class="topbar"></div>
      <div id="sidebar"></div>
      <div class="page-wrapper" id="root"></div>
   </div>
   <?php
   echo script_tag([
      'assets/js/jquery.min.js',
      'assets/js/popper.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/jquery.slimscroll.js',
      'assets/js/waves.js',
      'assets/js/sidebarmenu.js',
      'assets/js/sticky-kit.min.js',
      'assets/js/custom.min.js'
   ]);
   echo '<script type="text/javascript">';
   echo 'var siteURL = "' . site_url() . '",';
   echo 'baseURL = "' . base_url() . '",';
   echo 'segment = ' . $segment . ',';
   echo 'pageType = "' . $pageType . '",';
   echo 'content = ' . $footerJs . ';';
   echo '</script>';
   echo $internalJs;
   ?>
</body>
</html>