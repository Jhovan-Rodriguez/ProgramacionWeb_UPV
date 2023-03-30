<?php
//Conexion a la base de datos con PDO
	$dsn = 'mysql:dbname=watchzone;host=localhost;';
	$user = 'root';
	$password = 'JhovanRdz_10K';

	try{
		$pdo = new PDO($dsn, $user, $password);
	}catch( PDOException $e ){
		echo 'Error al conectarnos: ' . $e->getMessage();
	}
?>