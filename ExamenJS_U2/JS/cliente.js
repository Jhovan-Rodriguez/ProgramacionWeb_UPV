//Funcion para redireccionar 
function abrir(){
    location.href = 'formPedido.html';
}

//Función para cerrar sesión
function sesion(){
  location.href = 'index.html';

}
// Array de productos
const productos = [

    {
      id: 1,
      imagen:"img/Dragons-And-Ball-A4-bonitas-camisetas-Vintage-Fitness-talla-de-EE-UU.jpg_Q90.jpg_.webp",
      nombre: "Camisa DBZ",
      category: "DBZ",
      descripcion: "Camisa negra con logo",
      precio: "$10.99",
      fecha:"10/01/23"
    },
    {
        id: 2,
        imagen:"img/Camiseta-de-Hip-Hop-para-mujer-ropa-urbana-Tops-para-mujer-Ulzzang-Harajuku-Kawaii-Camiseta-con.jpg_Q90.jpg_.webp",
        nombre: "Blusa DBZ",
        category: "DBZ",
        descripcion: "Blusa con dragon rojo",
        precio: "$10.99",
        fecha:"10/01/23"
      },
      {
        id: 3,
        imagen:"img/LLavero-de-Los-Vengadores-de-Marvel-para-hombre-llavero-de-Spiderman-Ara-a-Araneid-Animal-regalos.jpg_Q90.jpg_.webp",
        nombre: "Llavero Spiderman",
        category: "Marvel",
        descripcion: "Llavero plateado",
        precio: "$17.99",
        fecha:"10/01/23"
      },
      {
        id: 4,
        imagen:"img/Men-s-Fashion-Hoodies-Printed-D-Dragons-Balls-Goku-Logo-Hoodie-Sweatshirts-Casual-Hoodies-Pullover-Loose.jpg_220x220xz.jpg_.webp",
        nombre: "Hoddie DBZ",
        category: "DBZ",
        descripcion: "Hoddie blanco dbz",
        precio: "$15.99",
        fecha:"10/01/23"
      },
      {
        id: 5,
        imagen:"img/Sudadera-con-capucha-con-estampado-3D-para-hombre-y-mujer-jersey-de-manga-larga-holgado-a.jpg_Q90.jpg_.webp",
        nombre: "Hoddie Vegetto DBZ",
        category: "DBZ",
        descripcion: "Hoddie negro",
        precio: "$14.99",
        fecha:"10/01/23"
      },
      {
        id: 6,
        imagen:"img/Dragons-And-Ball-A4-bonitas-camisetas-Vintage-Fitness-talla-de-EE-UU.jpg_Q90.jpg_.webp",
        nombre: "Camisa DBZ",
        category: "DBZ",
        descripcion: "Camisa negra con logo",
        precio: "$8.99",
        fecha:"10/01/23"
      },
      {
        id: 7,
        imagen:"img/Sudadera-con-estampado-de-murci-lago-para-hombre-ropa-c-lida-de-lana-sudaderas-gruesas-con.jpg_Q90.jpg_.webp",
        nombre: "Hoddie batman",
        category: "DC",
        descripcion: "Azul Sudadera",
        precio: "$18.99",
        fecha:"10/01/23"
      },
      {
        id: 1,
        imagen:"img/Figuras-de-acci-n-de-Dragon-Ball-Z-para-ni-os-juguetes-de-dibujos-animados-modelo.jpg_Q90.jpg_.webp",
        nombre: "Figura Goku chiquito",
        category: "DBZ",
        descripcion: "Camisa negra con logo",
        precio: "$16.99",
        fecha:"10/01/23"
      },
      {
        id: 1,
        imagen:'img/Camiseta-Geek-con-programadores-de-c-digo-de-2022-para-hombres-y-mujeres.jpg_Q90.jpg_.webp',
        nombre: "Camisa JavaScript",
        category: "Programación",
        descripcion: "Camisa negra con código de JavaScript",
        precio: "$5.99",
        fecha:"10/01/23"
      },
      {
        id: 1,
        imagen:"img/Figura-de-acci-n-de-Dragon-Ball-Z-nuevo-llavero-de-Vegeta-colecci-n-de-Juguetes.jpg_Q90.jpg_.webp",
        nombre: "Llavero DBZ",
        category: "DBZ",
        descripcion: "Llavero de Vegeta",
        precio: "$20.99",
        fecha:"10/01/23"
      },
      {
        id: 1,
        imagen:"img/Github-Social-codificaci-n-T-camisetas-de-los-hombres-de-verano-de-algod-n-de-manga.jpg_Q90.jpg_.webp",
        nombre: "Camisa GitHub",
        category: "Programación",
        descripcion: "Camisa negra con código JS",
        precio: "$13.99",
        fecha:"10/01/23"
      },

  ];
  
      
      // Obtener el cuerpo de la tabla
      const contenedor = document.querySelector("#cuerpo");
      const btnContainer = document.querySelector(".btn-container");

      
      // mostrar todos los productos al cargar la página
      //NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
  
      window.addEventListener("DOMContentLoaded", function () {
        diplayproductosItems(productos);
        displayMenuButtons();

      });
    
      //Elementos a colocar en la tabla
      function diplayproductosItems(productosItems) {
        let displayProductos = productosItems.map(function (item) {
          //Se colocan los productos en la tabla
           return `<tr">
                    <td><img src=" ${item.imagen}" class="img-thumbnail" style="    display: flex;
                    width: 300px;"></td>
                    <td>${item.nombre}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.precio}</td>
                    <td>${item.fecha}</td>
                </tr>`;
        });
        displayProductos = displayProductos.join("");
    
        contenedor.innerHTML = displayProductos;
      }
      //Opciones de botones
function displayMenuButtons() {
  const categories = productos.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Todos"]
  );
  //constructor del boton con el nombre de la categoría de los items del array
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="btn btn-primary filter-btn" style="margin:10px;" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");
// Se colocan los botones en el HTML del div btnContainer
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = productos.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Todos") {
        //Condicional para colocar todos los productos
        diplayproductosItems(productos);
      } else {
        diplayproductosItems(menuCategory);
      }
    });
  });
}
      