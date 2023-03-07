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
      //Validaciones
      event.preventDefault()
      event.stopPropagation()
      swal({
        title: "Datos incompletos!",
        text: "Favor de llenar el formulario correctamente!",
        icon: "error",
      });
    }else{
        event.preventDefault()
        //Creación de la estrucutra HTML del contenido del modal
        let contenido = `<p><strong>Nombre del producto:</strong> ${formulario['nombre'].value}</p>
        <p><strong>Descripción del producto: </strong>${formulario['desc'].value}</p>
        <p><strong>Precio:</strong> ${formulario['precio'].value}</p>
        <p><strong>Fecha estimada de entrega: </strong> ${formulario['fecha'].value}</p>
        <p><strong>Imagen del producto:</strong></p>
        <img src="${formulario['imagen'].value}" class="img-thumbnail" alt="...">`
        cont_modal.innerHTML=contenido;
        var abrir= document.getElementById('modal').click();
    }

    form.classList.add('was-validated')
  }, false)
})

//Funcion para borrar datos del formulario
function cerrar(){
  document.getElementById('formulario').reset();
  document.getElementById('formulario').classList.remove("was-validated");
  swal({
    title: "Registro completado!",
    text: "El pedido fue registrado correctamente!",
    icon: "success",
  });
}