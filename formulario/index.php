<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
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
        <h3>Formulario de usuario!</h3>
        <hr>
        <form id="formulario" action="suscripcion.php" method="post" class="col-sm-10 needs-validation" novalidate>
          <div class="form-group row">
            <label class="col-form-label col-sm-4 col-md-3 col-lg-2" for="user-name">Nombre</label>
            <div class="input-group col-sm-8 col-md-9 col-lg-10">
              <input required type="text" name="nombre" class="form-control" id="user-name" placeholder="Nombre de usuario">
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-sm-4 col-md-3 col-lg-2" for="user-surname">Correo</label>
            <div class="input-group col-sm-8 col-md-9 col-lg-10">
              <input required type="email" name="correo" class="form-control" id="correo" placeholder="Correo electrónico">
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-sm-4 col-md-3 col-lg-2" for="number">Teléfono</label>
            <div class="input-group col-sm-8 col-md-9 col-lg-10">
              <input required type="tel" name="tel" class="form-control" id="telefono" placeholder="+52 834 106 1102">
            </div>
          </div>
          
          <div class="form-group row">
            <label class="control-label col-sm-4 col-md-3 col-lg-2" for="message">Edad</label>
            <div class="input-group col-sm-8 col-md-9 col-lg-10">
			        <input required type="number" name="edad" class="form-control" id="edad" placeholder="Ingrese edad">
            </div>
          </div>
		      <div class="form-group row">
            <label class="control-label col-sm-4 col-md-3 col-lg-2" for="message">Matrícula</label>
            <div class="input-group col-sm-8 col-md-9 col-lg-10">
				      <input required type="number" name="matricula" class="form-control" id="matricula" placeholder="Ingrese su matricula escolar">
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-sm-4 col-md-3 col-lg-2" for="message">Género</label>
            <div class="input-group col-sm-8 col-md-9 col-lg-10">
                <select id="sexo" name="sexo" class="form-control" required>
												<option value="">Selecciona una opción</option>
												<option value="Masculino">Masculino</option>
												<option value="Femenino">Femenino</option>
												<option value="Otro">Otro</option>
							  </select>            
              </div>
          </div>
		      <div class="form-group row">
            <label class="control-label col-sm-4 col-md-3 col-lg-2" for="message">Dirección</label>
            <div class="input-group col-sm-8 col-md-9 col-lg-10">
			        <textarea requiered class="form-control" name="direccion" rows="3" placeholder="Ingrese su dirección" id="dirección"></textarea> 
            </div>
          </div>
          <button type="submit" class="btn btn-success btn-block col-sm-4 col-md-3 col-xl-2">
            Enviar
          </button>
        </form>

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