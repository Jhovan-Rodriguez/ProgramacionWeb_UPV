// Example starter JavaScript for disabling form submissions if there are invalid fields

    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    var formulario=document.forms['formulario'];

    //Variables de acceso
    var userVendedor="vendedor";
    var passVendedor = "mipssw-vend";

    var userCliente="jperez";
    var passCliente="mipssw";


    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          //Validaciones
            event.preventDefault()
            console.log(formulario['user'].value)
            //Condiciones para saber a que usuario se a ingresar
            if(formulario['user'].value == userVendedor && formulario['password'].value==passVendedor){
                location.href = 'vendedor.html';
            }else if(formulario['user'].value == userCliente && formulario['password'].value==passCliente){
                location.href = 'cliente.html';
            }else{
                swal({
                    title: "Acceso denegado!",
                    text: "Ingresa usuario correcto!",
                    icon: "error",
                  });
            }
        }

        form.classList.add('was-validated')
      }, false)
    })