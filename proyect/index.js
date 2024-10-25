// Trabajo Propio -- Engell Vado

// Obtención de elementos del DOM por su ID para manipularlos posteriormente
let txtPrPe = document.getElementById("prPe");
let btnCheck = document.getElementById("chequeo");
let pStatusAgN = document.getElementById("estadoAgregarNegativo");
let txtPrNm = document.getElementById("prNm");
let txtPrEd = document.getElementById("prEd");
let txtPrPs = document.getElementById("prPs");
let btnAgregar = document.getElementById("agrPersonas");
let pStatusAgP = document.getElementById("estadoAgregarPositivo");
let btnMostrarP = document.getElementById("mostrarPersonas");
let pNumeroPersonas = document.getElementById("numPerson");
let pNombrePersonas = document.getElementById("nmPersonas");
let pEdadPersonas = document.getElementById("edPersonas");
let pPesoPersonas = document.getElementById("psPersonas");

// Inicialmente, el botón "Agregar" está deshabilitado hasta que se confirme cuántas personas se desean agregar, para no generar problemas con el mismo boton
btnAgregar.disabled = true;
btnMostrarP.disabled = true;

// Declaración de otras variables y contenedores para almacenar datos y estados
let personas = [];
let estadoAgregarPositivo = "";
let estadoAgregarNegativo = "";
let preguntarPersonas;
let contadorPersonasAgregadas = 0;

// Orden en el que se ejecuta el código según las funciones:
// function checkPreguntar()
//

// Función para agregar personas
function agregarPersonas() {
  // Verificar si aún se pueden agregar personas (según la cantidad indicada inicialmente)
  if (contadorPersonasAgregadas < preguntarPersonas) {
    // Validar que los campos de entrada no estén vacíos o sean inválidos
    if (
      txtPrNm.value.trim() === "" ||
      isNaN(parseInt(txtPrEd.value, 10)) ||
      isNaN(parseFloat(txtPrPs.value)) ||
      txtPrEd.value <= 0 ||
      txtPrPs.value < 0
    ) {
      pStatusAgN.innerText =
        "Por favor, ingresa datos válidos para nombre, edad y peso.";
      return; // Salir de la función si hay un error
    }
    // Agregar la nueva persona al array "personas" con los valores ingresados
    personas.push({
      nombre: txtPrNm.value,
      edad: parseInt(txtPrEd.value, 10),
      peso: parseFloat(txtPrPs.value),
    });

    // Actualizar el estado positivo
    estadoAgregarPositivo = "Se agregó a esta persona";
    pStatusAgP.innerText = estadoAgregarPositivo;

    // Incrementar el contador de personas agregadas
    contadorPersonasAgregadas++;

    btnMostrarP.disabled = false;

    // Limpiar los campos de texto para permitir agregar otra persona
    txtPrNm.value = "";
    txtPrEd.value = "";
    txtPrPs.value = "";
  } else {
    // Mostrar mensaje si se ha alcanzado el número máximo de personas
    pStatusAgN.innerText = "Ya has agregado el número máximo de personas.";
    btnAgregar.disabled = true; // Deshabilitar el botón para que no se puedan agregar más personas
  }
}
// Asociar la función agregarPersonas() al evento de clic del botón "Agregar"
btnAgregar.addEventListener("click", agregarPersonas);

// Función para verificar la cantidad de personas que el usuario desea agregar
function checkPreguntar() {
  preguntarPersonas = parseInt(txtPrPe.value, 10); // Obtener el valor del campo y convertirlo a número

  // Validar que el valor ingresado sea un número y sea mayor que cero
  if (!isNaN(preguntarPersonas) && preguntarPersonas > 0) {
    // Mensaje personalizado dependiendo de si es una persona o más de una
    if (preguntarPersonas > 1) {
      estadoAgregarNegativo =
        "Vas a agregar: " + preguntarPersonas + " personas.";
    } else {
      estadoAgregarNegativo =
        "Vas a agregar: " + preguntarPersonas + " persona.";
    }

    btnAgregar.disabled = false; // Habilitar el botón "Agregar" si el número es válido
    contadorPersonasAgregadas = 0; // Reiniciar el contador de personas agregadas por si el usuario cambia el número

    pStatusAgN.innerText = estadoAgregarNegativo;
    estadoAgregarPositivo = "Se va agregar a esta persona."; // Guardar el mensaje de que se agregará una personas en el estado-agregar-positivo
  } else if (preguntarPersonas === 0) {
    // Mensaje si se ingresa cero
    estadoAgregarNegativo = "No agregaste personas";
    estadoAgregarPositivo = "";

    pStatusAgN.innerText = estadoAgregarNegativo;
    pStatusAgP.innerText = estadoAgregarPositivo;

    btnAgregar.disabled = true; // Deshabilitar el botón "Agregar" si el valor es inválido
  } else {
    estadoAgregarNegativo = "No dijiste cuantas personas querias agregar!";
    estadoAgregarPositivo = "";

    pStatusAgN.innerText = estadoAgregarNegativo;
    pStatusAgP.innerText = estadoAgregarPositivo;

    btnAgregar.disabled = true; // Deshabilitar el botón "Agregar" si el valor es inválido
    // btnMostrarP.disabled = true; // Mantener el botón "Mostrar" deshabilitado
  }
}
// Asociar la función checkPreguntar() al evento de clic del botón "Siguiente"
btnCheck.addEventListener("click", checkPreguntar);

// Asociar la función checkPreguntar() al evento de clic del botón "Siguiente"
function mostrarPersonas() {
  // Limpiar el contenedor de personas antes de mostrar la lista
  const personasContainer = document.getElementById("personasContainer");
  personasContainer.innerHTML = "";

  // Iterar sobre el array "personas" y crear elementos para cada persona
  personas.forEach((persona, index) => {
    // Crear un nuevo elemento "div" para cada persona
    const personaDiv = document.createElement("div");
    personaDiv.className = "persona";

    // Crear el contenido HTML para la persona con sus datos
    personaDiv.innerHTML = `
            <p style="font-weight: bold;"">Persona ${index + 1}</p>
            <p>Nombre: ${persona.nombre}</p>
            <p>Edad: ${persona.edad}</p>
            <p>Peso: ${persona.peso}</p>
            <hr>
        `;

    // Agregar el "div" de la persona al contenedor principal
    personasContainer.appendChild(personaDiv);
    btnMostrarP.disabled = true;

    // Mensaje personalizado dependiendo de si se agrega una sola persona o si se agregaran mas
    if (preguntarPersonas > 1) {
      estadoAgregarPositivo = "Agrega a la siguiente persona.";
      pStatusAgP.innerText = estadoAgregarPositivo;
    } else {
      estadoAgregarPositivo = "Persona agregada correctamente.";
      pStatusAgP.innerText = estadoAgregarPositivo;
    }
  });
}
// Asociar la función mostrarPersonas() al evento de clic del botón "Mostrar"
btnMostrarP.addEventListener("click", mostrarPersonas);
