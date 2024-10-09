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
    // console.log("La cantidad de estudiantes aprobados es: " + qaprobados)
    // console.log("La cantidad de estudiantes reprobados es: " + qreprobados)