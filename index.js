const notas = [85, 67, 90, 45, 78, 82, 59, 100]
//contadores
let qaprovados = 0
let qreprobados = 0

for(let i = 0; i < notas.length; i++){

    if(notas[i] >= 70){
        //console.log(notas[0])
        qaprovados++
        //console.log(qaprovados)

    }else{
        //console.log(lol)
        qreprobados++
        //console.log(qreprobados)
    }

}
    console.log("La cantidad de estudiantes aprobados es: " + qaprovados)
    console.log("La cantidad de estudiantes reprobados es: " + qreprobados)
