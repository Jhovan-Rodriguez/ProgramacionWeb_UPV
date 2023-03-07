// Example starter JavaScript for disabling form submissions if there are invalid fields

'use strict'
  
// Variables a usar 
const forms = document.querySelectorAll('.needs-validation')
var formulario=document.forms['formulario'];
const cont_modal = document.getElementById('contenido');

// Evento para validar el formulario
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      swal({
        title: "Datos incompletos!",
        text: "Favor de llenar el formulario correctamente!",
        icon: "error",
      });
    }else{
        event.preventDefault()
        let contenido = `
        <p><strong>ID:</strong> ${formulario['id'].value}</p>
        <p><strong>Nombre del producto:</strong>${formulario['nombre'].value}</p>
        <p><strong>Descripción del producto:</strong></p>
        <p> ${formulario['desc'].value}</p>
        <p><strong>Precio:</strong> ${formulario['precio'].value}</p>
        <p><strong>Fecha de captura:</strong> ${formulario['fecha'].value}</p>
        <strong>Notas:</strong>
        <p> ${formulario['notas'].value}</p>`
        cont_modal.innerHTML=contenido;
        var abrir= document.getElementById('modal').click();
    }

    form.classList.add('was-validated')
  }, false)
})


function cerrar(){
  document.getElementById('formulario').reset();
  document.getElementById('formulario').classList.remove("was-validated");
  swal({
    title: "Registro completado!",
    text: "El producto fue registrado correctamente!",
    icon: "success",
  });
}