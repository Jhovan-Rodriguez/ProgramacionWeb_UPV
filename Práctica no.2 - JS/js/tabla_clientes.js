
// Array de los clientes
const clientes = [

  {
    id: 1,
    nombre: "Ana",
    apellido_p: "González",
    apellido_m: "López",
    email:"ana.gonzalez@gmail.com",
    tel:"5551234567",
    rfc:"AGL876JH5",
    categoria:"Frecuente"
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido_p: "García",
    apellido_m: "Hernández",
    email:"pedrogh@gmail.com",
    tel:"9998765432",
    rfc:"PGH432JKL",
    categoria:"Nuevo"
  },
  {
    id: 4,
    nombre: "María",
    apellido_p: "López",
    apellido_m: "Sánchez",
    email:"marialopez@gmail.com",
    tel:"3339876543",
    rfc:"MLS555POI",
    categoria:"Frecuente"
  },
  {
    id: 5,
    nombre: "Juan",
    apellido_p: "Martínez",
    apellido_m: "Pérez",
    email:"juanmartinez@gmail.com",
    tel:"7772345678",
    rfc:"JMP345MNO",
    categoria:"Nuevo"
  },
  {
    id: 6,
    nombre: "Lucía",
    apellido_p: "Rodríguez",
    apellido_m: "Gutiérrez",
    email:"luciarodriguez@gmail.com",
    tel:"2223456789",
    rfc:"LRG987TYU",
    categoria:"Frecuente"
  },
  {
    id: 7,
    nombre: "Carlos",
    apellido_p: "Sánchez",
    apellido_m: "Jiménez",
    email:"carlossanchez@gmail.com",
    tel:"5555555555",
    rfc:"CSJ987POI",
    categoria:"Nuevo"
  }
];

    
    // Obtener elemento principal
    const tBodyContainer = document.querySelector("#cuerpo");
    
    
    // mostrar todos los productos al cargar la página
    //NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados

    window.addEventListener("DOMContentLoaded", function () {
      diplayclienteItems(clientes);
    });
  
    //Items de clientes
    function diplayclienteItems(clienteItems) {
      let displayClientes = clienteItems.map(function (item) {
        //Se colocan los clientes en la tabla
         return `<tr">
                  <td>${item.id}</td>
                  <td>${item.nombre}</td>
                  <td>${item.apellido_p}</td>
                  <td>${item.apellido_m}</td>
                  <td>${item.email}</td>
                  <td>${item.tel}</td>
                  <td>${item.rfc}</td>
                  <td>${item.categoria}</td>
              </tr>`;
      });
      displayClientes = displayClientes.join("");
  
      tBodyContainer.innerHTML = displayClientes;
    }
    
    