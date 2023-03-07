//Funcion para redireccionar a pagina producto
function abrir(){
  location.href = 'producto.html';
}
//Función para cerrar sesión
function sesion(){
  location.href = 'index.html';

}
// Array de clientes
const clientes = [
    {
      id: 1,
      usuario:"JhovanRdz",
      nombre:"Jorge Jhovan",
      nombre_p: "Camisa DBZ",
      descripcion: "Camisa negra con logo",
      precio: "$10.99",
      fecha:"10/01/23"
    },
    {
      id: 2,
      usuario:"Maria_Silva",
      nombre:"Maria Silva",
      nombre_p: "Zapatos deportivos",
      descripcion: "Zapatos deportivos para hombre",
      precio: "$59.99",
      fecha:"12/01/23"
      },
      {
      id: 3,
      usuario:"Ana_Rodriguez",
      nombre:"Ana Rodriguez",
      nombre_p: "Bolso de cuero",
      descripcion: "Bolso de cuero para mujer",
      precio: "$89.99",
      fecha:"15/01/23"
      },
      {
      id: 4,
      usuario:"Luis_Rivera",
      nombre:"Luis Rivera",
      nombre_p: "Pantalones de mezclilla",
      descripcion: "Pantalones de mezclilla para hombre",
      precio: "$34.99",
      fecha:"20/01/23"
      },
      {
      id: 5,
      usuario:"Carla_Gonzalez",
      nombre:"Carla Gonzalez",
      nombre_p: "Gorra de béisbol",
      descripcion: "Gorra de béisbol para mujer",
      precio: "$15.99",
      fecha:"25/01/23"
      },
      {
      id: 6,
      usuario:"Daniel_Rodriguez",
      nombre:"Daniel Rodriguez",
      nombre_p: "Chamarra de piel",
      descripcion: "Chamarra de piel para hombre",
      precio: "$129.99",
      fecha:"02/02/23"
      },
      {
      id: 7,
      usuario:"Marta_Fernandez",
      nombre:"Marta Fernandez",
      nombre_p: "Vestido de noche",
      descripcion: "Vestido de noche para mujer",
      precio: "$189.99",
      fecha:"05/02/23"
      },
      {
      id: 8,
      usuario:"Pedro_Lopez",
      nombre:"Pedro Lopez",
      nombre_p: "Suéter tejido",
      descripcion: "Suéter tejido para hombre",
      precio: "$54.99",
      fecha:"10/02/23"
      },
      {
      id: 9,
      usuario:"Lucia_Garcia",
      nombre:"Lucia Garcia",
      nombre_p: "Blusa de seda",
      descripcion: "Blusa de seda para mujer",
      precio: "$45.99",
      fecha:"15/02/23"
      },
      {
      id: 10,
      usuario:"Fernando_Santos",
      nombre:"Fernando Santos",
      nombre_p: "Reloj de pulsera",
      descripcion: "Reloj de pulsera para hombre",
      precio: "$199.99",
      fecha:"20/02/23"
      },
  ];
  
      
      // Obtener el cuerpo de la tabla
      const contenedor = document.querySelector("#cuerpo");
      
      
      // mostrar todos los productos al cargar la página
      //NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
  
      window.addEventListener("DOMContentLoaded", function () {
        displayClientesItems(clientes);
      });
    
      //Elementos a colocar en la tabla
      function displayClientesItems(clientesItems) {
        let displayClientes = clientesItems.map(function (item) {
          //Se colocan los productos en la tabla
           return `<tr">
                    <td>${item.id}</td>
                    <td>${item.usuario}</td>
                    <td>${item.nombre}</td>
                    <td>${item.nombre_p}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.precio}</td>
                    <td>${item.fecha}</td>
                </tr>`;
        });
        displayClientes = displayClientes.join("");
    
        contenedor.innerHTML = displayClientes;
      }
      
      