<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dashboard</title>

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    <link rel="stylesheet" href="sources/plugins/fontawesome-free/css/all.min.css">

    <!-- Theme style -->
    <link rel="stylesheet" href="sources/dist/css/adminlte.min.css?v=3.2.0">
    <!-- SweetAlert2 -->
    <link rel="stylesheet" href="sources/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
    <script
        nonce="70775702-c10f-4de9-b251-c9df4a2708c7">(function (w, d) { !function (bv, bw, bx, by) { bv[bx] = bv[bx] || {}; bv[bx].executed = []; bv.zaraz = { deferred: [], listeners: [] }; bv.zaraz.q = []; bv.zaraz._f = function (bz) { return function () { var bA = Array.prototype.slice.call(arguments); bv.zaraz.q.push({ m: bz, a: bA }) } }; for (const bB of ["track", "set", "debug"]) bv.zaraz[bB] = bv.zaraz._f(bB); bv.zaraz.init = () => { var bC = bw.getElementsByTagName(by)[0], bD = bw.createElement(by), bE = bw.getElementsByTagName("title")[0]; bE && (bv[bx].t = bw.getElementsByTagName("title")[0].text); bv[bx].x = Math.random(); bv[bx].w = bv.screen.width; bv[bx].h = bv.screen.height; bv[bx].j = bv.innerHeight; bv[bx].e = bv.innerWidth; bv[bx].l = bv.location.href; bv[bx].r = bw.referrer; bv[bx].k = bv.screen.colorDepth; bv[bx].n = bw.characterSet; bv[bx].o = (new Date).getTimezoneOffset(); if (bv.dataLayer) for (const bI of Object.entries(Object.entries(dataLayer).reduce(((bJ, bK) => ({ ...bJ[1], ...bK[1] }))))) zaraz.set(bI[0], bI[1], { scope: "page" }); bv[bx].q = []; for (; bv.zaraz.q.length;) { const bL = bv.zaraz.q.shift(); bv[bx].q.push(bL) } bD.defer = !0; for (const bM of [localStorage, sessionStorage]) Object.keys(bM || {}).filter((bO => bO.startsWith("_zaraz_"))).forEach((bN => { try { bv[bx]["z_" + bN.slice(7)] = JSON.parse(bM.getItem(bN)) } catch { bv[bx]["z_" + bN.slice(7)] = bM.getItem(bN) } })); bD.referrerPolicy = "origin"; bD.src = "/cdn-cgi/zaraz/s.js?z=" + btoa(encodeURIComponent(JSON.stringify(bv[bx]))); bC.parentNode.insertBefore(bD, bC) };["complete", "interactive"].includes(bw.readyState) ? zaraz.init() : bv.addEventListener("DOMContentLoaded", zaraz.init) }(w, d, "zarazData", "script"); })(window, document);</script>
</head>
<body class="hold-transition sidebar-mini">
    <div class="wrapper">
        <?php
        // Sentencia SQL para obtener las categorias de los productos
        include("layouts/aside.php");
        include("php/conexion.php");
        global $pdo;
        $sql = "SELECT * FROM categorias";
		
		$statement = $pdo->prepare($sql);

		$statement->execute();
		$results=$statement->fetchAll();
        ?>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Añadir productos</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="http://watchzone.me/formularioProductos/">Dashboard</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                <div class="row as-full d-flex justify-content-center">
          <div class="col-10 align-self-center" >
            <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Ingresar producto</h3>
                </div>
                <!-- /.card-header -->
            <!-- form start -->
              <form id="formulario" action="php/reg_producto.php" method="post" class="needs-validation" novalidate>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputuser">Ingresar código (*)</label>
                                <input required type="text" class="form-control" id="codigo" name="codigo" placeholder="Ingresa el código del producto"  >
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresar nombre (*)</label>
                                <input required type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa el nombre del producto">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Descripción</label>
                        <input required type="text" class="form-control" id="descripcion" name="descripcion" placeholder="Ingresa descripcion del producto">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Ingresar categoria (*)</label>
                        <select id="inputState" class="form-control select2 " name="id_categoria" required>
                        <?php if($results == NULL){ ?>    
                            <option value=" ">Sin categorias</option>
                        <?php }else{ ?>
                            <option value="">Seleccione una categoria</option>
                        <?php foreach( $results as $id => $data ){ ?>
                            <option  value="<?php echo $data['id'] ?>"><?php echo $data['nombre'] ?></option>
                        <?php }
                        }
                        ?>    
                        </select>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresar precio de venta (*)</label>
                                <input required type="number" class="form-control" id="precioVenta" name="precioVenta" placeholder="Ingresa precio de venta del producto"  >
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Ingresar precio de compra (*)</label>
                                <input required type="number" class="form-control" id="precioCompra" name="precioCompra" placeholder="Ingresa precio de compra del producto"  >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </form>
              </div>
          </div>
        </div>
                  <div>
                  </div>
                </div>
            </div>
        </div>
        <aside class="control-sidebar control-sidebar-dark">

            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>


        <footer class="main-footer">

            <div class="float-right d-none d-sm-inline">
                Anything you want
            </div>

            <strong>Copyright &copy;2023 <a href="https://WatchZone.me">WatchZone</a>.</strong> All rights
            reserved.
        </footer>
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