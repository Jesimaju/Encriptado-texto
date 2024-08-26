const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const txtEncriptado = encriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; // Asegúrate de que la imagen de fondo esté eliminada
}

function btnDesencriptar() {
    const txtDesencriptado = desencriptar(textArea.value);
    mensaje.value = txtDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; // Asegúrate de que la imagen de fondo esté eliminada
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringDesencriptada;
}
