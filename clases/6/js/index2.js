/*
[3,5,9] for each(function (curEl,curIndex,arr)) aplica la funcion por cada elemento del array hacer un for hacer algo  for(var i=0...){{function hacer algo}}



{
	console.log(curEl,curIndex, arr);
}

REalizar una funcion que recibe un array y una funcion de filtrado mediante el uso explicito de
for each contabilice los elementos
del array pasado que al aplicarle la funcion recibida por parametro al elemento actual del forEach esta devuelva true
*/


function filtrado(curEl){

	if(curEl===0){
		return true;
	}
	return false;
}



if (paramFunc && (typeof paramFunc == "function")) {
      paramFunc();   
   }
function evaluado( filtrado,arr){
	if(filtrado &&)

	var cont=0;
	arr.forEach(function(curEl){
		if((curEl%2)===0){
		cont++;
	}
	});
	console.log(cont);
}


evaluado(filtrado,[1,2,3,4]);

//devuelve true o false