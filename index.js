// Trabajo Propio -- Engell Vado

let txtPrPe = document.getElementById("prPe")
let btnCheck = document.getElementById("chequeo")
let pStatusAgN = document.getElementById("estadoAgregarNegativo")
let txtPrNm = document.getElementById("prNm")
let txtPrEd = document.getElementById("prEd")
let txtPrPs = document.getElementById("prPs")
let btnAgregar = document.getElementById("agrPersonas")
let pStatusAgP = document.getElementById("estadoAgregarPositivo")
let btnMostrarP = document.getElementById("mostrarPersonas")
let pNumeroPersonas = document.getElementById("numPerson")
let pNombrePersonas = document.getElementById("nmPersonas")
let pEdadPersonas = document.getElementById("edPersonas")
let pPesoPersonas = document.getElementById("psPersonas")

btnAgregar.disabled = true; // Deshabilitar el botón inicialmente

let personas = []
let estadoAgregarPositivo = ""
let estadoAgregarNegativo = ""
let preguntarPersonas 
let contadorPersonasAgregadas = 0;

function agregarPersonas(){

 // Verificar si se pueden agregar más personas
 if (contadorPersonasAgregadas < preguntarPersonas) {
    if (txtPrNm.value.trim() === "" || isNaN(parseInt(txtPrEd.value, 10)) || isNaN(parseFloat(txtPrPs.value))){
        pStatusAgN.innerText = "Por favor, ingresa datos válidos para nombre, edad y peso.";
        return;
    }

    personas.push({
        nombre : txtPrNm.value,
        edad : parseInt(txtPrEd.value, 10),
        peso : parseFloat(txtPrPs.value),
    });

    estadoAgregarPositivo = "Persona agregada correctamente.";
    pStatusAgP.innerText = estadoAgregarPositivo;

    // Incrementar el contador de personas agregadas
    contadorPersonasAgregadas++;

    // Limpiar los campos de texto
    txtPrNm.value = "";
    txtPrEd.value = "";
    txtPrPs.value = "";

} else {
    pStatusAgN.innerText = "Ya has agregado el número máximo de personas.";
    btnAgregar.disabled = true; // Deshabilitar el botón para que no se puedan agregar más personas
}
}
btnAgregar.addEventListener("click", agregarPersonas);



function checkPreguntar(){

    preguntarPersonas = parseInt(txtPrPe.value, 10)

    if(!isNaN(preguntarPersonas) && preguntarPersonas > 0){
            if(preguntarPersonas > 1){
                estadoAgregarNegativo = "Vas a agregar: " + preguntarPersonas + " personas."
            }else{
                estadoAgregarNegativo = "Vas a agregar: " + preguntarPersonas + " persona."
            }

            btnAgregar.disabled = false; // Habilitar el botón "Agregar"
            contadorPersonasAgregadas = 0; // Reiniciar el contador por si el usuario cambia el número

            pStatusAgN.innerText = estadoAgregarNegativo
            estadoAgregarPositivo = "Se va agregar a esta persona."

    }else if(preguntarPersonas === 0){
        estadoAgregarNegativo = "No agregaste personas"
        estadoAgregarPositivo = ""

        pStatusAgN.innerText = estadoAgregarNegativo
        pStatusAgP.innerText = estadoAgregarPositivo

        btnAgregar.disabled = true; // Mantener el botón "Agregar" deshabilitado
        btnMostrarP.disabled = true; // Mantener el botón "Mostrar" deshabilitado
    }else{
        estadoAgregarNegativo = "No dijiste cuantas personas querias agregar!"
        estadoAgregarPositivo = ""

        pStatusAgN.innerText = estadoAgregarNegativo
        pStatusAgP.innerText = estadoAgregarPositivo

        btnAgregar.disabled = true; // Mantener el botón "Agregar" deshabilitado
        btnMostrarP.disabled = true; // Mantener el botón "Mostrar" deshabilitado
    }
}
    
btnCheck.addEventListener("click", checkPreguntar);

    
function mostrarPersonas(){   

    // Limpiar el contenedor antes de agregar nuevas personas
    const personasContainer = document.getElementById("personasContainer");
    personasContainer.innerHTML = "";

    // Iterar sobre el array de personas y agregar cada una al contenedor
    personas.forEach((persona, index) => {
        // Crear un nuevo elemento div para cada persona
        const personaDiv = document.createElement("div");
        personaDiv.className = "persona";

        // Crear el contenido HTML para esta persona
        personaDiv.innerHTML = `
            <p>Persona ${index + 1}</p>
            <p>Nombre: ${persona.nombre}</p>
            <p>Edad: ${persona.edad}</p>
            <p>Peso: ${persona.peso}</p>
            <hr>
        `;

        // Agregar el div de la persona al contenedor principal
        personasContainer.appendChild(personaDiv);

})
}
btnMostrarP.addEventListener("click", mostrarPersonas);