// PRUEBA DE ESTRUCTURAS EN JAVASCRIPT

//funciones, for, if
// function comprobarEstudiantes(){

// let estudiantes = ['Juan', 'Luis', 'Carlos', 'Engell', 'Gabriel', 'Alejandro', 'Edward', 'Joseph']
// let notas = [85, 67, 90, 45, 78, 82, 59, 100]
// //contadores
// let qaprobados = 0
// let qreprobados = 0
// for(let i = 0; i < notas.length; i++){
//     if(notas[i] >= 70){
//         //console.log(notas[0])
//         qaprobados++
//         console.log("El estudiante: " + estudiantes[i] + " esta aprobado")
//         console.log("Su nota es : " + notas[i])
//     }else{
//         //console.log(lol)
//         qreprobados++
//         console.log("El estudiante: " + estudiantes[i] + " esta reprobado")
//         console.log("Su nota es : " + notas[i])
//     }
// }
//     console.log("La cantidad de estudiantes aprobados es: " + qaprobados)
//     console.log("La cantidad de estudiantes reprobados es: " + qreprobados)
// }

// comprobarEstudiantes();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//objetos
// let Persona = {
//     nombre : "Engell",
//     edad : 18,
//     masculino: true,
// }
// console.log(Persona)
// Persona.musicaFavorita = "Rap" // Crear atributos de un objeto fuera de el

// let Persona2 = {
//     nombre : "Gabriela",
//     edad : 17,
//     masculino: false,
// }
// console.log(Persona2)
// Persona2.edad = 22 //Modificar un atributo ya existente

// let arregloDePersonas = [Persona, Persona2]

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
let personas = []

function agregarPersonas(){

personas.push({
    nombre : prompt("¿Cuál es su nombre?"),
    edad : prompt("¿Cuál es su edad?"),
    peso : prompt("¿Cuál es su peso?"),
})
    alert("Agregaste a esta persona");
}


    let preguntarPersonas = parseInt(prompt("Cuantas personas quieres agregar?"))
    

    if(!isNaN(preguntarPersonas && preguntarPersonas > 0)){
        for(let i = 0; i < preguntarPersonas; i++){
            agregarPersonas()
        }
    }else if(preguntarPersonas == 0){
        alert("No agregaste personas")
    }else{
        alert("No dijiste cuantas personas querias agregar!")
    }

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