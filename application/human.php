<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
	<link href="main.css" rel="stylesheet" type="text/css">
	<title>Portfolio Jorge Cabrera Ruiz</title>

	<script src="jquery-1.9.1.min.js"></script>
	<script src="parallax.js"></script>
</head>

<?php include_once 'php/language.php';?>

<body>
	<div id="Background">
	    <div id="Farest" class="FarestContainer"></div>
	    <div id="Middle" class="MiddleContainer"></div>
	    <div id="Nearest" class="NearestContainer"></div>
    </div>
    
    <div class="Menu" id="MainMenu">
    	<div class="ItemMenu" id="projects"><div class="ItemBullet">//</div><?php getString("Projects")?></div>
    	<div class="ItemMenu" id="resume"><div class="ItemBullet">//</div><?php getString("Resume")?></div>
    	<div class="ItemMenu" id="about"><div class="ItemBullet">//</div><?php getString("About me")?></div>
    	<div class="ItemMenu" id="contact"><div class="ItemBullet">//</div><?php getString("Contact")?></div>
    </div>
    
    
    
    <!-- <button type="button" onclick="populate()">Populate</button>
    <button type="button" onclick="moveContainer()">Move</button>
    <p id="nTrays" style="color: white"></p>
    <p id="nElements" style="color: white"></p>
     -->
    <div class="BackgroundContent" id="backgroundContent">
	    <div class="Content" id="content"></div>
    </div>
<!--     <section class="Container"> -->
    <div class="Round"><div class="InnerRound"><img class="IconRound" src="images/home.png"/></div></div>
<!--     </section> -->
    </body>
</html>