// Almacenar los elementos del DOM en variables
const textoIzquierda = document.getElementById('texto-izquierda');
const textoDerecha = document.getElementById('texto-derecha');
const textoAdvertencia = document.getElementById('textnotfound');

const encriptar = letra => {
    const reemplazo = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    return reemplazo[letra] || letra;
}

const desencriptar = match => {
    const sustitucion = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    return sustitucion[match] || match;
}

function encriptarTexto() {
    const textoParaCambiar = textoIzquierda.value;
    var regex = /^[a-z\s\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/; // Letras minúsculas, espacios y otros caracteres especiales
    if (!regex.test(textoParaCambiar)) {
        alert('El texto debe contener solo letras minúsculas, sin acentos ni mayúsculas.');
        textoIzquierda.value = "";
    } else {
        let textoEncriptado = textoParaCambiar.replace(/[aeiou]/g, encriptar); 
        textoDerecha.value = textoEncriptado; 
    }
}

function desencriptarTexto() {
    const textoParaDesencriptar = textoIzquierda.value;
    const textoDesencriptado = textoParaDesencriptar.replace(/ai|enter|imes|ober|ufat/g, desencriptar);
    textoDerecha.value = textoDesencriptado;
}

function ocultarTextoAdvertencia() {
    var textoIzquierdaValue = textoIzquierda.value;
    
    if (textoIzquierdaValue.trim() !== '') {
        textoAdvertencia.style.display = 'none';
    } else {
        textoAdvertencia.style.display = 'block';
    }
}

function copiarTexto() {
    var textoDerechaValue = textoDerecha.value;
    navigator.clipboard.writeText(textoDerechaValue)
        .then(function() {
            alert('Texto copiado!');
        })
        .catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
}

function vaciarTexto() {
    textoIzquierda.value = '';
    textoDerecha.value = '';
    ocultarTextoAdvertencia(); // Llamar a la función para que aparezca el texto de advertencia
}
