//JORGE JHOVAN RODRIGUEZ MORENO

// Creación de variables para contener los elementos HTML
const formulario = document.getElementById("formulario");

const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const categoria = document.getElementById("categoria");
const precioVenta = document.getElementById("precioVenta");
const precioCompra = document.getElementById("precioCompra");

const txtCodigo = document.getElementById("parrafoCodigo");
const txtNombre = document.getElementById("parrafoNombre");
const txtCategoria = document.getElementById("parrafoCategoria");
const txtPrecioVenta= document.getElementById("parrafoPrecioVenta");
const txtPrecioCompra= document.getElementById("parrafoPrecioCompra");

//Inicialización de alertas 
var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

//Método submit del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // validar Codigo
    if (codigo.value=="") {
         codigo.classList.add("is-invalid");
         Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar un código'
          })
          return false;
    } else {
         codigo.classList.remove("is-invalid");
         codigo.classList.add("is-valid");
    }
    // validar nombre
    if (nombre.value=="") {
         nombre.classList.add("is-invalid");
         Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar un nombre'
          })
          return false;
    } else {
         nombre.classList.remove("is-invalid");
         nombre.classList.add("is-valid");
    }
    // validar Categoria
    if (categoria.value=="") {
         categoria.classList.add("is-invalid");
         Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar una categoria'
          })
          return false;
    } else {
         categoria.classList.remove("is-invalid");
         categoria.classList.add("is-valid");
    }
    // validar PrecioVenta
    if (precioVenta.value=="") {
        precioVenta.classList.add("is-invalid");
        Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar el precio de venta'
          })
          return false;
    } else {
        precioVenta.classList.remove("is-invalid");
        precioVenta.classList.add("is-valid");
    }
    // validar PrecioCompra
    if ((precioCompra.value=="")) {
        precioCompra.classList.add("is-invalid");
        Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar el precio de compra'
          });
          return false;
    } else {
        precioCompra.classList.remove("is-invalid");
        precioCompra.classList.add("is-valid");
    }
    if(codigo.value=="" && categoria.value=="" && nombre.value=="" && precioVenta.value=="" && precioCompra.value==""){
        Toast.fire({
            icon: 'error',
            title: 'Favor de llenar el formulario'
          })

    }else{
        txtCodigo.innerHTML="Código del producto :" + codigo.value.trim();
        txtNombre.innerHTML="Nombre del producto: "+ nombre.value.trim();
        txtCategoria.innerHTML="Categoria del producto: "+ categoria.value.trim();
        txtPrecioVenta.innerHTML="Precio de venta: "+precioVenta.value.trim();
        txtPrecioCompra.innerHTML="Precio de Compra: "+precioCompra.value.trim();
        document.getElementById("AbrirModal").click();

    }
 
});