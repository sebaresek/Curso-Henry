import { AUMENTAR_CONTADOR, GET_USERS } from "./action-types";


export const aumentarContador = () => {
    return { type: AUMENTAR_CONTADOR }
};

export const getUsers = () => {
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: GET_USERS, payload: data}))
    }
}