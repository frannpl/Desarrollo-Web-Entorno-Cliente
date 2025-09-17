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