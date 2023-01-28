const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input"); // con #formulario estoy entrando al id y seleccionando todos los inputs con el querySelectorALL


const expresiones = {
    nombre: /^[a-zA-ZAÀ-ÿ\s]{1,40}$/, // letras y espacios, puede llevar acentos
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // letras y espacios, pueden llevar acentos
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{7,14}$/, // 7 a 14 numeros
    tarjetas:/^\d{16}$/, //Tarjeta debito, credito
    codigo_de_seguridad:/^\d{3}$/, //codigo de seguridad
}
const campos= {
    Nombre: false,
    Apellido: false,
    Email: false,
    Telefono: false,
    NumeroTarjeta: false,
    CodigoSeguridad: false
}

const validarFormulario = (e) =>{
   switch (e.target.name){
    case 'nombre':
        validarCampo(expresiones.nombre , e.target , 'Nombre')
    break;
    case 'apellido':
        validarCampo(expresiones.apellido , e.target , 'Apellido')
     break;
     case 'email':
        validarCampo(expresiones.email , e.target , 'Email')
     break;
     case 'telefono':
        validarCampo(expresiones.telefono , e.target , 'Telefono')
     break;
     case 'numeroTarjeta':
        validarCampo(expresiones.tarjetas , e.target , 'NumeroTarjeta')
     break;
     case 'codigoSeguridad':
        validarCampo(expresiones.codigo_de_seguridad , e.target , 'CodigoSeguridad')
     break;
   }
}
const validarCampo = (expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo${campo}`).classList.remove('formularioGrupoIncorrecto');
        document.getElementById(`grupo${campo}`).classList.add('formularioGrupoCorrecto');
        document.querySelector(`#grupo${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo${campo} .formularioInputError`).classList.remove('formularioInputError-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo${campo}`).classList.add('formularioGrupoIncorrecto');
        document.getElementById(`grupo${campo}`).classList.remove('formularioGrupoCorrecto');
        document.querySelector(`#grupo${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo${campo} .formularioInputError`).classList.add('formularioInputError-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
    input.addEventListener('blur',validarFormulario)
})

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const terminos =document.getElementById('terminos')
    if(campos.Nombre && campos.Apellido && campos.Email && campos.Telefono && campos.NumeroTarjeta && campos.CodigoSeguridad && terminos.checked){
        formulario.reset();

        document.getElementById('formularioMensajeExito').classList.add('formularioMensajeExito-activo');
        setTimeout(() => {
        document.getElementById('formularioMensajeExito').classList.remove('formularioMensajeExito-activo'); 
        }, 5000);
        document.querySelectorAll('.formularioGrupoCorrecto').forEach((icono)=>{
            icono.classList.remove('formularioGrupoCorrecto');
        });
        document.getElementById('formularioMensaje').classList.remove('formularioMensaje-activo')
    } else {
        document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo')
    }
})
