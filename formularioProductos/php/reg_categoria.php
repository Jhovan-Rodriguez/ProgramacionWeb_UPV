<?php
    include("conexion.php");
    global $pdo;
    $codigo=$_REQUEST['codigo'];
    $nombre=$_REQUEST['nombre'];
	$sql = "INSERT INTO categorias(codigo,nombre) VALUES('$codigo','$nombre')";
	$statement = $pdo->prepare($sql);
	$statement->execute();
    header("location: ../categorias.php");

	return $statement;
?>