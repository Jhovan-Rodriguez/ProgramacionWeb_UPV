//JORGE JHOVAN RODRIGUEZ MORENO

// Creación de variables para contener los elementos HTML
const formulario = document.getElementById("formulario");

const clave = document.getElementById("clave");
const nombre = document.getElementById("nombre");


const txtClave = document.getElementById("parrafoClave");
const txtNombre = document.getElementById("parrafoNombre");


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
    // validar Clave
    if (clave.value=="") {
         clave.classList.add("is-invalid");
         Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar una clave'
          })
          return false;
    } else {
         clave.classList.remove("is-invalid");
         clave.classList.add("is-valid");
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

    if(clave.value==""  && nombre.value==""){
        Toast.fire({
            icon: 'error',
            title: 'Favor de llenar el formulario'
          })

    }else{
        txtClave.innerHTML="Clave de la categoria del producto :" + clave.value;
        txtNombre.innerHTML="Nombre de la categoría: "+ nombre.value;
        document.getElementById("AbrirModal").click();

    }
 
});