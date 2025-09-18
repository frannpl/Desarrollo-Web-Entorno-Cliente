function saludar(){
    var edad = window.prompt("Introduce tu edad")
       if(edad >= 18){
        console.log("Eres mayor de edad");
        }else{
        console.log("Eres menor de edad");
        }
}

function pintar_ruta(){
    console.log("El acesso a la ruta C:\\\\usuario\\tarda 1'23\", algo considerado \"lento\" en la actualidad. ");
}

function pintar_ruta_v2(){
    var substrng1 = "El acesso a la ruta C:\\\\usuario\\tarda 1'23\",algo";
    var substrng2 = " considerado \"lento\" en la actualidad ";
    console.log(substrng1 + substrng2);

}



// Ejercicio 4
function muestra_potencia(){
    var num = 2*Math.pow(10,-9);
    console.log("El valor es " + num);
}

// Ejercicio 5
function muestra_n_distintas_bases(num){
    // Transforma num a binario
    var numDecimal = num.toString(2);
    console.log("El número " + num + " en binario es: " + numDecimal);
} 

// Ejercicio 6 Realiza una división de cualquier numero entre 0
// y opera con el resultado (por ej sumale 23 y muestra el resultado)

function dividir_por_cero(num){
    var resultado = num / 0;
    console.log("El resultado de dividir " + num + " entre 0 es: " + resultado);
    var suma = resultado + 23;
    console.log("Si a ese resultado le sumamos "+ num +" obtenemos: " + suma);
}


//Ejercicio 7 Fuerza un NaN 
function fuerza_NaN(){

    var resultado = 0/0;
    console.log("El resultado de dividir 0 entre 0 es:" + resultado);

}

// Ejercicio 8 Muestra por pantalla el máximo valor representable por un tipo Number, sumale 100
//y vuelve a mostrarlo. ¿Ha cambiado su valor? Realiza lo mismo ahora asegurándote
//que encuentras una solución adecuada para ello.

function max_valor(){

    var max = Number.MAX_VALUE;
    BigInt(Number.MAX_VALUE);
    console.log("El valor máximo representable por un tipo Number es: " + max);
    var suma = max + 100;
    console.log("Si a ese valor le sumamos 100 obtenemos: " + suma);
    console.log("El valor no ha cambiado porque es demasiado grande para representarse con un tipo Number.");
}

// Ejercicio 10
function check_ambito_variable(){
    let prueba = 5;
    console.log("La variable vale :" + prueba);

    {
        let prueba2 = 10;
        console.log("Insisto. La variable prueba tiene como valor " + prueba + " tambien dentro del bloque anidado");
        console.log("Ademas, el bloque interior alberga la variable prueba2 que vale " + prueba2);
    }
}

// Ejercicio 11 Busca como crear e inicializar un array de datos en JavaScript
// y muestra sus valores en formato tabla por consola.
function definir_array(){
    let array = ["Alberto", "Beatriz", "Carlos", "Diana"];

    console.table(array);
}

// Ejercicio 12 Realiza un bucle que de 100 vueltas que simplemente incremente un valor de diez
//en diez. Realiza un temporizador que calcule el tiempo que ha tardado en recorrer el
//bucle completamente
function contar_y_temporizar(){

let valor = 0;
let initTime = new Date();

    for(let i = 0; i < 1000; i++){
        valor += 10;
    }
    
    let endTime = new Date();

    console.log("Valor :" + valor);
    console.log("El algoritmo ha tardado " + (endTime - initTime));
}

