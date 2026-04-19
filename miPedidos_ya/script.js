let carrito = [];
let total = 0;

const lugares = [

  
  {
    nombre: "Pizza Hut",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Pizza_Hut_2025.svg",
    productos: [
      {nombre: "Pizza Personal", precio: 400},
      {nombre: "Pizza Familiar", precio: 15},
      {nombre: "Pan de ajo", precio: 4},
      {nombre: "Alitas", precio: 6},
      {nombre: "Refresco", precio: 2},
      {nombre: "Lasaña", precio: 10},
      {nombre: "Donas", precio: 9},
      {nombre: "Postre", precio: 5},
      {nombre: "Pasta", precio: 7},
      {nombre: "Combo Pizza", precio: 12}
    ]
  },

  {
    nombre: "McDonalds",
    imagen: "https://static.wixstatic.com/media/0759c8_7b1721dee706443ab2b940f4d30972cf~mv2.png/v1/fit/w_2500,h_1330,al_c/0759c8_7b1721dee706443ab2b940f4d30972cf~mv2.png",
    productos: [
      {nombre: "Big Mac", precio: 5},
      {nombre: "Papas", precio: 3},
      {nombre: "Nuggets", precio: 4},
      {nombre: "McFlurry", precio: 3},
      {nombre: "Combo 1", precio: 7},
      {nombre: "Combo 2", precio: 8},
      {nombre: "Refresco", precio: 2},
      {nombre: "Café", precio: 2},
      {nombre: "Helado", precio: 3},
      {nombre: "Ensalada", precio: 4}
    ]
  },

  {
    nombre: "Burger King",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Burger_King_logo_%281999%E2%80%932020%29.svg/960px-Burger_King_logo_%281999%E2%80%932020%29.svg.png",
    productos: [
      {nombre: "Whopper", precio: 6},
      {nombre: "Papas", precio: 3},
      {nombre: "Nuggets", precio: 4},
      {nombre: "Refresco", precio: 2},
      {nombre: "Combo", precio: 8},
      {nombre: "Helado", precio: 3},
      {nombre: "Café", precio: 2},
      {nombre: "Ensalada", precio: 4},
      {nombre: "Hamburguesa", precio: 5},
      {nombre: "Combo King", precio: 9}
    ]
  },

  {
    nombre: "KFC",
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/57/KFC_logo-image.svg",
    productos: [
      {nombre: "Pollo frito", precio: 7},
      {nombre: "Combo pollo", precio: 10},
      {nombre: "Papas", precio: 3},
      {nombre: "Refresco", precio: 2},
      {nombre: "Ensalada", precio: 4},
      {nombre: "Nuggets", precio: 5},
      {nombre: "Wrap", precio: 6},
      {nombre: "Combo familiar", precio: 15},
      {nombre: "Helado", precio: 3},
      {nombre: "Café", precio: 2}
    ]
  },

  {
    nombre: "Subway",
    imagen: "https://cdn.prod.website-files.com/69a58994a3daefc00194d75f/69bd858428625ab28fbc5299_AR-subway-4x3-6e1f8bb7150647bbbc16a0605a394b86.jpg",
    productos: [
      {nombre: "Sub 6 pulgadas", precio: 5},
      {nombre: "Sub 12 pulgadas", precio: 8},
      {nombre: "Galleta", precio: 2},
      {nombre: "Refresco", precio: 2},
      {nombre: "Ensalada", precio: 6},
      {nombre: "Combo", precio: 9},
      {nombre: "Wrap", precio: 7},
      {nombre: "Café", precio: 2},
      {nombre: "Jugo", precio: 3},
      {nombre: "Postre", precio: 4}
    ]
  },

  {
    nombre: "Domino's",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8CZXigKIPfdUXQT9BgRCVbJ9nTFJeLIDGw&s",
    productos: [
      {nombre: "Pizza pequeña", precio: 7},
      {nombre: "Pizza mediana", precio: 10},
      {nombre: "Pizza grande", precio: 13},
      {nombre: "Pan de ajo", precio: 4},
      {nombre: "Refresco", precio: 2},
      {nombre: "Alitas", precio: 6},
      {nombre: "Postre", precio: 5},
      {nombre: "Combo", precio: 12},
      {nombre: "Pasta", precio: 8},
      {nombre: "Calzone", precio: 9}
    ]
  },

  {
    nombre: "Taco Bell",
    imagen: "https://pedidosya.dhmedia.io/image/pedidosya/restaurants/taco-bell-acropolis-126551.jpg",
    productos: [
      {nombre: "Taco", precio: 3},
      {nombre: "Burrito", precio: 5},
      {nombre: "Nachos", precio: 4},
      {nombre: "Refresco", precio: 2},
      {nombre: "Combo", precio: 7},
      {nombre: "Quesadilla", precio: 6},
      {nombre: "Postre", precio: 4},
      {nombre: "Café", precio: 2},
      {nombre: "Wrap", precio: 5},
      {nombre: "Helado", precio: 3}
    ]
  },

  {
    nombre: "Chick-fil-A",
    imagen: "https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo.png",
    productos: [
      {nombre: "Chicken Sandwich", precio: 6},
      {nombre: "Nuggets", precio: 5},
      {nombre: "Papas", precio: 3},
      {nombre: "Refresco", precio: 2},
      {nombre: "Combo", precio: 8},
      {nombre: "Ensalada", precio: 6},
      {nombre: "Helado", precio: 3},
      {nombre: "Café", precio: 2},
      {nombre: "Postre", precio: 4},
      {nombre: "Wrap", precio: 5}
    ]
  },


  {
    nombre: "Super Bravo",
    imagen: "https://yt3.googleusercontent.com/ytc/AIdro_mdkzjNf4od07stY135XRU_bqFkWyFieiU2oBlGOCYMBw=s900-c-k-c0x00ffffff-no-rj",
    productos: [
      {nombre: "Arroz", precio: 1},
      {nombre: "Leche", precio: 2},
      {nombre: "Pan", precio: 1},
      {nombre: "Huevos", precio: 3},
      {nombre: "Queso", precio: 4},
      {nombre: "Aceite", precio: 5},
      {nombre: "Refresco", precio: 2},
      {nombre: "Galletas", precio: 2},
      {nombre: "Azúcar", precio: 2},
      {nombre: "Sal", precio: 1},
      {nombre: "Pollo", precio: 6},
      {nombre: "Carne", precio: 7},
      {nombre: "Pasta", precio: 2},
      {nombre: "Cereal", precio: 4},
      {nombre: "Chocolate", precio: 3}
    ]
  },

{
  nombre: "Hipermercados Olé",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE4cU5o6n18mwmVtwUrpKA3JiIYoXhxqioQ&s",
  productos: [
    {nombre: "Arroz Selecto", precio: 2},
    {nombre: "Leche Entera", precio: 3},
    {nombre: "Pan de molde", precio: 2},
    {nombre: "Huevos (12)", precio: 4},
    {nombre: "Queso cheddar", precio: 5},
    {nombre: "Aceite vegetal", precio: 6},
    {nombre: "Refresco 2L", precio: 3},
    {nombre: "Galletas dulces", precio: 2},
    {nombre: "Azúcar refinada", precio: 3},
    {nombre: "Sal fina", precio: 1},
    {nombre: "Pollo fresco", precio: 7},
    {nombre: "Carne molida", precio: 8},
    {nombre: "Espagueti", precio: 2},
    {nombre: "Cereal", precio: 5},
    {nombre: "Chocolate barra", precio: 3}
  ]
},

{
  nombre: "La Sirena",
  imagen: "https://static.wixstatic.com/media/8dda30_bfec53d77b67483b9d3baa40aee906e5~mv2.jpg/v1/fill/w_900,h_543,al_c,q_85,enc_avif,quality_auto/8dda30_bfec53d77b67483b9d3baa40aee906e5~mv2.jpg",
  productos: [
    {nombre: "Arroz premium", precio: 2},
    {nombre: "Leche descremada", precio: 3},
    {nombre: "Pan integral", precio: 2},
    {nombre: "Huevos grandes", precio: 4},
    {nombre: "Queso blanco", precio: 5},
    {nombre: "Aceite de oliva", precio: 7},
    {nombre: "Refresco lata", precio: 2},
    {nombre: "Galletas crackers", precio: 2},
    {nombre: "Azúcar morena", precio: 3},
    {nombre: "Sal gruesa", precio: 1},
    {nombre: "Pollo congelado", precio: 6},
    {nombre: "Carne premium", precio: 9},
    {nombre: "Pasta larga", precio: 2},
    {nombre: "Cereal chocolate", precio: 5},
    {nombre: "Chocolate dulce", precio: 3}
  ]
},

{
  nombre: "Supermercados Nacional",
  imagen: "https://yt3.googleusercontent.com/ytc/AIdro_me3XkFd0IpLdtUi6Po9Oz_q7viV7gtqxwVD38FU5XUO4A=s900-c-k-c0x00ffffff-no-rj",
  productos: [
    {nombre: "Arroz selecto", precio: 2},
    {nombre: "Leche sin lactosa", precio: 4},
    {nombre: "Pan francés", precio: 2},
    {nombre: "Huevos orgánicos", precio: 5},
    {nombre: "Queso suizo", precio: 6},
    {nombre: "Aceite premium", precio: 8},
    {nombre: "Refresco light", precio: 2},
    {nombre: "Galletas premium", precio: 3},
    {nombre: "Azúcar blanca", precio: 2},
    {nombre: "Sal marina", precio: 2},
    {nombre: "Pollo orgánico", precio: 8},
    {nombre: "Carne importada", precio: 10},
    {nombre: "Pasta italiana", precio: 3},
    {nombre: "Cereal integral", precio: 5},
    {nombre: "Chocolate oscuro", precio: 4}
  ]
},

{
  nombre: "Almacenes Cristo Viene",
  imagen: "https://almacenescristoviene.com/wp-content/uploads/2021/11/Logo-transparente.png",
  productos: [
    {nombre: "Arroz económico", precio: 1},
    {nombre: "Leche básica", precio: 2},
    {nombre: "Pan simple", precio: 1},
    {nombre: "Huevos", precio: 3},
    {nombre: "Queso", precio: 4},
    {nombre: "Aceite", precio: 5},
    {nombre: "Refresco", precio: 2},
    {nombre: "Galletas", precio: 1},
    {nombre: "Azúcar", precio: 2},
    {nombre: "Sal", precio: 1},
    {nombre: "Pollo", precio: 6},
    {nombre: "Carne", precio: 7},
    {nombre: "Pasta", precio: 2},
    {nombre: "Cereal", precio: 4},
    {nombre: "Chocolate", precio: 2}
  ]
},

{
  nombre: "Granix",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdU4d2AytdaCK8CxhZxWISv4e7xJRWl0QaQ&s",
  productos: [
    {nombre: "Arroz", precio: 2},
    {nombre: "Leche", precio: 3},
    {nombre: "Pan", precio: 2},
    {nombre: "Huevos", precio: 4},
    {nombre: "Queso", precio: 5},
    {nombre: "Aceite", precio: 6},
    {nombre: "Refresco", precio: 3},
    {nombre: "Galletas", precio: 2},
    {nombre: "Azúcar", precio: 3},
    {nombre: "Sal", precio: 1},
    {nombre: "Pollo", precio: 7},
    {nombre: "Carne", precio: 8},
    {nombre: "Pasta", precio: 2},
    {nombre: "Cereal", precio: 5},
    {nombre: "Chocolate", precio: 3}
  ]
},

{
  nombre: "Hermanos Rafael",
  imagen: "imagenes/h.png",
  productos: [
    {nombre: "Arroz", precio: 2},
    {nombre: "Leche", precio: 3},
    {nombre: "Pan", precio: 2},
    {nombre: "Huevos", precio: 4},
    {nombre: "Queso", precio: 5},
    {nombre: "Aceite", precio: 6},
    {nombre: "Refresco", precio: 2},
    {nombre: "Galletas", precio: 2},
    {nombre: "Azúcar", precio: 3},
    {nombre: "Sal", precio: 1},
    {nombre: "Pollo", precio: 7},
    {nombre: "Carne", precio: 8},
    {nombre: "Pasta", precio: 2},
    {nombre: "Cereal", precio: 5},
    {nombre: "Chocolate", precio: 3}
  ]
},

{
  nombre: "Mercado Victoria",
  imagen: "imagenes/v.png",
  productos: [
    {nombre: "Arroz", precio: 2},
    {nombre: "Leche", precio: 3},
    {nombre: "Pan", precio: 2},
    {nombre: "Huevos", precio: 4},
    {nombre: "Queso", precio: 5},
    {nombre: "Aceite", precio: 6},
    {nombre: "Refresco", precio: 2},
    {nombre: "Galletas", precio: 2},
    {nombre: "Azúcar", precio: 3},
    {nombre: "Sal", precio: 1},
    {nombre: "Pollo", precio: 7},
    {nombre: "Carne", precio: 8},
    {nombre: "Pasta", precio: 2},
    {nombre: "Cereal", precio: 5},
    {nombre: "Chocolate", precio: 3}
  ]
}

];

function cargarLugares() {
  const contenedor = document.getElementById("contenedor-lugares");
  contenedor.innerHTML = "";

  lugares.forEach(lugar => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${lugar.imagen}">
        <h3>${lugar.nombre}</h3>
        <button onclick="verMenu('${lugar.nombre}')">Ver menú</button>
      </div>
    `;
  });
}

function verMenu(nombreLugar) {
  const lugar = lugares.find(l => l.nombre === nombreLugar);

  let html = "";

  lugar.productos.forEach(p => {
    html += `
      <p>
        ${p.nombre} - RD$${p.precio}
        <button onclick="agregar('${p.nombre}', ${p.precio})">Agregar</button>
      </p>
    `;
  });

  document.getElementById("productos").innerHTML = html;
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
}

function agregar(nombre, precio) {
  carrito.push({nombre, precio});
  total += precio;

  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    lista.innerHTML += `
      <li>
        ${item.nombre} - RD$${item.precio}
        <button onclick="eliminar(${index})">❌Quitar</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = "RD$" + total;
}

function eliminar(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);

  actualizarCarrito();
}

document.getElementById("vaciar").addEventListener("click", () => {
  carrito = [];
  total = 0;
  actualizarCarrito();
});

cargarLugares();