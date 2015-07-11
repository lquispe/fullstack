//alert("ESTE ALERT SE CORRE EN ETIQUETA SCRIPT");

var numero;
numeroPrompt=prompt("Ingrese un numero");



if(numeroPrompt.length>0){

	if((numeroPrompt%2)===0){
		alert("El numero "+numero+" es par");	
	}else{
		alert("El numero "+numero+" es impar");	
	}
}else{
	alert("no ingresa valor");
}

//los numeros imprimir hasta 1000 el numero x es par el numero x es impar