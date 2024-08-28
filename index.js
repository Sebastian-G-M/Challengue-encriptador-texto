function actualizarInterfaz(texto, mensaje) {
    let mensajeEncriptado = document.getElementById("mensaje-encriptado");
    let imagen = document.getElementById("poster");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let btnCopiar = document.querySelector(".btn-copiar");

    // Oculta el área del texto original y muestra el mensaje encriptado
    tituloMensaje.style.display = "none"; // Oculta el título
    mensajeEncriptado.style.display = "flex"; // Muestra el área de mensaje encriptado
    mensajeEncriptado.querySelector('p').textContent = mensaje; // Muestra el mensaje encriptado en <p>
    mensajeEncriptado.querySelector('h2').textContent = ""; // Limpia el texto del <h2>
    imagen.style.display = "none"; // Oculta la imagen
    btnCopiar.style.display = "block"; // Muestra el botón de copiar
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    
    if (texto.trim() === "") {
        alert("Debes ingresar algún texto");
        return;
    }
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.getElementById("texto").value = textoCifrado; // Muestra el texto encriptado en el área de texto
    actualizarInterfaz(texto, textoCifrado); // Actualiza el mensaje encriptado
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    
    if (texto.trim() === "") {
        alert("Debes ingresar algún texto");
        return;
    }
    
    let textoOriginal = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoOriginal; // Muestra el texto desencriptado en el área de texto
    actualizarInterfaz(textoOriginal, textoOriginal); // Actualiza el mensaje encriptado
}

function copiar() {
    let texto = document.getElementById("texto").value;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }, (err) => {
        alert("Error al copiar texto: " + err);
    });
}
