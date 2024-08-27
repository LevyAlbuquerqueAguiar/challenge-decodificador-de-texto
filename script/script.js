var textImput = document.querySelector("#imput-texto");
var output = document.querySelector("output");

function criptografar() {
    var texto = textImput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("output").innerHTML = '<textarea readonly id"imput-texto">' + resultCripto +
        '</textarea>' + '<button class="copiar" id="copiar" onclick="copiar()">copiar</button'
}

function descriptografar() {
    var texto = textImput.value;

    var resulDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
        .replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("output").innerHTML = '<textarea readonly id"imput-texto">' + resulDescripto +
        '</textarea>' + '<button class="copiar" id="copiar" onclick="copiar()">copiar</button'
}

function copiar() {
    var textpCop = document.getElementById("imput-texto");

    textpCop.select();
    document.execCommand("copy");
    alert("Texto Copiado!");
}