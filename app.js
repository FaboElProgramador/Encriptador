function encriptar(letra) {
    const reemplazo = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    return reemplazo[letra] || letra;
}

function desencriptar(match) {
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
    const textoParaCambiar = document.getElementById('texto-izquierda').value;
    var regex = /^[a-z\s\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/; // Letras minúsculas, espacios y otros caracteres especiales
    if (!regex.test(textoParaCambiar)) {
        alert('El texto debe contener solo letras minúsculas, sin acentos ni mayúsculas.');
        document.getElementById('texto-izquierda').value = "";
    } else {
        let textoEncriptado = textoParaCambiar.replace(/[aeiou]/g, encriptar); 
        document.getElementById('texto-derecha').value = textoEncriptado; 
    }
}

function desencriptarTexto() {
    const textoParaDesencriptar = document.getElementById('texto-izquierda').value;
    const textoDesencriptado = textoParaDesencriptar.replace(/ai|enter|imes|ober|ufat/g, desencriptar);
    document.getElementById('texto-derecha').value = textoDesencriptado;
}

function ocultarTextoAdvertencia() {
    var textoIzquierda = document.getElementById('texto-izquierda').value;
    var textoAdvertencia = document.getElementById('textnotfound');
    
    if (textoIzquierda.trim() !== '') {
        textoAdvertencia.style.display = 'none';
    } else {
        textoAdvertencia.style.display = 'block';
    }
}

function copiarTexto() {
    var textoDerecha = document.getElementById('texto-derecha').value;
    navigator.clipboard.writeText(textoDerecha)
        .then(function() {
            alert('Texto copiado!');
        })
        .catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
}

function vaciarTexto() {
    document.getElementById('texto-izquierda').value = '';
    document.getElementById('texto-derecha').value = '';
    ocultarTextoAdvertencia(); // Llamar a la función para que aparezca el texto de advertencia
}