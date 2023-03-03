
// Array de los productos
const menu = [
  {
    id: 1,
    title: "Playera Código JavaScript",
    category: "Programación",
    price: 10.99,
    img: "img/Camiseta-Geek-con-programadores-de-c-digo-de-2022-para-hombres-y-mujeres.jpg_Q90.jpg_.webp",
    desc: "¡Muestra tu amor por JavaScript con nuestra camisa con código de JavaScript! Esta prenda de vestir única presenta fragmentos de código de JavaScript impresos en su diseño",
  },
  {
    id: 2,
    title: "Camisa Logo DBZ",
    category: "DBZ",
    price: 13.99,
    img: "img/Dragons-And-Ball-A4-bonitas-camisetas-Vintage-Fitness-talla-de-EE-UU.jpg_Q90.jpg_.webp",
    desc: "¡Haz que tus sueños de convertirte en un guerrero Z se hagan realidad con nuestra camisa de Dragon Ball Z!",
  },
  {
    id: 3,
    title: "Llavero Spiderman",
    category: "Marvel",
    price: 6.99,
    img: "img/LLavero-de-Los-Vengadores-de-Marvel-para-hombre-llavero-de-Spiderman-Ara-a-Araneid-Animal-regalos.jpg_Q90.jpg_.webp",
    desc: "¡Lleva a Spiderman contigo a donde quiera que vayas con nuestro llavero de Spiderman! ",
  },
  {
    id: 4,
    title: "Hoddie Vegetto SSB",
    category: "DBZ",
    price: 20.99,
    img: "img/Sudadera-con-capucha-con-estampado-3D-para-hombre-y-mujer-jersey-de-manga-larga-holgado-a.jpg_Q90.jpg_.webp",
    desc: "¡Haz que tus sueños de convertirte en un guerrero Z se hagan realidad con nuestro hoddie de Dragon Ball Z! ",
  },
  {
    id: 5,
    title: "Blusa Baby Groot",
    category: "Marvel",
    price: 22.99,
    img: "img/Camiseta-con-estampado-de-dibujos-animados-de-Marvel-para-mujer-Blusa-blanca-holgada-de-manga-corta.jpg_Q90.jpg_.webp",
    desc: "¡Lleva la ternura de Baby Groot contigo a donde quiera que vayas con nuestra blusa de Baby Groot! ",
  },
  {
    id: 6,
    title: "Sudadera Batman: Dark Knight",
    category: "DC",
    price: 18.99,
    img: "img/Sudadera-con-estampado-de-murci-lago-para-hombre-ropa-c-lida-de-lana-sudaderas-gruesas-con.jpg_Q90.jpg_.webp",
    desc: "¡Haz que tus noches sean más heroicas con nuestro hoddie de Batman!",
  },
  {
    id: 7,
    title: "Blusa Estampado Dragón",
    category: "DBZ",
    price: 8.99,
    img: "img/Camiseta-de-Hip-Hop-para-mujer-ropa-urbana-Tops-para-mujer-Ulzzang-Harajuku-Kawaii-Camiseta-con.jpg_Q90.jpg_.webp",
    desc: "¡Muestra tu amor por Dragon Ball Z con nuestra blusa de DBZ!",
  },
  {
    id: 8,
    title: "Figura Goku nube voladora",
    category: "DBZ",
    price: 12.99,
    img: "img/Figuras-de-acci-n-de-Dragon-Ball-Z-para-ni-os-juguetes-de-dibujos-animados-modelo.jpg_Q90.jpg_.webp",
    desc: "¡Haz que tu colección de Dragon Ball Z vuele alto con nuestra figura de Goku en la Nube Voladora! ",
  },
  {
    id: 10,
    title: "Pulsera reactor ARC",
    category: "Marvel",
    price: 9.99,
    img: "img/Pulsera-multicapa-de-cuero-con-gemas-para-hombre-y-mujer-brazalete-de-cuero-tejido-a-mano.jpg_640x640.jpg",
    desc: "¡Siente el poder del reactor ARC en tu muñeca con nuestra pulsera del Reactor ARC! ",
  },
  {
    id: 11,
    title: "Hoddie Dragon Ball Z",
    category: "DBZ",
    price: 30.99,
    img: "img/Men-s-Fashion-Hoodies-Printed-D-Dragons-Balls-Goku-Logo-Hoodie-Sweatshirts-Casual-Hoodies-Pullover-Loose.jpg_220x220xz.jpg_.webp",
    desc: "¡Haz que tu pasión por Dragon Ball Z se mantenga caliente con nuestro hoddie de DBZ! ",
  },
  {
    id: 12,
    title: "Figura Lego Batman",
    category: "DC",
    price: 22.99,
    img: "img/batman-1671331.jpg",
    desc: "¡El Caballero de la Noche ahora en versión LEGO con nuestra figura LEGO Batman! ",
  },
  {
    id: 13,
    title: "Camisa GitHub",
    category: "Programación",
    price: 20.99,
    img: "img/Github-Social-codificaci-n-T-camisetas-de-los-hombres-de-verano-de-algod-n-de-manga.jpg_Q90.jpg_.webp",
    desc: "¡Muestra tu amor por la programación con nuestra camisa de GitHub! ",
  },
];
  
  // Obtener elemento principal
  const tBodyContainer = document.querySelector("#tabla_cuerpo");
  const btnContainer = document.querySelector("#btn-tabla");
  
  
  // mostrar todos los productos al cargar la página
  //NOTA: "DOMContentLoaded" permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados
  function productos(){
    diplayMenuItems(menu);
  }

  //Items de productos
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      //Se colocan los productos en la tabla
       return `<tr">
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.category}</td>
                <td>${item.price}</td>
                <td>${item.desc}</td>
            </tr>`;
    });
    displayMenu = displayMenu.join("");
  
    tBodyContainer.innerHTML = displayMenu;
  }
  
  