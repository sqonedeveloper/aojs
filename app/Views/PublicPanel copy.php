<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- <link rel="icon" href="images/favicon.png" type="image/x-icon"> -->
	<title><?php echo $title;?></title>
	<?php
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
			<header id="sj-header" class="sj-header sj-haslayout">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<div class="sj-topbar">
								<ul class="sj-socialicons sj-socialiconssimple">
									<li class="sj-facebook"><a href="javascript:void(0);"><i class="fa fa-facebook-f"></i></a></li>
									<li class="sj-twitter"><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
									<li class="sj-linkedin"><a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></li>
									<li class="sj-googleplus"><a href="javascript:void(0);"><i class="fab fa-google-plus-g"></i></a></li>
								</ul>
								<div class="sj-languagelogin">
									<div class="sj-loginarea">
										<ul class="sj-loging">
											<li><a href="javascript:void(0);">Login</a></li>
											<li><a href="javascript:void(0);">Register</a></li>
										</ul>
									</div>
									<div class="sj-userloginarea">
										<a href="javascript:void(0);">
											<i class="fa fa-angle-down"></i>
											<img src="images/user-img.jpg" alt="image description">
											<div class="sj-loginusername">
												<h3>Hi, Racheal</h3>
												<span>Author</span>
											</div>
										</a>
										<nav class="sj-usernav">
											<ul>
												<li><a href="underreview.html"><i class="lnr lnr-sync"></i><span>Articles Under Review</span></a></li>
												<li><a href="addtemplates.html"><i class="lnr lnr-briefcase"></i><span>Add Templates</span></a></li>
												<li><a href="aticle-list.html"><i class="lnr lnr-sync"></i><span>Aticle List</span></a></li>
												<li><a href="generalsettings.html"><i class="lnr lnr-layers"></i><span>General Settings</span></a></li>
												<li><a href="manageuser.html"><i class="lnr lnr-users"></i><span>Manage Users</span></a></li>
												<li><a href="manageeditions.html"><i class="lnr lnr-tag"></i><span>Manage Editions</span></a></li>
												<li><a href="emailtemplates.html"><i class="lnr lnr-envelope"></i><span>Email Templates</span></a></li>
												<li><a href="accountsettings.html"><i class="lnr lnr-lock"></i><span>Account Settings</span></a></li>
												<li><a href="loginregister.html"><i class="lnr lnr-exit"></i><span>Logout</span></a></li>
											</ul>
										</nav>
									</div>
									<div class="sj-languages">
										<a id="sj-languages-button" href="javascript:void(0);">
											<img src="images/flags/flag-02.jpg" alt="image description">
											<span>Eng</span>
											<i class="fa fa-angle-down"></i>
										</a>
										<ul>
											<li>
												<a href="javascript:void(0);">
													<img src="images/flags/flag-01.jpg" alt="image description">
													<span>Ara</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0);">
													<img src="images/flags/flag-02.jpg" alt="image description">
													<span>Eng</span>
												</a>
											</li>
											<li>
												<a href="javascript:void(0);">
													<img src="images/flags/flag-03.jpg" alt="image description">
													<span>Chi</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="sj-navigationarea">
								<strong class="sj-logo"><a href="index.html"><img src="images/logo.png" alt="company logo here"></a></strong>
								<div class="sj-rightarea">
									<nav id="sj-nav" class="sj-nav navbar-expand-lg">
										<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
											<i class="lnr lnr-menu"></i>
										</button>
										<div class="collapse navbar-collapse sj-navigation" id="navbarNav">
											<ul>
												<li class="current-menu-item menu-item-has-children page_item_has_children">
													<a href="javascript:void(0);"><i class="lnr lnr-home"></i></a>
													<ul class="sub-menu">
														<li><a href="index.html">Home V One</a></li>
													</ul>
												</li>
												<li>
													<a href="aboutus.html">About us</a>
												</li>
												<li class="menu-item-has-children page_item_has_children">
													<a href="javascript:void(0);">Articles</a>
													<ul class="sub-menu">
														<li><a href="articles.html">Articles</a></li>
														<li><a href="aticle-list.html">Aticle List</a></li>
														<li><a href="articledetail.html">Article Detail</a></li>
														<li><a href="submitarticle.html">Submit Article</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children page_item_has_children">
													<span class="sj-tagnew">New</span>
													<a href="javascript:void(0);">Issues</a>
													<ul class="sub-menu">
														<li><a href="issuesweeks.html">Issues Weeks</a></li>
														<li><a href="issuesyears.html">Issues Years</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children page_item_has_children">
													<a href="javascript:void(0);">Pages</a>
													<ul class="sub-menu">
														<li class="menu-item-has-children page_item_has_children">
															<a href="javascript:void(0);">News</a>
															<ul class="sub-menu">
																<li><a href="newsgrid.html">News Grid</a></li>
																<li><a href="newslist.html">News List</a></li>
																<li><a href="newsdetail.html">News Detail</a></li>
															</ul>
														</li>
														<li class="menu-item-has-children page_item_has_children">
															<a href="javascript:void(0);">Manage User</a>
															<ul class="sub-menu">
																<li><a href="manageuser.html">Manage User</a></li>
																<li><a href="manageeditions.html">Manage Editions</a></li>
															</ul>
														</li>
														<li class="menu-item-has-children page_item_has_children">
															<a href="javascript:void(0);">Settings</a>
															<ul class="sub-menu">
																<li><a href="accountsettings.html">Account Settings</a></li>
																<li><a href="generalsettings.html">General Settings</a></li>
															</ul>
														</li>
														<li><a href="authorguideline.html">Author Guideline</a></li>
														<li><a href="underreview.html">Under Review</a></li>
														<li><a href="addtemplates.html">Add Templates</a></li>
														<li><a href="checkout.html">Checkout</a></li>
														<li class="menu-item-has-children page_item_has_children">
															<a href="javascript:void(0);">Login</a>
															<ul class="sub-menu">
																<li><a href="loginregister.html">Login Register</a></li>
																<li><a href="loginregistervtwo.html">Login Register V Two</a></li>
															</ul>
														</li>
														<li><a href="404error.html">404 Error</a></li>
														<li><a href="comingsoon.html">Coming Soon</a></li>
													</ul>
												</li>
											</ul>
										</div>
									</nav>
									<a class="sj-btntopsearch" href="#sj-searcharea"><i class="lnr lnr-magnifier"></i></a>
									<a class="sj-btn sj-btnactive" href="javascript:void(0);">Submit Your Article</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<!--************************************
					Header End
			*************************************-->
			<!--************************************
					Home Banner Start
			*************************************-->
			<div id="sj-homebanner" class="sj-homebanner">
				<div class="container">
					<div class="row">
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<div class="sj-postbook">
								<figure class="sj-featureimg">
									<a class="sj-btnvideo" href="javascript:void(0);"><i class="lnr lnr-film-play"></i><span>Watch Video Documentary</span></a>
									<div class="sj-bookimg">
										<div class="sj-frontcover"><img src="images/slider/fronimg.png" alt="image description"></div>
									</div>
								</figure>
							</div>
						</div>
						<div class="col-12 col-sm-12 col-md-6 col-lg-6">
							<div class="sj-bannercontent">
								<h1><span>We Welcome Latest</span>Research Articles in<span>Field of Science</span></h1>
								<div class="sj-description">
									<p>Consectetur adipisicing elit sedaui sedaui labore quis nostrud exercitation... <a href="javascript:void(0);">Read more</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--************************************
					Home Banner End
			*************************************-->
			<!--************************************
					Main Start
			*************************************-->
			<main id="sj-main" class="sj-main sj-haslayout sj-sectionspace">
				<div class="sj-haslayout">
					<div class="container">
						<div class="row">
							<div class="sj-welcomegreeting">
								<div class="col-12 col-sm-12 col-md-5 col-lg-5 sj-verticalmiddle">
									<div id="sj-welcomeimgslider" class="sj-welcomeimgslider sj-welcomeslider owl-carousel">
										<figure class="sj-welcomeimg item">
											<img src="images/welcomeimg/img-01.jpg" alt="welcome Image">
										</figure>
										<figure class="sj-welcomeimg item">
											<img src="images/welcomeimg/img-02.jpg" alt="welcome Image">
										</figure>
										<figure class="sj-welcomeimg item">
											<img src="images/welcomeimg/img-03.jpg" alt="welcome Image">
										</figure>
									</div>
								</div>
								<div class="col-12 col-sm-12 col-md-7 col-lg-7 sj-verticalmiddle">
									<div class="sj-welcomecontent">
										<div class="sj-welcomehead">
											<span>Greetings &amp; Welcome</span>
											<h2>Explore Latest Researches</h2>
										</div>
										<div class="sj-description">
											<p>Consectetur adipisicing elied dotaem eiusmod incididunt ulabore etoimisi dolore magna aliqua aenimalie admie veniam aistrud exrcittion ullamco laboris utaliquip commodouis aute irure dolorendries in voluptate velit esse cillum dolore.</p>
										</div>
										<div class="sj-btnarea">
											<a class="sj-btn" href="javascript:void(0);">Read More</a>
											<a class="sj-btn sj-btnactive" href="javascript:void(0);">Buy Now</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="sj-twocolumns" class="sj-twocolumns">
					<div class="container">
						<div class="row">
							<div class="col-12 col-sm-12 col-md-8 col-lg-9">
								<div id="sj-content" class="sj-content">
								<!--************************************
										Editor's Pick Start
								*************************************-->
									<section class="sj-haslayout sj-sectioninnerspace">
										<div class="sj-borderheading">
											<h3>Editor’s Pick</h3>
											<a class="sj-btnview" href="javascript:void(0);">View All</a>
										</div>
										<div id="sj-editorchoiceslider" class="sj-editorchoiceslider sj-editorschoice owl-carousel">
											<div class="item">
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-01.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Hillary Farnham</a></span>
															<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs — An Update form</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-02.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
															<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-03.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Frederica Kinnaird</a></span>
															<h3><a href="javascript:void(0);">A Milestone for CART Cells &amp; Treatment</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
											</div>
											<div class="item">
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-01.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Hillary Farnham</a></span>
															<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs — An Update form</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-02.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
															<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-03.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Frederica Kinnaird</a></span>
															<h3><a href="javascript:void(0);">A Milestone for CART Cells &amp; Treatment</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
											</div>
											<div class="item">
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-01.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Hillary Farnham</a></span>
															<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs — An Update form</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-02.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
															<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
												<article class="sj-post sj-editorchoice">
													<figure class="sj-postimg">
														<img src="images/editorchoice/img-03.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<div class="sj-head">
															<span class="sj-username"><a href="javascript:void(0);">Frederica Kinnaird</a></span>
															<h3><a href="javascript:void(0);">A Milestone for CART Cells &amp; Treatment</a></h3>
														</div>
														<div class="sj-description">
															<p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
														</div>
														<a class="sj-btn" href="javascript:void(0);">View Full Article</a>
													</div>
												</article>
											</div>
										</div>
									</section>
								<!--************************************
										Editor's Pick End
								*************************************-->
								<!--************************************
										Previous Posts Start
								*************************************-->
									<section class="sj-haslayout sj-sectioninnerspace">
										<div class="sj-borderheading">
											<h3>Previous Issues</h3>
											<a class="sj-btnview" href="javascript:void(0);">View All</a>
										</div>
										<div class="sj-previousissues">
											<ul class="sj-navtabs nav" id="myTab" role="tablist">
												<li class="nav-item">
													<a class="nav-link active" id="home-tab" data-toggle="tab" href="#2018" role="tab" aria-controls="2018" aria-selected="true">Issues From: <span>2018</span></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" id="profile-tab" data-toggle="tab" href="#2017" role="tab" aria-controls="2017" aria-selected="false">Issues From: <span>2017</span></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" id="contact-tab" data-toggle="tab" href="#2016" role="tab" aria-controls="2016" aria-selected="false">Issues From: <span>2016</span></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" id="home-tabb" data-toggle="tab" href="#2015" role="tab" aria-controls="2015" aria-selected="true">Issues From: <span>2015</span></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" id="profile-tabb" data-toggle="tab" href="#2014" role="tab" aria-controls="2014" aria-selected="false">Issues From: <span>2014</span></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" id="contact-tabb" data-toggle="tab" href="#2013" role="tab" aria-controls="2013" aria-selected="false">Issues From: <span>2013</span></a>
												</li>
											</ul>
											<div class="sj-tabcontent tab-content" id="myTabContent">
												<div class="tab-pane fade show active" id="2018" role="tabpanel" aria-labelledby="home-tab">
													<div id="sj-issuesslider-2018" class="sj-issuesslider-2018 sj-issuesslider owl-carousel">
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
													</div>
												</div>
												<div class="tab-pane fade" id="2017" role="tabpanel" aria-labelledby="profile-tab">
													<div id="sj-issuesslider-2017" class="sj-issuesslider-2017 sj-issuesslider owl-carousel">
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
													</div>
												</div>
												<div class="tab-pane fade" id="2016" role="tabpanel" aria-labelledby="contact-tab">
													<div id="sj-issuesslider-2016" class="sj-issuesslider-2016 sj-issuesslider owl-carousel">
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
													</div>
												</div>
												<div class="tab-pane fade" id="2015" role="tabpanel" aria-labelledby="home-tab">
													<div id="sj-issuesslider-2015" class="sj-issuesslider-2015 sj-issuesslider owl-carousel">
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
													</div>
												</div>
												<div class="tab-pane fade" id="2014" role="tabpanel" aria-labelledby="profile-tab">
													<div id="sj-issuesslider-2014" class="sj-issuesslider-2014 sj-issuesslider owl-carousel">
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
													</div>
												</div>
												<div class="tab-pane fade" id="2013" role="tabpanel" aria-labelledby="contact-tab">
													<div id="sj-issuesslider-2013" class="sj-issuesslider-2013 sj-issuesslider owl-carousel">
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
														<div class="item">
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-04.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Coleman Hoff</a></span>
																		<h3><a href="javascript:void(0);">Toward Better-Quality Compounded Drugs</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-05.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Kimberly Delapena</a></span>
																		<h3><a href="javascript:void(0);">Swallowing a Spy</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-06.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Milan Poat</a></span>
																		<h3><a href="javascript:void(0);">Emergency Legal Authority &amp; the Crisis</a></h3>
																	</div>
																</div>
															</article>
															<article class="sj-post sj-editorchoice sj-smallpost">
																<figure class="sj-postimg">
																	<img src="images/editorchoice/img-07.jpg" alt="image description">
																</figure>
																<div class="sj-postcontent">
																	<div class="sj-head">
																		<span class="sj-username"><a href="javascript:void(0);">Camilla Hofstetter</a></span>
																		<h3><a href="javascript:void(0);">Talaromyces marneffei Infection</a></h3>
																	</div>
																</div>
															</article>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
								<!--************************************
										Previous Posts End
								*************************************-->
								<!--************************************
										Up Coming Books Start
								*************************************-->
									<section class="sj-haslayout sj-sectioninnerspace">
										<div class="sj-borderheading">
											<h3>Coming In 2018</h3>
											<a class="sj-btnview" href="javascript:void(0);">View All</a>
										</div>
										<div id="sj-upcomingbooksslider" class="sj-upcomingbooksslider sj-upcomingbooks owl-carousel">
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-01.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Revealing of Behavioral</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-02.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Communication Theory</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-03.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Translational Animal</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-04.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Journal of Communication</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-05.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Journal of Burn Care</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-06.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Journal of Communication</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-07.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Translational Animal Science</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-08.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Communication Theory</a></h3>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="sj-upcomingbook">
													<figure class="sj-upcomingbookimg">
														<img src="images/comingbooks/img-09.jpg" alt="image description">
													</figure>
													<div class="sj-postcontent">
														<h3><a href="javascript:void(0);">Revealing of Behavioral</a></h3>
													</div>
												</div>
											</div>
										</div>
									</section>
								<!--************************************
										Up Coming Books End
								*************************************-->
								<!--************************************
										News Articles Start
								*************************************-->
									<section class="sj-haslayout sj-sectioninnerspace">
										<div class="sj-borderheading">
											<h3>What's Hot In News</h3>
											<a class="sj-btnview" href="javascript:void(0);">View All</a>
										</div>
										<div class="sj-newsposts">
											<div id="sj-newsarticlesslider" class="sj-newsarticlesslider sj-newsarticles owl-carousel">
												<div class="item">
													<div class="sj-newsarticle">
														<figure class="sj-newsimg">
															<img src="images/news/img-01.jpg" alt="image description">
														</figure>
														<div class="sj-newscontent">
															<div class="sj-newshead">
																<time datetime="2018-12-12" class="sj-posttimedate">Tuesday, Apr 21, 2017</time>
																<h3><a href="javascript:void(0);">Moving Toward Better-Quality Compounded Drugs</a></h3>
															</div>
															<div class="sj-description">
																<p>Consectetur adipisicing elit sed incididunt labore... <a href="javascript:void(0);">Read More</a></p>
															</div>
														</div>
													</div>
												</div>
												<div class="item">
													<div class="sj-newsarticle">
														<figure class="sj-newsimg">
															<img src="images/news/img-02.jpg" alt="image description">
														</figure>
														<div class="sj-newscontent">
															<div class="sj-newshead">
																<time datetime="2018-12-12" class="sj-posttimedate">Tuesday, Apr 21, 2017</time>
																<h3><a href="javascript:void(0);">Moving Toward Better-Quality Compounded Drugs</a></h3>
															</div>
															<div class="sj-description">
																<p>Consectetur adipisicing elit sed incididunt labore... <a href="javascript:void(0);">Read More</a></p>
															</div>
														</div>
													</div>
												</div>
												<div class="item">
													<div class="sj-newsarticle">
														<figure class="sj-newsimg">
															<img src="images/news/img-03.jpg" alt="image description">
														</figure>
														<div class="sj-newscontent">
															<div class="sj-newshead">
																<time datetime="2018-12-12" class="sj-posttimedate">Tuesday, Apr 21, 2017</time>
																<h3><a href="javascript:void(0);">Moving Toward Better-Quality Compounded Drugs</a></h3>
															</div>
															<div class="sj-description">
																<p>Consectetur adipisicing elit sed incididunt labore... <a href="javascript:void(0);">Read More</a></p>
															</div>
														</div>
													</div>
												</div>
												<div class="item">
													<div class="sj-newsarticle">
														<figure class="sj-newsimg">
															<img src="images/news/img-01.jpg" alt="image description">
														</figure>
														<div class="sj-newscontent">
															<div class="sj-newshead">
																<time datetime="2018-12-12" class="sj-posttimedate">Tuesday, Apr 21, 2017</time>
																<h3><a href="javascript:void(0);">Moving Toward Better-Quality Compounded Drugs</a></h3>
															</div>
															<div class="sj-description">
																<p>Consectetur adipisicing elit sed incididunt labore... <a href="javascript:void(0);">Read More</a></p>
															</div>
														</div>
													</div>
												</div>
												<div class="item">
													<div class="sj-newsarticle">
														<figure class="sj-newsimg">
															<img src="images/news/img-02.jpg" alt="image description">
														</figure>
														<div class="sj-newscontent">
															<div class="sj-newshead">
																<time datetime="2018-12-12" class="sj-posttimedate">Tuesday, Apr 21, 2017</time>
																<h3><a href="javascript:void(0);">Moving Toward Better-Quality Compounded Drugs</a></h3>
															</div>
															<div class="sj-description">
																<p>Consectetur adipisicing elit sed incididunt labore... <a href="javascript:void(0);">Read More</a></p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
								<!--************************************
										News Articles End
								*************************************-->
								</div>
							</div>
							<div class="col-12 col-sm-12 col-md-4 col-lg-3">
								<aside id="sj-sidebar" class="sj-sidebar">
									<div class="sj-widget sj-widgetsearch">
										<div class="sj-widgetcontent">
											<form class="sj-formtheme sj-formsearch">
												<fieldset>
													<input type="search" name="search" class="form-control" placeholder="Search here">
													<button type="submit" class="sj-btnsearch"><i class="lnr lnr-magnifier"></i></button>
												</fieldset>
											</form>
										</div>
									</div>
									<div class="sj-widget sj-widgetimpactfector">
										<div class="sj-widgetcontent">
											<ul>
												<li>
													<h3>Impact Factor<span>2.125</span></h3>
													<h3>5 Year Impact Factor<span>2.853</span></h3>
												</li>
												<li>
													<h3>Dr. Desmond Bratton</h3>
													<div class="sj-description">
														<p>Consectetur adipisicing elit sedo amod tempor incididunt. <a href="javascript:void(0)">Read More</a></p>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div class="sj-widget sj-widgetnoticeboard">
										<div class="sj-widgetheading">
											<h3>Notice Board</h3>
										</div>
										<div class="sj-widgetcontent">
											<ul>
												<li><a href="javascript:void(0);">Adipisicing elitaium sed dotas eiusm tempor incididunt utae labore etiate dolore magna aliqua enim.</a></li>
												<li><a href="javascript:void(0);">Labore etiat dolore magna aliquaen ad minim veniam.</a></li>
												<li><a href="javascript:void(0);">Duis aute irure dolor in reprehender</a></li>
											</ul>
										</div>
									</div>
									<div class="sj-widget sj-widgetadd">
										<span class="sj-headtitle">Advertisment 270 x270</span>
										<div class="sj-widgetcontent">
											<figure class="sj-addimage"><a href="javascript:void(0);"><img src="images/widget-add.jpg" alt="image description"></a></figure>
										</div>
									</div>
									<div class="sj-widget sj-widgetquestions">
										<div class="sj-widgetheading">
											<h3>Question Of The Week</h3>
										</div>
										<div class="sj-widgetcontent">
											<div class="sj-description">
												<p>Consectetur adipisicing elit, sed aeiuse tempor incididunt ut labore etamiudon magna aliqua enim ad minim?</p>
											</div>
											<div class="sj-questions">
												<div class="sj-selectgroup">
													<span class="sj-radio">
														<input id="sj-qone" type="radio" name="question" value="qone" checked="">
														<label for="sj-qone">Sputum stain for acid-fast bacilli</label>
													</span>
													<span class="sj-radio">
														<input id="sj-qtwo" type="radio" name="question" value="qtwo">
														<label for="sj-qtwo">Pleural biopsy</label>
													</span>
													<span class="sj-radio">
														<input id="sj-qthree" type="radio" name="question" value="qthree">
														<label for="sj-qthree">Pleural fluid amylase</label>
													</span>
													<span class="sj-radio">
														<input id="sj-qfour" type="radio" name="question" value="qfour">
														<label for="sj-qfour">Pleural fluid cytology</label>
													</span>
												</div>
												<a class="sj-btn" href="javascript:void(0);">Submit Now</a>
											</div>
										</div>
									</div>
									<div class="sj-widget sj-widgetadd">
										<div class="sj-widgetcontent">
											<figure class="sj-addimage"><a href="javascript:void(0);"><img src="images/widget-add2.jpg" alt="image description"></a></figure>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</main>
			<!--************************************
					Main End
			*************************************-->
			<!--************************************
					Footer Start
			*************************************-->
			<footer id="sj-footer" class="sj-footer sj-haslayout">
				<div class="container">
					<div class="row">
						<a class="sj-btnscrolltotop" href="javascript:void(0);"><i class="fa fa-angle-up"></i></a>
						<div class="sj-footercolumns">
							<div class="col-12 col-sm-6 col-md-6 col-lg-3 float-left">
								<div class="sj-fcol sj-footeraboutus">
									<strong class="sj-logo">
										<a href="index.html"><img src="images/logo.png" alt="image description"></a>
									</strong>
									<div class="sj-description">
										<p>Eiusmod tempor incididunt ut labore etai dolore magna aliqua enim nostrud exercitation... <a href="javascript:void(0);">Read More</a></p>
									</div>
									<ul class="sj-socialicons sj-socialiconssimple">
										<li class="sj-facebook"><a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a></li>
										<li class="sj-twitter"><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
										<li class="sj-linkedin"><a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></li>
										<li class="sj-googleplus"><a href="javascript:void(0);"><i class="fab fa-google-plus-g"></i></a></li>
										<li class="sj-rss"><a href="javascript:void(0);"><i class="fa fa-rss"></i></a></li>
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
											<li><a href="javascript:void(0);">Contact Us</a></li>
											<li><a href="javascript:void(0);">Careers @ Amentojourn</a></li>
											<li><a href="javascript:void(0);">Get Help and Support</a></li>
											<li><a href="javascript:void(0);">Rights &amp; Permissions</a></li>
											<li class="sj-more"><a href="javascript:void(0);">more</a></li>
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
											<li><a href="javascript:void(0);">Authors</a></li>
											<li><a href="javascript:void(0);">Librarians</a></li>
											<li><a href="javascript:void(0);">Sponsors &amp; Advertisers</a></li>
											<li><a href="javascript:void(0);">Press &amp; Media</a></li>
											<li class="sj-more"><a href="javascript:void(0);">more</a></li>
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
	?>
</body>
</html>