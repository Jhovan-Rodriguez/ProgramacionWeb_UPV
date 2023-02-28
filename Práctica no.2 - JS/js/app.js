//JORGE JHOVAN RODRIGUEZ MORENO

// Creación de variables para contener los elementos HTML
const formulario = document.getElementById("formulario");

const user = document.getElementById("usuario");
const userName = document.getElementById("nombre");
const userEmail = document.getElementById("correo");
const userPass = document.getElementById("password1");
const userPass2 = document.getElementById("password2");

const txtUser   = document.getElementById("parrafoUsuario");
const txtNombre = document.getElementById("parrafoNombre");
const txtCorreo = document.getElementById("parrafoCorreo");
const txtContra1= document.getElementById("parrafoContra1");
const txtContra2= document.getElementById("parrafoContra2");
const txtHobbie = document.getElementById("parrafoHobbies");

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

    let valoresCheck = [];

    $("input[type=checkbox]:checked").each(function(){
        valoresCheck.push(this.value);
    });

    // validar Usuario
    if (user.value == "") {
         user.classList.add("is-invalid");
         Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar un usuario'
          })
          return false;

    } else {
         user.classList.remove("is-invalid");
         user.classList.add("is-valid");
    }

    // validar Email
    if (userEmail.value == "") {
        userEmail.classList.add("is-invalid");
        Toast.fire({
           icon: 'error',
           title: 'Favor de ingresar correo'
         })
         return false;
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
    }
    // validar nombre
    if (userName.value == "") {
        userName.classList.add("is-invalid");
        Toast.fire({
           icon: 'error',
           title: 'Favor de ingresar un nombre'
         })
         return false;
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
    }

    // validar Password
    if (userPass.value == "") {
        userPass.classList.add("is-invalid");
        Toast.fire({
            icon: 'error',
            title: 'Favor de ingresar una contraseña'
          })
          return false;

    } else {
        userPass.classList.remove("is-invalid");
        userPass.classList.add("is-valid");
    }
    // validar Password 2
    if ((userPass2.value == "" )|| (userPass2.value != userPass.value)) {
        userPass2.classList.add("is-invalid");
        Toast.fire({
            icon: 'error',
            title: 'Las contraseñas no son iguales'
          })
          return false;
    } else {
        userPass2.classList.remove("is-invalid");
        userPass2.classList.add("is-valid");
    }


    if(valoresCheck == ""){
        Toast.fire({
            icon: 'error',
            title: 'Favor de seleccionar un hobbie'
          })
        return false;
    }

    if(user.value == "" && userName.value == "" && userEmail == "" && userPass =="" && userPass2 == "" && valoresCheck == "" ){
        Toast.fire({
            icon: 'error',
            title: 'Favor de llenar el formulario'
          })

    }else{

          txtUser.innerHTML="Usuario :" + user.value;
          txtNombre.innerHTML="Nombre: "+ userName.value;
          txtCorreo.innerHTML="Correo: "+ userEmail.value;
          txtContra1.innerHTML="Contraseña 1: "+userPass.value;
          txtContra2.innerHTML="Contraseña 2: "+userPass2.value;
          txtHobbie.innerHTML="Hobbies: " + valoresCheck;
          document.getElementById("AbrirModal").click();
          

    }

 
});