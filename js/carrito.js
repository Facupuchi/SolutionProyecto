const pintarCarrito = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader= document.createElement("div");
    modalHeader.className="modal-header"
    modalHeader.innerHTML= `
      <h1 class="modal-header-titulo">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerHTML=`
        <h1 class="modalHeaderButton">X</h1>
    `
    modalbutton.addEventListener("click",() =>{
        modalContainer.style.display = "none";
    })
    modalHeader.appendChild(modalbutton);
     
    /*MODAL*/
    
    carrito.forEach((producto)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className="modal-content"
        carritoContent.innerHTML=`
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p class="infoModal">$${producto.precio}</p>
        <span class='restar'>-</span>
        <p class="modalCantidad"> Cantidad: ${producto.cantidad}</p>
        <span class='sumar'>+</span>
        <p class="infoModal"> Total: $${producto.cantidad * producto.precio}</p>
        `;
        modalContainer.appendChild(carritoContent);

        const restar = carritoContent.querySelector('.restar')
        restar.addEventListener('click',()=>{
            if(producto.cantidad !== 1){
            producto.cantidad--;
            pintarCarrito();
            setLocal();
            }
        })
        const sumar = carritoContent.querySelector('.sumar')
        sumar.addEventListener('click',()=>{
            if(producto.cantidad !== 0){
            producto.cantidad++;
            pintarCarrito();
            setLocal();
            }
        })

        let eliminar = document.createElement("span")
        eliminar.className="eliminar-content"
        eliminar.innerHTML =`
            <img src="../img/tacho.png" alt="">
        `
        carritoContent.appendChild(eliminar);

        eliminar.addEventListener("click", eliminarProducto)
    });

     const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0);

     const totalCompra =document.createElement("div")
     totalCompra.className ="total-content"
     totalCompra.innerHTML = `<p class="aPagar">Total a pagar: $${total}</p> <button id="botonComprar" class="botonY botonComprar">Comprar ahora</button> <button id="botonCancelar" class="botonN botonCancelar">Cerrar</button>`;
     modalContainer.appendChild(totalCompra);

     const botonComprar= document.getElementById('botonComprar');
     botonComprar.addEventListener("click", () =>{
        Swal.fire({
            title: 'Desea continuar con su compra?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Continuar'
          }).then((result) => {
            if (result.isConfirmed) {
                    return window.location.href = 'finalizarCompra.html'
            }
          })
    })
    const botonCancelar = document.getElementById('botonCancelar')
    botonCancelar.addEventListener('click',()=>{
        modalContainer.style.display = "none"; 
    })
};


verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);
    console.log(foundId)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoContador();
    setLocal();
    pintarCarrito();
};

const carritoContador = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem('carritoL', JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem('carritoL'));
};
carritoContador();