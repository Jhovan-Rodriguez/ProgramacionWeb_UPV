<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos</title>
    <link rel="stylesheet" href="sources/dist/css/adminlte.min.css?v=3.2.0">
    <link rel="stylesheet" href="sources/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">

    <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</head>
<style>
body {
  background-color: #eee;
  padding: 15px;
}

hr {
  width: 100%;
}


</style>
<body>
      <div class="container col-12 col-sm-10 col-md-9 d-flex flex-column align-items-center">
        <h3>Datos de productos!</h3>
        <hr>
        <?php
        		$conn = mysqli_connect("localhost", "root", "JhovanRdz_10K", "watchzone");
		
            // Revisando conexión
            if($conn === false){
              die("ERROR: Could not connect. "
                . mysqli_connect_error());
            }
            //Recuperación de los datos
            $codigo=$_REQUEST['codigo'];
            $nombre=$_REQUEST['nombre'];
            $precioVenta=$_REQUEST['precioVenta'];
            $precioCompra=$_REQUEST['precioCompra'];

            		// Insetando valores en la BD
		        $sql = "INSERT INTO productos VALUES ('$codigo','$nombre','$precioVenta','$precioCompra')";
            if(mysqli_query($conn, $sql)){
              echo "<h3>Datos almacenados correctamente."
                . " Revisar MySQL para cotejar el registro"
                . " y actualizar de ser necesario</h3>";
            } else{
              echo "ERROR!  $sql. "
                . mysqli_error($conn);
            }
            
            // Cerrando conexión
            //mysqli_close($conn);
            $consulta=mysqli_query($conn, "SELECT * FROM productos");

            // Paso 3: Obtener los resultados
            while ($fila = mysqli_fetch_assoc($consulta)) {
                $registros[] = $fila;
            }
        ?>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio Venta</th>
                <th scope="col">Precio Compra</th>
              </tr>
            </thead>
            <tbody>
                <?php
                foreach($registros as $datos){ 
                  echo "<tr>";
                  echo "<td>".$datos['codigo'] . "</td>";
                  echo "<td>".$datos['nombre'] . "</td>";
                  echo "<td>".$datos['precio_venta'] . "</td>";
                  echo "<td>".$datos['precio_compra'] . "</td>";
                  echo "</tr>";
                } 
              ?>
            </tbody>
        </table>
      </div>

  	<!-- jQuery -->
  <script src="sources/plugins/jquery/jquery.min.js"></script>
	<!-- Bootstrap 4 -->
	<script src="sources/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- jquery-validation -->
	<script src="sources/plugins/jquery-validation/jquery.validate.min.js"></script>
	<script src="sources/plugins/jquery-validation/additional-methods.min.js"></script>
	<!-- SweetAlert2 -->
	<script src="sources/plugins/sweetalert2/sweetalert2.min.js"></script>  
  <script src="sources/dist/js/adminlte.min.js"></script>
	<script src="js/app.js"></script>
</body>
</html>