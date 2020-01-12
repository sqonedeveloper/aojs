<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- <link rel="icon" href="images/favicon.png" type="image/x-icon"> -->
	<title><?php echo $title;?></title>
	<meta name="description" content="<?php echo $metaDescription;?>" />
	<?php
	echo $metaCustomTags;
	echo css_tag([
		'assets/css/bootstrap.min.css',
		'assets/css/normalize.min.css',
		'assets/css/icons/font-awesome/fontawesome-all.min.css',
		'assets/css/font-awesome.min.css',
		'assets/css/icons/linearicons/linearicons.css',
		'assets/css/icons/themify-icons/themify-icons.min.css',
		'assets/css/owl.carousel.css',
		'assets/css/main.css',
		'assets/css/color.css',
		'assets/css/transitions.css',
		'assets/css/responsive.css'
	]);
	echo '<style type="text/css">';
   $minify = new \App\Libraries\Minify();
   echo $minify->css('public/assets/css/public_custom.css');
   echo '</style>';
	?>
</head>
<body class="sj-home">
	<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	<div class="preloader-outer">
		<div class='loader'>
			<div class='loader--dot'></div>
			<div class='loader--dot'></div>
			<div class='loader--dot'></div>
			<div class='loader--dot'></div>
		</div>
	</div>
	<div id="sj-wrapper" class="sj-wrapper">
		<div class="sj-contentwrapper">
			<header id="sj-header" class="sj-header sj-haslayout"></header>
			<div id="root"></div>
			
			<footer id="sj-footer" class="sj-footer sj-haslayout">
				<div class="container">
					<div class="row">
						<a class="sj-btnscrolltotop" href="#"><i class="fa fa-angle-up"></i></a>
						<div class="sj-footercolumns">
							<div class="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
								<div class="sj-fcol sj-footeraboutus">
									<strong class="sj-logo">
										<a href="index.html"><img src="images/logo.png" alt="image description"></a>
									</strong>
									<div class="sj-description">
										<p>Eiusmod tempor incididunt ut labore etai dolore magna aliqua enim nostrud exercitation... <a href="#">Read More</a></p>
									</div>
									<ul class="sj-socialicons sj-socialiconssimple">
										<li class="sj-facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
										<li class="sj-twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
										<li class="sj-linkedin"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
										<li class="sj-googleplus"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
										<li class="sj-rss"><a href="#"><i class="fa fa-rss"></i></a></li>
									</ul>
								</div>
							</div>
							<div class="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
								<div class="sj-fcol sj-widget sj-widgetusefullinks">
									<div class="sj-widgetheading">
										<h3>By Specialty</h3>
									</div>
									<div class="sj-widgetcontent">
										<ul>
											<li><a href="#">Contact Us</a></li>
											<li><a href="#">Careers @ Amentojourn</a></li>
											<li><a href="#">Get Help and Support</a></li>
											<li><a href="#">Rights &amp; Permissions</a></li>
											<li class="sj-more"><a href="#">more</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
								<div class="sj-fcol sj-widget sj-widgetresources">
									<div class="sj-widgetheading">
										<h3>Resources</h3>
									</div>
									<div class="sj-widgetcontent">
										<ul>
											<li><a href="#">Authors</a></li>
											<li><a href="#">Librarians</a></li>
											<li><a href="#">Sponsors &amp; Advertisers</a></li>
											<li><a href="#">Press &amp; Media</a></li>
											<li class="sj-more"><a href="#">more</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
								<div class="sj-fcol sj-widget sj-widgetcontactus">
									<div class="sj-widgetheading">
										<h3>Get In Touch</h3>
									</div>
									<div class="sj-widgetcontent">
										<ul>
											<li><i class="lnr lnr-home"></i><address>123 Office St, ABC Building, Melbourne, Australia. </address></li>
											<li><a href="tel:(+4)123456789101"><i class="lnr lnr-phone"></i><span>(+4) 1234 5678 9101</span></a></li>
											<li><a href="tel:(+4)123456789101"><i class="lnr lnr-screen"></i><span>(+4) 4321 8765 1019</span></a></li>
											<li><a href="mailto:info@yourdomain.com"><i class="lnr lnr-envelope"></i><span>info@yourdomain.com</span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="sj-footerbottom">
							<p class="sj-copyrights">© 2019 <span>Amentojourn</span>. All Rights Reserved</p>
						</div>
					</div>
				</div>
			</footer>
			<!--************************************
					Footer End
			*************************************-->
		</div>
		<!--************************************
				Content Wrapper End
		*************************************-->
	</div>
	<!--************************************
			Wrapper End
	*************************************-->
	<!--************************************
			Search Start
	*************************************-->
	<div id="sj-searcharea" class="sj-searcharea">
		<button type="button" class="close">×</button>
		<form class="sj-formtheme sj-formsearcmain">
			<input type="search" value="" placeholder="Search Here..." />
			<button type="submit" class="sj-btn sj-btnactive"><span>Search</span></button>
		</form>
	</div>
	<!--************************************
			Search End
	*************************************-->
	<?php
	echo script_tag([
		'assets/js/modernizr-2.8.3-respond-1.4.2.min.js',
		'assets/js/jquery-3.3.1.min.js',
		'assets/js/jquery-library.js',
		'assets/js/bootstrap.min.js',
		'assets/js/owl.carousel.min.js',
		'assets/js/scrollbar.min.js',
		'assets/js/appear.min.js',
		'assets/js/main.min.js'
	]);
	echo '<script type="text/javascript">';
   echo 'var siteURL = "' . site_url() . '",';
	echo 'baseURL = "' . base_url() . '",';
	echo 'segment = ' . $segment . ',';
   echo 'content = ' . $footerJs . ';';
   echo '</script>';
   echo $internalJs;
	?>
</body>
</html>