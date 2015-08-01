function obtenerSuma(obj1){

	var claves=Object.keys(obj1);
	var cant=0;
	for (var i = 0; i < claves.length; i++) {
		

		cant= cant +obj1[claves[i]];
	};
	return cant;
}





var obj={cuenta:1, cuenta2:3,cuenta3:5000};
console.log(obtenerSuma(obj));


//some es para que te devuelva valor
function obtenerSuma(obj){
	var corto=keys some(function(curElem){
		if(typeof obj[curElem]==='number'){
			resultado+=obj[curElem];
			return false;
		}else{
			return true;
		}
	});

	if(corto){
		throw new Error('lalalalala');
	}

}




