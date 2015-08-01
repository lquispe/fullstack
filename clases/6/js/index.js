function prueba(){

	console.log("mensaje");
}

function pruebaM(mensaje){

	if (!mensaje)//  Boolean(!mensaje);
	console.log(variable);
}


function buscarPares(arr){
	var res=[];



	if(!Array.isArray(arr)){
		console.log("no es array");
		return;
	}

	for (var i = arr.length - 1; i >= 0; i--) {
		if((arr[i]%2)===0){
			res.push(arr[i]);
		}

	};

	return res;//si no sta definido el valor de retorno es undefined
	
	
}

function evalPar(){
	console.log(buscarPares([1,3,4,6,8,9]));
	console.log(buscarPares(true));
}


function earlyReturnExample(arr,nbr){

	if(!Array.isArray(arr)){
		console.log("no es array");
		return;
	}

	if(typeof nbr!=="number"){
		return;
	}

}

function earlyReturnExample(arr,nbr){

	if(!Array.isArray(arr)){
		console.log("no es array");
		throw "error1"; //abortando el error
	}

	if(typeof nbr!=="number"){
		throw "erro2";
	}

}
function earlyReturnExample(arr,nbr){

	if(!Array.isArray(arr)){
		console.log("no es array");
		throw  new Error("Expected to be  an array, " + 
			"but  instead got:" + typeof); //abortando el error// de esta manera m´as informacion acerca del error
	}

	if(typeof nbr!=="number"){
		throw "erro2";//solo muestra este valor
	}

}



var res;

try{
	res=earlyReturnExample();


}catch(e){
	console.log(e message)
//crear  array de dos numeros



//////

function f1(){
	console log(v1);
	var v1;
}
//hoisting no importa en que lugar defina las variables busca todos los statement de var y los mueve arriba
//declaracion  y no las inicializacion empieza a tener un valor desde ahi hasta abajo, hasta la misma funcion

function f1(){
	console log(v1);
	var v1;
}

function f1(){
	console.log("V2")
}

function  f1(){
	console.log("v",v);
	console.log
	var v1=2;
	function f2(){
		V1=10;
		var v2=10;
		console.log("v",v);
		console.log("v1",v1);
		}



	F2
	}
}

///


[3,5,9] for each(function (curEl,curIndex,arr)) aplica la funcion por cada elemento del array hacer un for hacer algo  for(var i=0...){{function hacer algo}}



{
	console.log(curEl,curIndex, arr);
}

REalizar una funcion que recibe un array y una funcion de filtrado mediante el uso explicito de
for each contabilice los elementos
del array pasado que al aplicarle la funcion recibida por parametro al elemento actual del forEach esta devuelva true