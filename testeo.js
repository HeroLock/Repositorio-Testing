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

let personas = [
    {
        nombre : prompt("¿Cuál es tu nombre?"),
        edad : prompt("¿Cuál es tu edad?"),
        peso : prompt("¿Cuál es tu peso?"),
    },{
        nombre : prompt("¿Cuál es tu nombre?"),
        edad : prompt("¿Cuál es tu edad?"),
        peso : prompt("¿Cuál es tu peso?"),
    }
]
    let name = personas.nombre
    let age = personas.edad
    let weigth = personas.peso

    for(i = 0, i < personas.length, i++){
        console.log("Nombre: " + name)
        console.log("Edad: " + age)
        console.log("Peso: " + weigth)
        console.log("====================================================")
    }


// let nombre = prompt("¿Cuál es tu nombre?");
// let edad = prompt("¿Cuál es tu edad?");
// let peso = prompt("¿Cuál es tu peso?");

