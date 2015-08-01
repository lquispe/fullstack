/*

var str1="Pepe";
var firstchar=str1[0];
var consonante="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"

var longstr=str1.length;

for (i = 0; i < consonante.length; i++) { 
	 if(str1[0]===consonante[i]){
	 	console.log("empieza consonant");
	 	alert("empieza consonante");
	 	break;
	 }
};

*/

/* Hacer un programa que obtenga una cadena de texto e imprima por consola la primer vocal
var texto=prompt("Ingrese una cadena de texto");

var vocal="aeiouAEIOU";
var i=0;
var j=0;

while (i<(texto.length){
	j=0;
	while(j<vocal.length){
		console.log(texto[i]);
		console.log(vocal[j]);


		if(texto[i]===vocal[j]){

			console.log("vocal");
			break;
			
		}else{
			console.log("no es vocal");
		}

	j++;
	}
	i++;
}
*/
/* hacer un programa que mediante un prompt obtenga una cadena de texto y luego imprima por consola la cantidad de vocales de la cadena de texto

var texto=prompt("Ingrese una cadena de texto");

var vocal="aeiouAEIOU";
var i=0;
var j=0;
var count=0;
while (i<texto.length){
	j=0;
	while(j<vocal.length){	

		if(texto[i]===vocal[j]){
			count++;						
			
		}else{
			console.log("no es vocal");
		}

	j++;
	}
	i++;
}
console.log("cantidad de vocales"+count);
*/
/*dada una cadena de caracteres hacer un programa que cuente todos los caracteres que son de tipo numero
mayores a un numero ingresado mediante prompt

var texto=prompt("Ingrese una cadena de texto");
var num=prompt("Ingrese una numero");
countnumber=0;
var i=0;

while (i<texto.length){
	
	if(!isNaN(Number(texto[i])) && Number(texto[i])>num){
		countnumber++;
	}
	
	i++;
}
console.log("cantidad de numeros"+ countnumber +"mayor a "+ num );
*/
/* Mediante  2 prompt recibir dos cadenas de texto,e imprimir las posiciones en la cual ocurre la 2 en la primera, o imprimir 
"no se encontro la cadena en caso contrario se pider resolucion del uso de indexOf"

/*
texto.toUpperCase
texto.toLowerase
texto.indexOf
texto.lastIndexOf
.length
substr
substring*/
/*
var texto=prompt("Ingrese una cadena de texto");
var texto2=prompt("Ingrese una cadena de segundo texto");
var n=texto.indexOf(texto2);
if(n>0){

	console.log("posicion" +n);
}else{
	console.log("no se encontro la cadena");
}
*/
/*
var texto=prompt("Ingrese una cadena de texto");
var texto2=prompt("Ingrese una cadena a buscar");
var indicador=prompt("inicio o final");
var indiceIni=texto.indexOf(texto2);
var indicefinal=texto.lastIndexOf(texto2);
var texfincadena=texto.substring(indicefinal, texto.length);

if(indicador==="inicio"){

	if(n===0)|| (texto2===texfincadena){

		console.log("empieza o termina con la cadena");
	}else{
		console.log("no se encontro la cadena");
	}
}else{
	if(texto2===texfincadena){

		console.log("termina con la cadena");
	}

}

*/
/*ingresar  valores mediante n prompts valores a un array  hasta ingresar la palabra basta  */
/*
 var texto=prompt("ingrese un cadena de carcteres");
 var  longCadena = texto.length;
 var cadenafinal="";


if(texto.length>0){
	for ( i = longCadena-1; i >= 0; i--) {
		cadenafinal=cadenafinal+texto[i];
		
	};
}
console.log(cadenafinal);
*/

var number;
var my_array = new Array();
var my_array_reverse= new Array();

my_array.push (1,2,3,4,5, 6, 7,8,9);

number = my_array.pop();

while (number != undefined)
   {
   	my_array_reverse.push(number);  
   number = my_array.pop();
   }

 console.log(my_array_reverse);
o
