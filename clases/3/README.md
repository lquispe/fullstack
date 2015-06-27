border se puede especificar todo en una misma linea
2px solid black


chrome inspect
inspect network ver que archivos se bajaron el index.html
main.css
#css
browser dispone estilos que aplica el browser por default

para agregar estilo + en solapa styles

computed todos los estilos para ese elemento

si quiero que realemnte el box sea de 50 hay que restar 14  seria 36

property

box model en inspect chrome


box size
valores con medidas valores posibles 
box sizing border box achica el contenido tome especificamente el tamaño que le decis, sacrifica el content

canisue.com box-sizing  dice que browser lo soporta css ver desde cuando empieza el soporte se empieza a implementar

se border-box

usar en todos lados selector *

box-sizing nd buscar inherited no se hereda (pagina de mozilla)
solo se puede propagar con *

caniuse.com


property position posicionar fuera de la posicion por defecto es una de las properties con valores posibles
position static es la posicion por defecto (browser)

position relative donde el browser lo posiciona lo defaso, se usa las properties top  left no se usan los cuatro desde la posicion static

position:relative

position-absolute-ex{
	position: relative;
}
''
.position-absolute-ex > div{/*a los hijos*/

	position: absolute; va arriba hasta que encuentra un position relative
}

relative es relativo al posicionamiento default
absoluto busca el primer parent con distinto static es el default puede ser otro con position relative con position static

fixe es parecida a absoluto toma de referencia al browser
position fix boton 0 queda abajo de todo el browser

position fixed

body padding margin div tenga todo  contenedor sino un div 
 
ordenar las properties alfabeticamente sort line ctrl+shift+p sort line-- css inter reglas del css

el padre el alto tiene 150px con position fixed toma la altura del navegador de la ventana

responsive width se achique con respecto a la pantalla el el alto height porcentual esta mal no se usa ponerlo algo fijo y el resto del contenido se ajuste a la pantalla
---------t
usar position no es recomendable  
#float saca del flujo del eleme

nto hace que flote a la izquierda o a la derecha flote con respecto del padre dentro del padre float left o righ
cuando el contenido sea grande el minheight

---sublime linter html tydi errores cometieron en html

cuando flota elemento saca height 0 px no se corta el flotado  no se da cuenta el alto del elemento clear eliminar no se da cuenta el height

clear both inherit heredar de lo de arriba both corta el flotado de los dos lados, left solo izq, right 

y con esto se mide el alto con height


hack clear fix  para obtener el hight del content div arregla el problema de no mostrar height en el parent
parent si tiene clearfix




chrome  border del body margen por default


necesitan tener el position para posicionarlo


los margenes no sean negativos ir a position, sino con float y display inline block, 
inline block dos cosas se peguen con display inline, con margin pero fijarlo no esta bueno
float right menos unidades mejora

display inline no se puede aplicar height----- con float tiene height  es como si fuera inline

flotar todo para un mismo sentido --display valor inline-block se comporta inline pero con el height

display list item, block inline

inline-block 

display inline  bullet los elimina display none
visibility hidden se oculta pero ocupa el espacio
display none no ocupa espacio espacio visualmente inline block toma el hight

centrar verticalment flexbox en el contenedor en el elemento interno cosas de flexbox para posicionar elementos

dentro de un contenedor elemento inlineblock vertical align

centrado dinamico position

vertical firefox centrado vertical imagen mas abajo o arriba del elemento inline el 100 % height

hacks

en el css ::before se activa en el html para verlo esta chrome

se alienen a la mitad  vertical align midle display inline block 
display inline block espacio de 2px white space sale el espacio centrado vertical display inline block
css before mdn canisu pseudo element css-trick

---flex
position absolute con flex
reset css
