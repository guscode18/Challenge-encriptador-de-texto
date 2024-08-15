function encriptarTexto() {
    let textoUsuario = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoEncriptado = textoUsuario
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (textoUsuario.length != 0) {
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./image/10528016.png";
        document.getElementById("copiar").style.display = "block";


    } else {
        imagen.src = "./image/tipos-encriptacion-de-datos.png";
        parrafo.textContent = ("Ingresa el texto que deseas encriptar o desencriptar");
        tituloMensaje.textContent = ("Ningún mensaje fue encontrado");
        document.getElementById("copiar").style.display = "none";

        Swal.fire({
            title: "Debes ingresar algun texto!",
            icon: "warning",
            
        })



    }

}




function desencriptarTexto() {
    let textoUsuario = document.getElementById("texto").value
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoEncriptado = textoUsuario
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (textoUsuario.length != 0) {

        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./image/2471716.png";
        document.getElementById("copiar").style.display = "block";



    } else {

        imagen.src = "./image/tipos-encriptacion-de-datos.png";
        parrafo.textContent = ("Ingresa el texto que deseas encriptar o desencriptar");
        tituloMensaje.textContent = ("Ningún mensaje fue encontrado");
        document.getElementById("copiar").style.display = "none";
        Swal.fire({
            title: "Debes ingresar algun texto!",
            icon: "warning"
        })




    }


}


function copiarTexto() {
    let textoUsuario = document.getElementById("texto");
    textoUsuario.select();
    textoUsuario.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoUsuario.value);


    Swal.fire({
        title: "Texto copiado con exito!",
        icon: "success"
    })



}


