let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {

    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mostrar mensaje de error si está vacío
        return; // Detener la función
    }

   
    amigos.push(nombre); 
    console.log("Amigos actualizados:", amigos); // Mostrar el array en la consola

    input.value = ""; 

    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista 
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        // Crear un nuevo elemento de lista (<li>)
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigo; 

        // Agregar el elemento a la lista
        lista.appendChild(elementoLista);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles para sortear.";
        return; // Detener la función si no hay amigos
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}