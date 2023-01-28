const botonPresupuesto = document.getElementById('botonPresupuesto')

botonPresupuesto.addEventListener("click",()=>{
    Swal.fire({
        title: 'Su planificacion a sido enviada',
        html: `Nos comunicaremos con usted via email a la brevedad, muchas gracias.`,
        icon:'success',
})
})