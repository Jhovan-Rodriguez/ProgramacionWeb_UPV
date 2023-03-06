
// Array de los proveedores
const proveedores = [
    {
      id: 2,
      nombre: "Juan",
      apellido_p: "Pérez",
      apellido_m: "García",
      email:"juanperez@gmail.com",
      tel:"8345678901",
      rfc:"XAPM820123JGH",
      categoria:"Regular"
    },
    {
      id: 3,
      nombre: "María",
      apellido_p: "González",
      apellido_m: "Rodríguez",
      email:"mariagonzalez@gmail.com",
      tel:"8123456789",
      rfc:"KXAL921023TGF",
      categoria:"Nuevo"
    },
    {
      id: 4,
      nombre: "Pedro",
      apellido_p: "Martínez",
      apellido_m: "Sánchez",
      email:"pedromartinez@gmail.com",
      tel:"8234567890",
      rfc:"NPSJ930421LDF",
      categoria:"Regular"
    },
    {
      id: 5,
      nombre: "Ana",
      apellido_p: "López",
      apellido_m: "Hernández",
      email:"anilopez@gmail.com",
      tel:"8345678901",
      rfc:"KIML850930GBH",
      categoria:"VIP"
    },
    {
      id: 6,
      nombre: "Carlos",
      apellido_p: "García",
      apellido_m: "Pérez",
      email:"carlosgarcia@gmail.com",
      tel:"8123456789",
      rfc:"JZLP901203JDF",
      categoria:"Nuevo"
    }
  ];
  
  
      
      // Obtener elemento principal
      const tBodyContainer = document.querySelector("#cuerpo");
      
      
      // mostrar todos los productos al cargar la página
      //NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
  
      window.addEventListener("DOMContentLoaded", function () {
        displayProveedoresItems(proveedores);
      });
    
      //Items de clientes
      function displayProveedoresItems(ProveedoresItems) {
        let displayProveedores = ProveedoresItems.map(function (item) {
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
        displayProveedores = displayProveedores.join("");
    
        tBodyContainer.innerHTML = displayProveedores;
      }
      
      