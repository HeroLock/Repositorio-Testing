// PRUEBA DE ESTRUCTURAS EN JAVASCRIPT

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

// comprobarEstudiantes();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Objetos
let trabajador = {
    nombre : "Engell",
    edad : 18,
    masculino: true,
}
//console.log(Persona)
trabajador.musicaFavorita = "Rap" // Crear atributos de un objeto fuera de el

let trabajador2 = {
    nombre : "Gabriela",
    edad : 17,
    masculino: false,
}
//console.log(Persona2)
trabajador2.edad = 22 //Modificar un atributo ya existente

let arregloDeTrabajadores = [trabajador, trabajador2]

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// Trabajo Propio

let txtPrPe = document.getElementById("prPe")
let btnCheck = document.getElementById("chequeo")
let pStatusAgN = document.getElementById("estadoAgregarNegativo")
let txtPrNm = document.getElementById("prNm")
let txtPrEd = document.getElementById("prEd")
let txtPrPs = document.getElementById("prPs")
let pStatusAgP = document.getElementById("estadoAgregarPositivo")


let personas = []
let estadoAgregarPositivo 
let estadoAgregarNegativo 

function agregarPersonas(){
    pStatusAgN.innerText = estadoAgregarNegativo

personas.push({
    // nombre : prompt("¿Cuál es su nombre?"),
    // edad : prompt("¿Cuál es su edad?"),
    // peso : prompt("¿Cuál es su peso?"),
    nombre : txtPrNm.value,
    edad : txtPrEd.value,
    peso : txtPrPs.value,
})
    //alert(estadoAgregar);
    pStatusAgP.innerText = estadoAgregarPositivo
}

    // let preguntarPersonas = parseInt(prompt("Cuantas personas quieres agregar?", 10))
    let preguntarPersonas

    function checkPreguntar(){

        preguntarPersonas = parseInt(txtPrPe.value, 10)

    if(!isNaN(preguntarPersonas) && preguntarPersonas > 0){
        for(let i = 0; i < preguntarPersonas; i++){
            estadoAgregarNegativo = "OK"
            estadoAgregarPositivo = "Se va agregar a esta persona"
            agregarPersonas()
        }
    }else if(preguntarPersonas === 0){
        estadoAgregarNegativo = "No agregaste personas"
        estadoAgregarPositivo = ""
        //alert(estadoAgregar);
        pStatusAgN.innerText = estadoAgregarNegativo
        pStatusAgP.innerText = estadoAgregarPositivo
    }else{
        estadoAgregar = "No dijiste cuantas personas querias agregar!"
        estadoAgregarPositivo = ""
        //alert(estadoAgregar);
        pStatusAgN.innerText = estadoAgregarNegativo
        pStatusAgP.innerText = estadoAgregarPositivo
    }
    }

    btnCheck.addEventListener("click", checkPreguntar);
    checkPreguntar()
    

    let numPersonas = personas.length

    for(let i = 0; i < numPersonas; i++){
        let name = personas[i].nombre
        let age = personas[i].edad
        let weigth = personas[i].peso
        let nreal = i + 1

        console.log("===== Persona " + nreal)
        console.log("Nombre: " + name)
        console.log("Edad: " + age)
        console.log("Peso: " + weigth)
        console.log("====================================================")
    }