/* 

? componente inteligente : 
containers SMART ; saben como funcionan las cosas. Poco y nada del DOM, sin estilos, provee datos, invoca acciones 


? componente inutil : 
presentaciones DUMB ; muestra en pantalla lo que recibe por parametro, trabaja con sus props y generalmente no tienen estado propio

* METODO CONNECT :
mpStateToProps y mapDispatchToProps => inyecta props al componente.
el componente es quien despacha las actions

* PROVIDER : 
abraza a toda la app de React, le pasamos por props a la store y de esta forma react conoce a redux

* MIDDLEWARE :
es una fn entre el cliente y el servidor (traductor)

* presentacionales vs container
separarlos de esta manera trae varias ventajas;
separa los problemas de logica de lo presentacional
obtenemos componente reutilizables
localizamos la complejidad en los containers

npx create-react-app demo-react-redux

npm i redux@4.0.5 react-redux redux-thunk

*/