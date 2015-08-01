function stringReverse(){
 var texto=prompt("ingrese un cadena de carcteres");
 var  longCadena = texto.length;
 var cadenafinal="";


if(texto.length>0){
	for ( i = longCadena-1; i >= 0; i--) {
		cadenafinal=cadenafinal+texto[i];
		
	};
}
console.log(cadenafinal);

}

function reverseArray(){

var number;
var my_array = []	;
var my_array_reverse= [];

my_array.push (1,2,3,4,5, 6, 7,8,9);

number = my_array.pop();

while (number != undefined)
   {
   	my_array_reverse.push(number);  
   number = my_array.pop();
   }

 console.log(my_array_reverse);
}