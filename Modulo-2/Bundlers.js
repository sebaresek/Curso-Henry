
//* MODULOS : es una pieza de codigo que cumple una tarea especifica y que indica sobre que piezas de codigo depende

//* EXPORTACION: es posible exportar e importar codigos de distintos archivos. de esta manera tewner una arquitectura mas prolija y coherente

//************************* PRIMERA HOJA ********************************************************/


//? PARA DEJAR INFO DISPONIBLE (EXPORTAR) = 

const num1 = 5;
const num2 = 52;
const name = 'alex';

// asi se haria para exportar y la guarda en un objeto
exports.num1 = num1
exports.num2 = num2
exports.name = name

//? OTRA FORMA DE DEJAR DISPONIBLE INFO (EXPORTAR) !!!

module.exports = {
    num1,
    num2,
    nombre
}


//************************* SEGUNDA HOJA ********************************************************/


//? PARA IMPORTAR LA INFO QUE DEJAMOS DISPONIBLE (IMPORTAR) !!! 

//* PRIMERA FORMA DE LLAMAR A LAS CONSTANSTES
const constantes = require('./constantes');  // ./ (es para decirle la ruta del archivo)

//* LLAMAR A LAS CONSTANSTES USANDO DESTRUCTURIG
// const {num1, num2, nombre} = require('./constantes)

const sumar = (a, b) => {
    console.log(a + b)                       //FUNCIONES 
};

const printName =  (name)  => {              //FUNCIONES 
    console.log(name)
};


//* ASI SE LLAMARIA A LA FUNCION DE LA PRIMERA FORMA
sumar(constantes.num1, constantes.num2) 
printName(constantes.name)


//* LLAMAR A LAS FN USANDO DESTRUCTURIG
sumar(num1, num2) 
printName(name)


//***************************** PRIMERA Y SEGUNDA HOJA ******************************************/


//? ULTIMA FORMA DE DEJAR DISPONIBLE INFO (EXPORTAR PARA REACT) !!!
export const num3 = 5;
export const num4 = 52;
export const namee = 'alex';

//? ULTIMA FORMA DE TRAER INFO (IMPORTAR PARA REACT) !!!

import {num3, num4, namee} from './constantes';

const sumarr = (a, b) => {
    console.log(a + b)
};

const printNamee =  (namee)  => {
    console.log(namee)
};

//* LLAMAR A LAS FN 
sumarr(num3, num4) 
printNamee(namee)


//***********************************************************************************************/


//? entry point : 
// es quien un archivo .js que va  recibir toda la info pero nunca deja info disponible. donde van a estar todos los imports y no va a ver ningun export


//? WEBPACK 
// es un paquete de codigos open source construido principalmente para js permite crear un proyecto a partir de dependencias entre modulos
// es lo mismo que entry point, con la diferencia que el archivo se genera solo. los comando son :
//* PASO 1 = npm install i webpack webpack-cli
// una vez instalado, vamos al archivo package.json y editamos (en la ultima linea dentro de "scripts") y escribimos :
//* PASO 2 = 'build': 'webpack'
// ahora hay que crear un archivo que se llame: 'webpack.config.js' y dentro escribimos el siguiente codigo
//* PASO 3 = 'editando lo que sea necesario'

module.exports = {                      
    entry : './browser/app.js',         //archivo que importa todo    
    output: {                           //donde va a guardar el archivo
        path: __dirname + '/browser',   //va a crear la carpeta con el nombre que le diga ( __dirname hace referencia al nombre de la carpeta donde estamos posicionados)
        filename: 'bundle.js'          // el nombre que quiero que tenga el archivo que contenga el entry point 
    }
}

// ahora tenemos que hacer que el navegador encuentre el archivo, comando :
//* PASO 4 = npm run build      // Tambien es para que tome los cambios de los archivos
// ahora damos inicio a webpack con el siguiente comando:
//* PASO 5 = npm start
