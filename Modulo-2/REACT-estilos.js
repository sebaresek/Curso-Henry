/* 
* LEGACY : 
estamos utilizando un import en un archivo css! esto sucede gracias a webpack
es compatible se dan estilos igual que antes por lo que podemos reutilizar los css que ya teniamos, no hay que aprender nada nuevo, es el mismo paradigma. pero los estilos son globales va contra la filosofia de los componentes, y tenemos el mismo problema de organizacion de el ccs de antes 

* INLINE STYLING: 
podemos escribir css con js, es decir crear un objeto y dentro de el declarar el css
es de menos configuracio, no necesitamos ningun loader, estilos locales no puede haber colisiones pero perdemos los pseudoSelectores(hover, etc) y la sintaxis es un poco rara


* CSS MODULE : 
la idea detras de esto es tener lo mejor de los estilos anteriores: escribir e css propiamente dicho y mantener scopes locales
los estilos son locales, no puede haber colisiones, organizado los estilos son locales para cada componente pero perdemos los estilos globales 


* STYLED COMPONENTS: 
la idea basica es hacer cumplir las mejores practicas eliminando la asociascion entre estilos y componentes
es componentizado, creamos componentes con estilos, reutilizacion; podemos reutilizar componentes en vez de estilos pero tiene un nuevo paradigma; hay que acostumbrarse a uarlo




*/