function criptografar() {
    let inputText = document.getElementById("inputText");
    let outputText = document.getElementById("outputText");
    let imageDisplay = document.getElementById("imageDisplay");

    // Criptografia simples: substitui vogais por números
    let texto = inputText.value.toLowerCase()
        .replace(/e/g, '3')
        .replace(/i/g, '1')
        .replace(/a/g, '4')
        .replace(/o/g, '0')
        .replace(/u/g, '7');

    outputText.value = texto;

    // Ocultar imagem e mostrar caixa de texto
    imageDisplay.style.display = "none";
    outputText.style.display = "block";
}

function descriptografar() {
    let inputText = document.getElementById("inputText");
    let outputText = document.getElementById("outputText");
    let imageDisplay = document.getElementById("imageDisplay");

    // Descriptografia simples: substitui números por vogais
    let texto = inputText.value.toLowerCase()
        .replace(/3/g, 'e')
        .replace(/1/g, 'i')
        .replace(/4/g, 'a')
        .replace(/0/g, 'o')
        .replace(/7/g, 'u');

    outputText.value = texto;

    // Ocultar imagem e mostrar caixa de texto
    imageDisplay.style.display = "none";
    outputText.style.display = "block";
}
