let carrito = [];
let total = 0;

const lugares = [

  
  {
    nombre: "Pizza Hut",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Pizza_Hut_2025.svg",
    productos: [
  {nombre: "Pizza Personal", precio: 400},
  {nombre: "Pizza Familiar", precio: 950},
  {nombre: "Pan de ajo", precio: 220},
  {nombre: "Alitas", precio: 380},
  {nombre: "Refresco", precio: 120},
  {nombre: "Lasaña", precio: 550},
  {nombre: "Calzone", precio: 500},
  {nombre: "Postre", precio: 200},
  {nombre: "Pasta", precio: 450},
  {nombre: "Combo Pizza", precio: 850}
]
  },

  {
    nombre: "McDonalds",
    imagen: "https://static.wixstatic.com/media/0759c8_7b1721dee706443ab2b940f4d30972cf~mv2.png/v1/fit/w_2500,h_1330,al_c/0759c8_7b1721dee706443ab2b940f4d30972cf~mv2.png",
    productos: [
  {nombre: "Big Mac", precio: 320},
  {nombre: "Papas", precio: 150},
  {nombre: "Nuggets", precio: 280},
  {nombre: "McFlurry", precio: 180},
  {nombre: "Combo 1", precio: 450},
  {nombre: "Combo 2", precio: 520},
  {nombre: "Refresco", precio: 120},
  {nombre: "Café", precio: 100},
  {nombre: "Helado", precio: 130},
  {nombre: "Ensalada", precio: 250}
]
  },

  {
    nombre: "Burger King",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Burger_King_logo_%281999%E2%80%932020%29.svg/960px-Burger_King_logo_%281999%E2%80%932020%29.svg.png",
    productos: [
  {nombre: "Whopper", precio: 350},
  {nombre: "Papas", precio: 150},
  {nombre: "Nuggets", precio: 270},
  {nombre: "Refresco", precio: 120},
  {nombre: "Combo", precio: 500},
  {nombre: "Helado", precio: 140},
  {nombre: "Café", precio: 100},
  {nombre: "Ensalada", precio: 260},
  {nombre: "Hamburguesa", precio: 300},
  {nombre: "Combo King", precio: 550}
]
  },

  {
    nombre: "KFC",
    imagen: "https://upload.wikimedia.org/wikipedia/en/5/57/KFC_logo-image.svg",
    productos: [
  {nombre: "Pollo frito", precio: 400},
  {nombre: "Combo pollo", precio: 650},
  {nombre: "Papas", precio: 150},
  {nombre: "Refresco", precio: 120},
  {nombre: "Ensalada", precio: 250},
  {nombre: "Nuggets", precio: 300},
  {nombre: "Wrap", precio: 350},
  {nombre: "Combo familiar", precio: 1200},
  {nombre: "Helado", precio: 150},
  {nombre: "Café", precio: 100}
]
  },

  {
    nombre: "Subway",
    imagen: "https://cdn.prod.website-files.com/69a58994a3daefc00194d75f/69bd858428625ab28fbc5299_AR-subway-4x3-6e1f8bb7150647bbbc16a0605a394b86.jpg",
   productos: [
  {nombre: "Sub 6 pulgadas", precio: 300},
  {nombre: "Sub 12 pulgadas", precio: 550},
  {nombre: "Galleta", precio: 100},
  {nombre: "Refresco", precio: 120},
  {nombre: "Ensalada", precio: 400},
  {nombre: "Combo", precio: 650},
  {nombre: "Wrap", precio: 380},
  {nombre: "Café", precio: 100},
  {nombre: "Jugo", precio: 150},
  {nombre: "Postre", precio: 180}
]
  },

  {
    nombre: "Domino's",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8CZXigKIPfdUXQT9BgRCVbJ9nTFJeLIDGw&s",
    productos: [
  {nombre: "Pizza pequeña", precio: 350},
  {nombre: "Pizza mediana", precio: 600},
  {nombre: "Pizza grande", precio: 850},
  {nombre: "Pan de ajo", precio: 200},
  {nombre: "Refresco", precio: 120},
  {nombre: "Alitas", precio: 400},
  {nombre: "Postre", precio: 180},
  {nombre: "Combo pizza", precio: 900},
  {nombre: "Pasta", precio: 500},
  {nombre: "Calzone", precio: 550}
]
  },

  {
    nombre: "Taco Bell",
    imagen: "https://pedidosya.dhmedia.io/image/pedidosya/restaurants/taco-bell-acropolis-126551.jpg",
    productos: [
  {nombre: "Taco", precio: 120},
  {nombre: "Burrito", precio: 250},
  {nombre: "Nachos", precio: 200},
  {nombre: "Refresco", precio: 120},
  {nombre: "Combo", precio: 400},
  {nombre: "Quesadilla", precio: 300},
  {nombre: "Postre", precio: 150},
  {nombre: "Café", precio: 100},
  {nombre: "Wrap", precio: 280},
  {nombre: "Helado", precio: 130}
]
  },

  {
    nombre: "Chick-fil-A",
    imagen: "https://logos-world.net/wp-content/uploads/2021/08/Chick-fil-A-Logo.png",
    productos: [
  {nombre: "Chicken Sandwich", precio: 350},
  {nombre: "Nuggets", precio: 300},
  {nombre: "Papas", precio: 150},
  {nombre: "Refresco", precio: 120},
  {nombre: "Combo", precio: 500},
  {nombre: "Ensalada", precio: 320},
  {nombre: "Helado", precio: 150},
  {nombre: "Café", precio: 100},
  {nombre: "Postre", precio: 180},
  {nombre: "Wrap", precio: 280}
]
  },


  {
    nombre: "Super Bravo",
    imagen: "https://yt3.googleusercontent.com/ytc/AIdro_mdkzjNf4od07stY135XRU_bqFkWyFieiU2oBlGOCYMBw=s900-c-k-c0x00ffffff-no-rj",
    productos: [
  {nombre: "Arroz (libra)", precio: 40},
  {nombre: "Leche", precio: 80},
  {nombre: "Pan", precio: 60},
  {nombre: "Huevos (12)", precio: 220},
  {nombre: "Queso", precio: 180},
  {nombre: "Aceite", precio: 300},
  {nombre: "Refresco 2L", precio: 110},
  {nombre: "Galletas", precio: 75},
  {nombre: "Azúcar", precio: 50},
  {nombre: "Sal", precio: 25},
  {nombre: "Pollo", precio: 280},
  {nombre: "Carne", precio: 350},
  {nombre: "Pasta", precio: 70},
  {nombre: "Cereal", precio: 200},
  {nombre: "Chocolate", precio: 90}
]
  },

{
  nombre: "Hipermercados Olé",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE4cU5o6n18mwmVtwUrpKA3JiIYoXhxqioQ&s",
  productos: [
  {nombre: "Arroz", precio: 45},
  {nombre: "Leche", precio: 85},
  {nombre: "Pan", precio: 65},
  {nombre: "Huevos", precio: 230},
  {nombre: "Queso", precio: 190},
  {nombre: "Aceite", precio: 320},
  {nombre: "Refresco", precio: 120},
  {nombre: "Galletas", precio: 80},
  {nombre: "Azúcar", precio: 55},
  {nombre: "Sal", precio: 30},
  {nombre: "Pollo", precio: 290},
  {nombre: "Carne", precio: 360},
  {nombre: "Pasta", precio: 75},
  {nombre: "Cereal", precio: 210},
  {nombre: "Chocolate", precio: 100}
]
},

{
  nombre: "La Sirena",
  imagen: "https://static.wixstatic.com/media/8dda30_bfec53d77b67483b9d3baa40aee906e5~mv2.jpg/v1/fill/w_900,h_543,al_c,q_85,enc_avif,quality_auto/8dda30_bfec53d77b67483b9d3baa40aee906e5~mv2.jpg",
  productos: [
  {nombre: "Arroz", precio: 50},
  {nombre: "Leche", precio: 90},
  {nombre: "Pan", precio: 70},
  {nombre: "Huevos", precio: 240},
  {nombre: "Queso", precio: 200},
  {nombre: "Aceite", precio: 350},
  {nombre: "Refresco", precio: 130},
  {nombre: "Galletas", precio: 90},
  {nombre: "Azúcar", precio: 60},
  {nombre: "Sal", precio: 30},
  {nombre: "Pollo", precio: 300},
  {nombre: "Carne", precio: 380},
  {nombre: "Pasta", precio: 80},
  {nombre: "Cereal", precio: 220},
  {nombre: "Chocolate", precio: 110}
]
},

{
  nombre: "Supermercados Nacional",
  imagen: "https://yt3.googleusercontent.com/ytc/AIdro_me3XkFd0IpLdtUi6Po9Oz_q7viV7gtqxwVD38FU5XUO4A=s900-c-k-c0x00ffffff-no-rj",
  productos: [
  {nombre: "Arroz premium", precio: 60},
  {nombre: "Leche", precio: 100},
  {nombre: "Pan", precio: 80},
  {nombre: "Huevos", precio: 260},
  {nombre: "Queso", precio: 240},
  {nombre: "Aceite", precio: 400},
  {nombre: "Refresco", precio: 140},
  {nombre: "Galletas", precio: 100},
  {nombre: "Azúcar", precio: 70},
  {nombre: "Sal", precio: 35},
  {nombre: "Pollo", precio: 320},
  {nombre: "Carne", precio: 420},
  {nombre: "Pasta", precio: 90},
  {nombre: "Cereal", precio: 250},
  {nombre: "Chocolate", precio: 120}
]
},

{
  nombre: "Almacenes Cristo Viene",
  imagen: "https://almacenescristoviene.com/wp-content/uploads/2021/11/Logo-transparente.png",
  productos: [
    {nombre: "Arroz económico", precio: 35},
    {nombre: "Leche básica", precio: 70},
    {nombre: "Pan simple", precio: 50},
    {nombre: "Huevos", precio: 200},
    {nombre: "Queso", precio: 160},
    {nombre: "Aceite", precio: 270},
    {nombre: "Refresco", precio: 95},
    {nombre: "Galletas", precio: 65},
    {nombre: "Azúcar", precio: 45},
    {nombre: "Sal", precio: 20},
    {nombre: "Pollo", precio: 250},
    {nombre: "Carne", precio: 320},
    {nombre: "Pasta", precio: 60},
    {nombre: "Cereal", precio: 170},
    {nombre: "Chocolate", precio: 75}
  ]
},


{
  nombre: "Granix",
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdU4d2AytdaCK8CxhZxWISv4e7xJRWl0QaQ&s",
  productos: [
    {nombre: "Arroz", precio: 42},
    {nombre: "Leche", precio: 82},
    {nombre: "Pan", precio: 62},
    {nombre: "Huevos", precio: 225},
    {nombre: "Queso", precio: 185},
    {nombre: "Aceite", precio: 310},
    {nombre: "Refresco", precio: 115},
    {nombre: "Galletas", precio: 78},
    {nombre: "Azúcar", precio: 52},
    {nombre: "Sal", precio: 26},
    {nombre: "Pollo", precio: 285},
    {nombre: "Carne", precio: 355},
    {nombre: "Pasta", precio: 72},
    {nombre: "Cereal", precio: 205},
    {nombre: "Chocolate", precio: 95}
  ]
},


{
  nombre: "Hermanos Rafael",
  imagen: "imagenes/h.png",
  productos:  [
  {nombre: "Arroz", precio: 38},
  {nombre: "Leche", precio: 78},
  {nombre: "Pan", precio: 58},
  {nombre: "Huevos", precio: 215},
  {nombre: "Queso", precio: 175},
  {nombre: "Aceite", precio: 290},
  {nombre: "Refresco", precio: 105},
  {nombre: "Galletas", precio: 72},
  {nombre: "Azúcar", precio: 48},
  {nombre: "Sal", precio: 22},
  {nombre: "Pollo", precio: 270},
  {nombre: "Carne", precio: 340},
  {nombre: "Pasta", precio: 68},
  {nombre: "Cereal", precio: 190},
  {nombre: "Chocolate", precio: 85}
]
},

{
  nombre: "Mercado Victoria",
  imagen: "imagenes/v.png",
  productos: [
  {nombre: "Arroz", precio: 35},
  {nombre: "Leche", precio: 75},
  {nombre: "Pan", precio: 55},
  {nombre: "Huevos", precio: 210},
  {nombre: "Queso", precio: 170},
  {nombre: "Aceite", precio: 280},
  {nombre: "Refresco", precio: 100},
  {nombre: "Galletas", precio: 70},
  {nombre: "Azúcar", precio: 45},
  {nombre: "Sal", precio: 20},
  {nombre: "Pollo", precio: 260},
  {nombre: "Carne", precio: 330},
  {nombre: "Pasta", precio: 65},
  {nombre: "Cereal", precio: 180},
  {nombre: "Chocolate", precio: 80}
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
