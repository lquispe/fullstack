function multiplicacion(num1, num2) {

    return num1 * num2;

} 



function evaluaOper() {
    //lista de argumentos
    var listNum = Array.prototype.slice.call(arguments, 0);
    var func = listNum.shift(); //obtengo a funcion
    //inicializo el array resultado
    var rdo = [];
    var ind1 = 0;
    var ind2 = 0;
    //validacion si es funcion
    if (typeof func!=='function'){
       throw  new Error("No es una function el primer argumento");
    }
    //validacion para los parametros de la funcion
    if(listNum.length===0){
        throw  new Error("No hay parametros para realizar la funcion");
    }
    //recorro el array de numeros
    for (var i = 0; i < Math.floor(listNum.length/2); i++) {
        ind1 = i * 2;//primer numero para multiplicar
        ind2 = ind1 + 1;//siguiente numero para multiplicar
        rdo.push(func(listNum[ind1], listNum[ind2]));

    }

    // validar rdo
    console.log("El resultado de la multiplicacion del actual y el siguiente " + rdo);
}



function OperacionNum(){
    var res;
    //acer con while
    try{
        res=evaluaOper(multiplicacion,1,2,3);

    }catch(e){
        console.log(e.message);
    }
}