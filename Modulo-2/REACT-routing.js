/*
* single page application 
es una app web que se carga una sola vez y luego se actualiza dinamicamente sin necesidad de recargar la pag completa


* que es el routing ?
dirigir a un usuario a diferentes paginas dentro de una misma aplicacion web. estas pag estaran definidas en la url


* react-router-dom 
es una libreria ...


LA VERSION QUE VAMOS A OCUPAR ES LA '6' COMANDO = 
* npm i react-router-dom@6.3.0

import {Routes, Route} fom 'react-router-dom';

<routes >
    <route path='/home' element={<Home>} />
        <route path=':profile' element={<profile>} />
</routes>


para establecer la configuracion de las rutas es necesario importar 3 componentes principales

<BrowserRouter /> | envuelve a toda la aplicacion y entabla la comunicacion con el servidor

<routes /> | agrupa todas las rutas y, ante un evento, determina cual corresponde seguir

<route /> | reporesenta una ruta y el componente que en ella se renderiza, mediante los atributos path y element


* NAVEGACION 

<link/> podemos agregar estilos normales

<NavLink/> podemos sumarle estilos dependiendo la actividad


* HOOTS
esta libreria tiene distintos hooks que nos permite acceder a la inf de nuestra aplicacion

useLocation
nos dira en que ruta esta parado el usuario
import {useLocation} from 'react-router-dom';

useNavegate 
nos permite navegar por el historial del usuario en nuestra aplicacion
import {useNavegate} from 'react-router-dom';

useParams
nos devuelve aquellos datos ingresados desde la url como parametros
ej: 
:person
devuelve = {person: dai}
import {useParams} from 'react-router-dom';

outlet : nos permite mostrar rutas anidadas

*/ 