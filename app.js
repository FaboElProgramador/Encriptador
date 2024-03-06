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

//Funcion encriptar
function encriptarTexto() {
    const textoParaCambiar = textoIzquierda.value;
    var regex = /^[a-z\s\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/; // Letras minúsculas, espacios y otros caracteres especiales
    if (!regex.test(textoParaCambiar)) {
        Swal.fire({
            title: 'Error!',
            text: 'El texto debe contener solo letras minúsculas, sin acentos ni mayúsculas.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'my-popup'
            }
        });
        textoIzquierda.value = "";
    } else {
        let textoEncriptado = textoParaCambiar.replace(/[aeiou]/g, encriptar); 
        textoDerecha.value = textoEncriptado; 
    }
}

//Funcion desencriptar
function desencriptarTexto() {
    const textoParaDesencriptar = textoIzquierda.value;
    const textoDesencriptado = textoParaDesencriptar.replace(/ai|enter|imes|ober|ufat/g, desencriptar);
    textoDerecha.value = textoDesencriptado;
}

//Funcion ocultar texto
function ocultarTextoAdvertencia() {
    var textoIzquierdaValue = textoIzquierda.value;
    
    if (textoIzquierdaValue.trim() !== '') {
        textoAdvertencia.style.display = 'none';
    } else {
        textoAdvertencia.style.display = 'block';
    }
}

//Funcion copiar texto
function copiarTexto() {
    var textoDerechaValue = textoDerecha.value;
    navigator.clipboard.writeText(textoDerechaValue)
        .then(function() {
            Swal.fire({
                title: '¡Copiado!',
                text: 'El texto ha sido copiado al portapapeles.',
                icon: 'success',
                customClass: {
                    popup: 'mi-popup-personalizado',
                    title: 'mi-titulo-personalizado',
                    content: 'mi-contenido-personalizado'
                }
            });
        })
        .catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
}

//Función vaciar texto
function vaciarTexto() {
    textoIzquierda.value = '';
    textoDerecha.value = '';
    ocultarTextoAdvertencia(); 
}