// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";
    
    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Actualizar la lista visual usando la nueva función
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade al menos un nombre.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}
