//Establecimineto de modo estricto de JS
'use strict'

//Declaración de variables para las validaciones y colocación de elementos
const forms = document.querySelectorAll('.needs-validation');
var formulario = document.forms['formulario'];
const sectionCenter = document.getElementById("contenido");

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
    let valoresCheck = [];

    $("input[type=checkbox]:checked").each(function(){
        valoresCheck.push(this.value);
    });

    if (!form.checkValidity() || valoresCheck=="") {
      event.preventDefault()
      event.stopPropagation()
      Toast.fire({
        icon: 'error',
        title: 'Datos incompletos'
      })

    }else{
            //Se colocan los valores en el modal
        event.preventDefault()
        let contenido = `<p>Usuario: ${formulario['usuario'].value}</p>
        <p>Nombre: ${formulario['nombre'].value}</p>
        <p>Correo: ${formulario['correo'].value}</p>
        <p>Contraseña: ${formulario['password1'].value}</p>
        <p>Contraseña 2: ${formulario['password2'].value}</p>
        <p>Hobbies: ${valoresCheck}</p>`
        sectionCenter.innerHTML = contenido;
        document.getElementById("AbrirModal").click();

    }
    form.classList.add('was-validated')
  }, false)
})
