
 //Establecimineto de modo estricto de JS
'use strict'

//Declaración de variables para las validaciones y colocación de elementos
const forms = document.querySelectorAll('.needs-validation');
var formulario = document.forms['formulario'];
var usuario_default = "Admin";
var pass_default = "Admin";
//Inicialización de alertas 
var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

// Validación del formulario Clientes
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      Toast.fire({
        icon: 'error',
        title: 'Acceso incorrecto'
      })

    }else{
        event.preventDefault();
        var user = $('#User').val();
        var contra = $('#Password').val();
        if((user == usuario_default)&&(contra == pass_default)){
            location.href = 'dashboard.html';
        }else{
          Toast.fire({
            icon: 'error',
            title: 'Datos incorrectos'
          })
        }

    }
    form.classList.add('was-validated')
  }, false)
})




