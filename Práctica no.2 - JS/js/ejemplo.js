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
        event.preventDefault()
        let contenido = `<p>Código: ${formulario['codigo'].value}</p>
        <p>Nombre: ${formulario['nombre'].value}</p>
        <p>Correo: ${formulario['categoria'].value}</p>`
        sectionCenter.innerHTML = contenido;
        document.getElementById("AbrirModal").click();

    }
    form.classList.add('was-validated')
  }, false)
})
