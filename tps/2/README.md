El objetivo de este TP es afianzar los conocimientos de [GIT](https://git-scm.com/doc) y el manejo de [Github](https://help.github.com/)​. Para esto se pide que se realice lo siguiente, y se recomienda el [uso de consola](http://www.ubuntu-guia.com/2009/07/comandos-basicos-de-linux.html) por sobre el uso de alguna herramienta gráfica que permita hacer lo mismo.

Recuerden que la mayoría de los comandos al ejecutarlos con la opción **-h**
, suelen darnos información de su uso, y que en el caso del comando **git**
, pueden consultar la ayuda de este ejecutando: **git help**
 (ayuda general), o **git help comando** (ayuda particular del comando). 
 ![Image of Yaktocat](http://www.markus-gattol.name/misc/mm/si/content/git_everthing_is_local.png)

0. En el repositorio del curso, crear un directorio (carpeta), dentro de **tps**
, llamado 2 . ([hints](): **mkdir​**, **cd**, **ls**)
0. Pasar este archivo a 
[markdown](https://help.github.com/articles/markdown-basics/), o txt, y colocarlo dentro de este directorio con el nombre de README.md o README.txt respectivamente.
0. Agregar dentro de este directorio un archivo index.html, que contenga el esqueleto 
mínimo de HTML5, y dentro de la etiqueta body, colocar un div con id content. ([hints](): abrir este directorio en sublime, y crear y editar este archivo desde aca)
0. Realizar un commit solo de este directorio. ([hints]: **git status**, **git add**,**git commit**)
0. Subir estos cambios al repositorio remoto (github). ([hints](): **git push -u**) 
0. Crear un branch llamado **tp2-css**, y moverse a ese branch. ([hints](): **git checkout -b,
git branch -av​**)
0. Agregar dentro del directorio un archivo **main.css**, y modificar ​
**index.html** (creado en 3) para que lo incluya. 
0. Disponer dentro de **main.css**, las reglas de css necesarias para que:

    0.  El body tenga ​font size​ de 20 pixels
    0.  El div con id content tenga 
        0. [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) ​de 20 em 
        0. [height​](https://developer.mozilla.org/en-US/docs/Web/CSS/height) de 10 em 
        0. [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background-   color)    color​ azul 
        0. Este centrado horizontalmente ([​hints​](): margin auto)

0. Realizar un commit solo con los cambios realizados en 6 y 7. ([hints](): **git status**, 
**git add, git commit**)
0. Subir estos cambios al repositorio remoto (github) ([hints](): **git push -u**) 
0. En github realizar un PR ([pull request](https://help.github.com/articles/using-pull-requests/)) del branch creado en 6 y realizar el merge de este.  
0. Enviar un mail a <fullstack@coderhouse.com>, avisando que se concluyo con la realizacion de este TP, con el link del repositorio.