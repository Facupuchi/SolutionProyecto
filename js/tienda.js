let productos = [
    {nombre:"Cable blanco", tipo: "cables", cantidad:1, desc:"Cable 20mtrs", precio: 5000, img:"../img/productos/cable1.jpg",id:1},
    {nombre:"Cable negro", tipo: "cables", cantidad:1, desc:"Cable 20mtrs", precio: 5000, img:"../img/productos/cable2.jpg",id:2},
    {nombre:"Cable amarillo", tipo: "cables", cantidad:1, desc:"Cable 20mtrs", precio: 5000, img:"../img/productos/cable3.jpg",id:3},
    {nombre:"Cable para guitarra", tipo: "cables", cantidad:1, desc:"Cable 10mtrs", precio: 8000, img:"../img/productos/cable4.jpg",id:4},
    {nombre:"Lampara led A70", tipo: "iluminacion", cantidad:1, desc:"Lampara led", precio: 2000, img:"../img/productos/Foco1.jpg",id:5},
    {nombre:"Lampara led A60 RGB", tipo: "iluminacion", cantidad:1, desc:"Lampara led RGB", precio: 3000, img:"../img/productos/Foco2.jpg",id:6},
    {nombre:"Lampara dicroica led GU10", tipo: "iluminacion", cantidad:1, desc:"Lampara led dicroica", precio: 2000, img:"../img/productos/Foco3.jpg",id:7},
    {nombre:"Luz de emergencia", tipo: "iluminacion", cantidad:1, desc:"Luz de emergencia", precio: 5000, img:"../img/productos/Foco5.jpg",id:8},
    {nombre:"Lampara de filamento 6W", tipo: "iluminacion", cantidad:1, desc:"Luz de filamento", precio: 5000, img:"../img/productos/Foco6.jpg",id:9},
    {nombre:"Taladro Halminton", tipo: "herramientas", cantidad:1, desc:"Taladro", precio: 5000, img:"../img/productos/herramienta1.jpg",id:10},
    {nombre:"Pack llaves alen x 9uni", tipo: "herramientas",cantidad:1, desc:"Llaves alen", precio: 4000, img:"../img/productos/herramienta3.jpg",id:11},
    {nombre:"Pack pinzas x 3uni", tipo: "herramientas", cantidad:1, desc:"Pinzas", precio: 4000, img:"../img/productos/herramienta4.jpg",id:12},
    {nombre:"Sierra electrica", tipo: "herramientas", cantidad:1, desc:"Sierra electrica", precio: 10000, img:"../img/productos/herramienta5.jpg",id:13},
    {nombre:"Boca llave x12uni", tipo: "herramientas", cantidad:1, desc:"Boca llave", precio: 5000, img:"../img/productos/herramienta2.jpg",id:14},
    {nombre:"Herramienta de mano", tipo: "herramientas", cantidad:1, desc:"herramienta", precio: 10000, img:"../img/productos/herramienta6.jpg",id:15},
    {nombre:"Lampara rosa", tipo: "lamparas", cantidad:1, desc:"Lampara", precio: 5000, img:"../img/productos/lampara1.jpg",id:16},
    {nombre:"Lampara de rattan", tipo: "lamparas", cantidad:1, desc:"Lampara", precio: 5000, img:"../img/productos/lampara2.jpg",id:17},
    {nombre:"Lampara vintage 1", tipo: "lamparas", cantidad:1, desc:"Lampara", precio: 5000, img:"../img/productos/lampara3.jpg",id:18},
    {nombre:"Lampara vintage 2", tipo: "lamparas", cantidad:1, desc:"Lampara", precio: 5000, img:"../img/productos/lampara4.jpg",id:19},
    {nombre:"Lampara negra", tipo: "lamparas", cantidad:1, desc:"Lampara", precio: 5000, img:"../img/productos/lampara5.jpg",id:20},
    {nombre:"Lampara vintage 3", tipo: "lamparas", cantidad:1, desc:"Lampara", precio: 5000, img:"../img/productos/lampara6.jpg",id:21},
    {nombre:"Termica Chint", tipo: "termicas", cantidad:1, desc:"Termicas", precio: 5000, img:"../img/productos/termica1.jpg",id:22},
    {nombre:"Termica TBC", tipo: "termicas", cantidad:1, desc:"Termicas", precio: 7000, img:"../img/productos/termica2.jpg",id:23},
    {nombre:"Termica ABB", tipo: "termicas", cantidad:1, desc:"Termicas", precio: 7000, img:"../img/productos/termica3.jpg",id:24},
    {nombre:"Termica Sica", tipo: "termicas", cantidad:1, desc:"Termicas", precio: 8000, img:"../img/productos/termica4.jpg",id:25},
    {nombre:"Termica Steck", tipo: "termicas", cantidad:1, desc:"Termicas", precio: 8000, img:"../img/productos/termica5.jpg",id:26},
    {nombre:"Termica Siemens", tipo: "termicas", cantidad:1, desc:"Termicas", precio: 10000, img:"../img/productos/termica6.jpg",id:27},
    {nombre:"Tira Led Multicolor", tipo: "iluminacion", cantidad:1, desc:"Tira led", precio: 5000, img:"../img/productos/Tiraled1.jpg",id:28},
    {nombre:"Tira Led Calida", tipo: "iluminacion", cantidad:1, desc:"Tira led", precio: 3000, img:"../img/productos/Tiraled2.jpg",id:29},
    {nombre:"Tira Led pack x 5uni", tipo: "iluminacion", cantidad:1, desc:"Tira led", precio: 10000, img:"../img/productos/Tiraled3.jpg",id:30},
    {nombre:"Tira Led pack x 8uni", tipo: "iluminacion", cantidad:1, desc:"Tira led", precio: 12000, img:"../img/productos/Tiraled4.jpg",id:31},
    {nombre:"Tira Led curva", tipo: "iluminacion", cantidad:1, desc:"Tira led", precio: 15000, img:"../img/productos/Tiraled5.jpg",id:32},
    ]

let carrito = JSON.parse(localStorage.getItem('producto')) || [];

const contenedorProductos = document.getElementById("contenedorProductos");
const verCarrito = document.getElementById("verCarrito");
const modalContainer=document.getElementById("modal-container");
const cantidadCarrito=document.getElementById("cantidadCarrito");

productos.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p class="productoDescripcion">${producto.desc}</p>
    <p class="precioProducto">$${producto.precio}</p>
    <br>
    <button id="agregar${producto.id}" class="boton boton-agregar">Agregar al carrito<i class fas-fa-shopping-cart></i></button>
    `
    contenedorProductos.appendChild(div);

    const agregarProductos = document.getElementById(`agregar${producto.id}`);

    agregarProductos.addEventListener("click", () =>{    
    const repeticion = carrito.some((repeticionProducto) => repeticionProducto.id === producto.id);
    if(repeticion){
        carrito.map((prod) => {
            if(prod.id === producto.id){
                prod.cantidad++;
            }
        })
    } else{  
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidad,
        });
        Toastify({
            text:"Producto agregado al carrito",
            style: {
                background: 'rgb(129, 31, 168)',
            },
            gravity:'bottom',
            position: 'right',
        }) .showToast();
    }
    carritoContador();
    setLocal();
});
});
const setLocal = () => {
localStorage.setItem('producto', JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem('producto'));


