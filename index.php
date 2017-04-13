<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pl" lang="pl" ng-app="projekt">
	<head>
		<title>Strona testowa</title>
		<meta name="viewport" content="initial-scale=1.0">
		<meta charset="UTF-8">
		<meta name="language" content="pl" />

    	
        <!--Bootstrap-->
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" >
        <!-- css -->
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="css/font-awesome.css">
        <link rel="stylesheet" type="text/css" href="fonts/fonts.css" >

        <meta name="Author" content="Mateusz Rzepecki" />
	</head>
	<body>
		<section class="backgrounds">
			<img class="bg-1" src="img/background-1.png"/>
			<img class="bg-2" src="img/background-2.png"/>
		</section>
		<main id="main-form">
			<div class="container">
					<div class="row">
						<div class="form-right-header col-sm-offset-5 col-sm-5">
							<h2>Your account</h2>
						</div>
					</div>
					<div class="row form-outter">
						<div class="form-left hidden-xs col-sm-offset-1 col-sm-3 col-md-offset-1 col-md-4 col-lg-offset-2 col-lg-3">
							<div class="row">
								<div class="form-left-inner">
								</div>
							</div>	
						</div>
						<div class="form-right  col-sm-7 col-md-6 col-lg-5">
							<div class="form-right-inner">
								<div class="p15">
									Take it all with you. Switch between devices, and pick up.
								</div>
								<div class="form">
									<form id="account-form" method="get" >
										<label>Your name</label>
										<input type="text" name="name" tabindex="1" required/>

										<label>Mobile</label>
										<div class="row">
											<div class="col-xs-5 col-sm-4 styled-select">
												<select class="default" name="prefix">
													<option>+48 (PL)</option>
													<option>+48 (PL)</option>
													<option>+48 (PL)</option>
													<option>+48 (PL)</option>
												</select>
											</div>
											<div class="col-xs-7 col-sm-8">
												<input type="text" name="phone" tabindex="2" onkeyup="this.value=this.value.replace(/[^0-9\-\s]/g,'');" required> 
											</div>
										</div>
										<label>Gender</label>
										<div class="row">
											<div class="gender col-xs-12">
												<fieldset id="group1" >
													<label class="gender">
														<i class="fa fa-2x fa-venus" aria-hidden="true"></i>
														<input type="radio" name="gender" value="male" required/>
													</label>
													<label class="gender">
														<i class="fa fa-2x fa-mars" aria-hidden="true"></i>
														<input type="radio" name="gender" value="female" />
													</label>
												</fieldset>
											</div>
										</div>
										<label>Date of Birth</label>
										<div class="row">
											<div class="col-xs-12 dates">
												<select class="date-select date-1" name="date-day" required> 
													<?php
														for ($day=1; $day<=31; $day++) {
													     	echo "<option>".$day ."</option>";
												     	}
													?>
												</select>
												<span class="dateaa"></span>
												<select class="date-select date-2" name="date-month" required>
													<?php
														for ($m=1; $m<=12; $m++) {
													     	$month = date("F", mktime(0,0,0,$m, 1, date("Y")));
													     	echo "<option>".$month ."</option>";
												     	}
													?>
												</select>

												<span class="dateaa"></span>
												<select class="date-select date-3" name="date-year" required>
													<?php  
														$current_year = intval(date("Y"));
														for ($year = 1900; $year <= $current_year; $year++) { 
															echo"<option>".$year."</option>";
														}
													?>
												</select>
											</div>
											
										</div>
										<input id="submit-hidden" type="submit" value="Submit" hidden>
									</form>
								</div>
								<div class="submit-form">
									<div class="submit-left">
										<span>CONTINUE</span>
									</div>
									<div class="submit-right">
									<span>→</span>
									</div>
								</div>
								<div class="form-side-nav">
									<div class="nav-inner-single">
										<span class="number">
										01
										</span>
										<span class="name">
										Personal
										</span>
									</div>
									<div class="nav-inner-single active">
										<span class="number">
										02
										</span>
										<span class="name">
										Personal
										</span>
									</div>
									<div class="nav-inner-single">
										<span class="number">
										03
										</span>
										<span class="name">
										Personal
										</span>
									</div>
									
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>	
		</main>
		<!--js-->
    	<script src="js/jquery.js"></script>
    	<script src="js/jquery-ui.min.js"></script>
    	<script src="js/moment.js"></script>
    	<script src="js/main.js"></script>
    	
        <!--Bootstrap-->
        <script src="bootstrap/js/bootstrap.min.js"></script>   
	</body>
</html>