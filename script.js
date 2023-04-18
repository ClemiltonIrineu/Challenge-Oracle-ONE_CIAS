/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
Por exemplo:
"gato" => "gaitober"
*/

// Validação do Input
//PENDÊNCIA: não valida um texto copiado que não tenha passado pelo input
function validacao() {
    inputTexto = addEventListener("keypress", function (e) {
        if (!checarCaracter(e)) {
            e.preventDefault();
        }
    })
    function checarCaracter(e) {
        var char = String.fromCharCode(e.keyCode);
        var pattern = "[a-z\u0300-\u036f ]";

        if (char.match(pattern)) {
            return true;
        }
    }
}



// Função para criptografar a frase ou texto
function criptar() {
    var input = document.querySelector("#texto");
    var notFrase = document.querySelector("#not-frase");
    var btn = document.querySelector("#btn-copiar");
    notFrase.style.display = "none";
    btn.style.visibility = "visible";
    let texto = input.value;
    let arr = texto.split('');
    let ttexto = arr.length;

    for (var i = 0; i <= ttexto; i++) {
        if (arr[i] == "e") {
            arr[i] = 'enter';
        }
        if (arr[i] == "i") {
            arr[i] = 'imes';
        }
        if (arr[i] == "a") {
            arr[i] = 'ai';
        }
        if (arr[i] == "o") {
            arr[i] = 'ober';
        }
        if (arr[i] == "u") {
            arr[i] = 'ufat';
        }
        var textoCrip = arr.join('');
    }
    let frase = document.querySelector("#frase");
    frase.innerHTML = textoCrip;

    input.value = ''; // Limpa o campo do input
}


// Função para descriptografar a frase ou texto
function descriptar() {
    var input = document.querySelector("#texto");
    var notFrase = document.querySelector("#not-frase");
    var btn = document.querySelector("#btn-copiar");
    notFrase.style.display = "none";
    btn.style.visibility = "visible";
    let texto = input.value;
    let arr = texto.split('');
    let ttexto = arr.length;

    for (var i = 0; i <= ttexto; i++) {
        if ((arr[i] == "e") && (arr[i + 1] == 'n') && (arr[i + 2] == 't') && (arr[i + 3] == 'e') && (arr[i + 4] == 'r')) {
            arr[i] = 'e';
            arr[i + 1] = '';
            arr[i + 2] = '';
            arr[i + 3] = '';
            arr[i + 4] = '';
        }

        if ((arr[i] == "i") && (arr[i + 1] == 'm') && (arr[i + 2] == 'e') && (arr[i + 3] == 's')) {
            arr[i] = 'i';
            arr[i + 1] = '';
            arr[i + 2] = '';
            arr[i + 3] = '';
        }

        if ((arr[i] == "a") && (arr[i + 1] == 'i')) {
            arr[i] = 'a';
            arr[i + 1] = '';
        }

        if ((arr[i] == "o") && (arr[i + 1] == 'b') && (arr[i + 2] == 'e') && (arr[i + 3] == 'r')) {
            arr[i] = 'o';
            arr[i + 1] = '';
            arr[i + 2] = '';
            arr[i + 3] = '';
        }

        if ((arr[i] == "u") && (arr[i + 1] == 'f') && (arr[i + 2] == 'a') && (arr[i + 3] == 't')) {
            arr[i] = 'u';
            arr[i + 1] = '';
            arr[i + 2] = '';
            arr[i + 3] = '';
        }
        var textoDescrip = arr.join('');
    }

    let frase = document.querySelector("#frase");
    frase.innerHTML = textoDescrip;

    input.value = '';
}


//função para copiar o texto apresentado.
function copiarTexto() {
    var copyText = document.querySelector('#frase');
    var notFrase = document.querySelector("#not-frase");
    var btn = document.querySelector("#btn-copiar");
    btn.style.visibility = "hidden";
    notFrase.style.display = 'initial';
    let textoCopy = copyText.innerHTML;

    navigator.clipboard.writeText(textoCopy)
    copyText.innerHTML = "";
}
