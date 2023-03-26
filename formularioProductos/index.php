<!DOCTYPE html>
<html lang="en">
<head>  
  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="sources/plugins/fontawesome-free/css/all.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="sources/dist/css/adminlte.min.css">
      <!-- Select2 -->
    <link rel="stylesheet" href="sources/plugins/select2/css/select2.min.css">
    <link rel="stylesheet" href="sources/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
      <!-- SweetAlert2 -->
    <link rel="stylesheet" href="sources/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <div class="container-fluid as-full">
        <div class="row as-full d-flex justify-content-center">
          <div class="col-5 align-self-center" >
            <div class="card card-primary" style="margin-top: 30px;">
                <div class="card-header">
                  <h3 class="card-title">Ingresar producto</h3>
                </div>
                <!-- /.card-header -->
            <!-- form start -->
              <form id="formulario" action="suscripcion.php" method="post" class="needs-validation" novalidate>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputuser">Ingresar código (*)</label>
                    <input required type="text" class="form-control" id="codigo" name="codigo" placeholder="Ingresa el código del producto"  >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Ingresar nombre (*)</label>
                    <input required type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa el nombre del producto">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Ingresar precio de venta (*)</label>
                    <input required type="number" class="form-control" id="precioVenta" name="precioVenta" placeholder="Ingresa precio de venta del producto"  >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Ingresar precio de compra (*)</label>
                    <input required type="number" class="form-control" id="precioCompra" name="precioCompra" placeholder="Ingresa precio de compra del producto"  >
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </form>
              </div>
          </div>
        </div>
        <!-- Boton para mandar llamar al modal -->
        <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default" id="AbrirModal" style="display: none;">
            Launch Default Modal
        </button>
        <div class="modal fade" id="modal-default">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Datos ingresados</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p id="parrafoCodigo"></p>
                  
                  <p id="parrafoNombre"></p>
                  
                  <p id="parrafoCategoria"></p>
                  
                  <p id="parrafoPrecioVenta"></p>
                  
                  <p id="parrafoPrecioCompra"></p>
                  

                </div>
                <div class="modal-footer justify-content-between">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
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
    <script src="js/app.js"></script>
</body>
</html>