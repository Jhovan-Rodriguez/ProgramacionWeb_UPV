$(document).ready(function(){
    var usuario_default = "Admin";
    var pass_default = "Admin";
    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
    $('#guardar').click(function(event){
        event.preventDefault();
        var user = $('#inputUser').val();
        var contra = $('#inputPassword').val();
        if((user == usuario_default)&&(contra == pass_default)){
            location.href = 'dashboard.html';
        }
        if((user != usuario_default)&&(contra != pass_default)){
            Toast.fire({
                icon: 'error',
                title: 'Los datos con incorrectos'
              })
        }
        if((user != usuario_default)){
                Toast.fire({
                  icon: 'error',
                  title: 'El usuario es incorrecto'
                })
        }
        if((contra != pass_default)){
            Toast.fire({
              icon: 'error',
              title: 'La contraseña es incorrecta'
            })
        }
        if((contra == '') || (user=='')){
            Toast.fire({
                icon: 'error',
                title: 'Los datos estan incompletos'
              })
        }
        
    });


 });



