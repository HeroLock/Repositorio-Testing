// ------------------------------------------------------------ PRUEBA DE ESTRUCTURAS EN JAVASCRIPT
// funciones, for, if
function comprobarEstudiantes(){

let estudiantes = ['Juan', 'Luis', 'Carlos', 'Engell', 'Gabriel', 'Alejandro', 'Edward', 'Joseph']
let notas = [85, 67, 90, 45, 78, 82, 59, 100]
//contadores
let qaprobados = 0
let qreprobados = 0
for(let i = 0; i < notas.length; i++){
    if(notas[i] >= 70){
        //console.log(notas[0])
        qaprobados++
        console.log("El estudiante: " + estudiantes[i] + " esta aprobado")
        console.log("Su nota es : " + notas[i])
    }else{
        //console.log(lol)
        qreprobados++
        console.log("El estudiante: " + estudiantes[i] + " esta reprobado")
        console.log("Su nota es : " + notas[i])
    }
}
    console.log("La cantidad de estudiantes aprobados es: " + qaprobados)
    console.log("La cantidad de estudiantes reprobados es: " + qreprobados)
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// Objetos
let trabajador = {
    nombre : "Engell",
    edad : 18,
    masculino: true,
}
//console.log(trabajador)
trabajador.musicaFavorita = "Rap" // Crear atributos de un objeto fuera de el

let trabajador2 = {
    nombre : "Gabriela",
    edad : 17,
    masculino: false,
}
//console.log(trabajador2)
trabajador2.edad = 22 //Modificar un atributo ya existente

let arregloDeTrabajadores = [trabajador, trabajador2]

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// Objetos

const jsonString = '{ "name": "Juan", "age": 30 }';

try {
    // Intentamos parsear el JSON
    const data = JSON.parse(jsonString);
    console.log(data.name); // Accedemos a la propiedad "name"
} catch (error) {
    // Si hay un error en la conversión, capturamos y manejamos el error
    console.error("El JSON no es válido:", error.message);
} finally {
    console.log("Finalizó el intento de parsear el JSON.");
}

// // ----------------------------------------------------------------------------------------------------------------------------------------------------------
// // Trabajo Propio

// let txtPrPe = document.getElementById("prPe")
// let btnCheck = document.getElementById("chequeo")
// let pStatusAgN = document.getElementById("estadoAgregarNegativo")
// let txtPrNm = document.getElementById("prNm")
// let txtPrEd = document.getElementById("prEd")
// let txtPrPs = document.getElementById("prPs")
// let btnAgregar = document.getElementById("agrPersonas")
// let pStatusAgP = document.getElementById("estadoAgregarPositivo")
// let btnMostrarP = document.getElementById("mostrarPersonas")


// let personas = []
// let estadoAgregarPositivo = ""
// let estadoAgregarNegativo = ""
// let preguntarPersonas // let preguntarPersonas = parseInt(prompt("Cuantas personas quieres agregar?", 10))

// function agregarPersonas(){

// personas.push({
//     // nombre : prompt("¿Cuál es su nombre?"),
//     // edad : prompt("¿Cuál es su edad?"),
//     // peso : prompt("¿Cuál es su peso?"),
//     nombre : txtPrNm.value,
//     edad : txtPrEd.value,
//     peso : txtPrPs.value,
// })
//     //alert(estadoAgregar);
//     pStatusAgP.innerText = estadoAgregarPositivo
// }
// btnAgregar.addEventListener("click", agregarPersonas);
// agregarPersonas()  

// function checkPreguntar(){

//     preguntarPersonas = parseInt(txtPrPe.value, 10)

//     if(!isNaN(preguntarPersonas) && preguntarPersonas > 0){
//         for(let i = 0; i < preguntarPersonas; i++){
//             estadoAgregarNegativo = "OK"
//             pStatusAgN.innerText = estadoAgregarNegativo
//             estadoAgregarPositivo = "Se va agregar a esta persona"
//         }
//     }else if(preguntarPersonas === 0){
//         estadoAgregarNegativo = "No agregaste personas"
//         estadoAgregarPositivo = ""
//         //alert(estadoAgregar);
//         pStatusAgN.innerText = estadoAgregarNegativo
//         pStatusAgP.innerText = estadoAgregarPositivo
//     }else{
//         estadoAgregarNegativo = "No dijiste cuantas personas querias agregar!"
//         estadoAgregarPositivo = ""
//         //alert(estadoAgregar);
//         pStatusAgN.innerText = estadoAgregarNegativo
//         pStatusAgP.innerText = estadoAgregarPositivo
//     }
// }
    
// btnCheck.addEventListener("click", checkPreguntar);
// checkPreguntar()
    
// function mostrarPersonas(){   
//     let numPersonas = personas.length

//     for(let i = 0; i < numPersonas; i++){
//         let name = personas[i].nombre
//         let age = personas[i].edad
//         let weigth = personas[i].peso
//         let nreal = i + 1

//         alert("esto no funciona")
//         console.log("===== Persona " + nreal)
//         console.log("Nombre: " + name)
//         console.log("Edad: " + age)
//         console.log("Peso: " + weigth)
//         console.log("====================================================")
//     }
// }
// btnMostrarP.addEventListener("click", mostrarPersonas);