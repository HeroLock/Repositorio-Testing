// Definicion de los elementos que hicimos en html
const txtOp1 = document.getElementById("op1")
const txtOpO = document.getElementById("opO")
const txtOp2 = document.getElementById("op2")
const btnCalc = document.getElementById("calc")
const pResult = document.getElementById("result")

// Funcion relacionada con el botonHTML de calcular
function Calcular(){
    const op = txtOpO.value // Se saca el valor del operador
    const op1 = parseFloat(txtOp1.value) // Se pasa el valor1 que da el usuario a numero
    const op2 = parseFloat(txtOp2.value) // Se pasa el valor2 que da el usuario a numero
    
    // Se comprueba con el if si el operador que dio el usuario es correcto (que sea un +,-,*,/)
    //Se comprueba ademas que los valores que dio el usuario sean numeros, "isNaN = isNotaNumber" + "! = invierte el significado del isNaN"
    if( (op == "+" || op == "-" || op == "*" || op == "/") && !isNaN(op1) && !isNaN(op2) ){
        // Se usa el switch para revisar cual operador se uso
        switch(op){
            case "+":
            result = op1 + op2 
            break
            case "-":
            result = op1 - op2 
            break
            case "*":
            result = op1 * op2 
            break
            case "/":
            result = op1 / op2 
            break
        }
        pResult.style= "color: green" // Asigna un color al resultado que se muestra en pantalla
        pResult.innerText = "Es igual a " + result // Muestra el resultado con un mensaje adicional
    }else{
        pResult.style= "color: red" // Asignar un color al mensaje que se muestra en pantalla
        pResult.innerText = "No pusiste un termino valido capo" // Muestra un mensaje que le dice al usuario que no digito un valor u operador posible
    }
    

}

Calcular() // Se manda a llamar a la funcion para que se pueda ejecutar

// Codigo de HTML
// <!-- Calcu del Index ========================================================================================================== -->
// <!-- <form method="dialog"> forma de hacer que el ENTER accione el boton de calcular -->
//     <!-- <input type="text"  id="op1" placeholder="Operador 1"> primer valor -->
//     <!-- <input type="text"  id="opO" placeholder="+, -, *, /"> definidor de la operacion -->
//     <!-- <input type="text"  id="op2" placeholder="Operador 2"> segundo valor -->
//     <!-- <input type="submit" id="calc" value="Calcular" onclick=Calcular()> boton de calcular -->
// <!-- </form> -->
//     <!-- <p id="result"></p> resultado a mostrar  -->