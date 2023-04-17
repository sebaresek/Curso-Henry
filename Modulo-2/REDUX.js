/*
* REDUX:
una libreria de gestion de estado que permite mantener el estado de una app en un unico lugar haciendolo mas facil entender y depurar

? PRINCIPIOS : 
* tiene una unica fuente de verdad; 
el estado de toda app se almacena en un unico objeto
* el estado es solo de lectura
solo puede ser modificado mediante actions lo que asegura que el estado de la app no pueda ser modificado de forma accidental
* los cambios se aplican con funciones puras
las actions son procesadas por fn puras llamadas reducers que producer una nueva version del estado en vez de modificar el estado actual
funciones puras hace referencia a no hace peticiones a las api ni tampoco cambia de valores a los elemtos 


? STORE : 
initialState = {
    count: 0,
    alumnos: []
}

? ACTIONS: 
{type: 'AUMENTAR_COUNT'}
{type: 'ALUMNOS', payload:['Cris', 'Maria']}


? REDUCER: 
function(state = initialState, action){
    if( action.type === 'AUMENTAR_COUNT' ){
        return {
            ...state, count: state.count +1 
        }
    }
    if(action.type === 'ALUMNOS'){
        return {
            ...state, alumnos: action.payload
        }
    }
}

store >>> estado global

reducer: es una function que trae dos parametros el 'state' y la actions.
nadie mas que el reducer puede hacer modificaciones en el estado global
cuando modificamos el estado global va con reducer va a pisar el objeto actual por el viejo por lo tanto hacemos algo para no perder el objeto viejo

actions: son funciones que retornan un objeto de tipo {type} y siempre podemos encontrar datos en su propiedad {payload}

action-type >>> constanstes que son strings para evitar problemas / errores de tipeo

* npm i redux@4.0.5 
INSTALAR REDUX VERSION ESTABLE

*/

//? const {createStore} = require{'redux'}
//? 8342const store = createStore(reducer);



const initialState = {
    count: 0,
    intructor: '',
    cohorte: '',
    alumnos: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'AUMENTAR_COUNT'){
        return{
            ...state, count: state.count + 1
        }
    }if(action.type === 'CAMBIAR_INSTRUCTOR'){
        return{
            ...state, instructor: action.payload
        }
    }if(action.type === 'MODIFICAR_ALUMNOS'){
        return{
            ...state, alumnos: action.payload
        }
    }if(action.type === 'SUMAR_ALUMNOS'){
        return{
            ...state, alumnos: [...state.alumnos, ...action.payload]
        }
    }
}


store.dispatch({type: 'AUMENTAR_COUNT'})
store.dispatch({type: 'CAMBIAR_INSTRUCTOR', payload: 'dai'})
store.dispatch({type: 'MODIFICAR_ALUMNOS', payload: ['mariano', 'seba', 'messi']})
store.dispatch({type: 'SUMAR_ALUMNOS', payload: ['juan', 'pedro', 'santi']})
