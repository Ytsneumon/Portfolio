<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
	<link href="main.css" rel="stylesheet" type="text/css">
	<title>Portfolio Jorge Cabrera Ruiz</title>

	<script src="jquery-1.9.1.min.js"></script>
	<script src="main.js"></script>
</head>

<?php include_once 'php/language.php';?>

<body>
	<div class="MainDoor" id="geekversion"><?php getString("GEEK");?></div>
	<div class="MainDoor" id="humanversion" onclick="location.href='human.php'"><?php getString("HUMAN");?></div>
</body>
</html>