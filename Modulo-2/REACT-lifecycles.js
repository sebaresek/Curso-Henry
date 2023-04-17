//? ESTADOS :
/* es un objeto que contiene la inf. de un componente. representa los datos que pueden cambiar y que afectan a como se renderiza en la interfaz del usuario. tiene la particularidad de impactar sobre el ciclo de vida del componente
es un comportamiento interno del componente
en componentes de clase siempre es un obj (this.state)
en componentes de funcionales del estado es lo que yo quiero

                                
//* PARTICULARIDADES
un componente actualizara la inf cuando: 
+ se producen cambios en el estado local
+ recibe nuevas propiedades

para modificar el estado utilizaremos la fn setState :

componente de clase : this.setState
componente de funciones: useState

setState () //* la unica manera de modificar el estado es con la fn "set"
setState () //* parentesis porque llamamos a la fn
setState ({counter: this.state.counter + 1}) //* corchete si vamos a trabajar con objetos y dentro del mismo las lineas de codigo que necesitemos
*/

//*  EJEMPLO

import React from 'react';

class Contador extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            saludo: 'Holis, bienvenidos al contador'
        }
    }

    clickState = () => {
        this.setState({ counter: this.state.counter + 1, saludo: 'me actualicé' })
    }

    componentDidMount(){
        console.log('Esta fn se ejecuta si quiero hacer algo cuendo el componente se ha terminado de montar. Esto sucedera un monton de veces. como un cartel con un logo o algo asi ');
    }

    componentDidUpdate(){
        console.log(`me actualicé, el estado ahora es: ${this.state.counter}`);
    }

    componentWillUnmount(){
        console.log('me desmonté');
    }

    render(){
        return(
            <div>
                <h1>CLASS COMPONENT</h1>
                <h3>{this.state.saludo}</h3>
                <p>{this.state.counter}</p>
                <button onClick={this.clickState} >Aumentar state</button>
            </div>
       )
    }
 }

export default Contador;



//* CICLOS DE VIDA - lifecycles
/*
1- MONTAJE {componentDidMount} (constructor): es la primera vez que veo en pantalla

2- ACTUALIZACION {componentDidUpdate} (new props) (setState): hablo del re rebderizado del componente que surga por dos posibles cambios

3- DESMONTAJE {componentDidUnmount} : cuando ya no estamos viendo el componente en pantalle (pase a  ver otra cosa)

//* useEffect() simula los 3 ciclos de vida 

 
//* ESTADOS EN COMPONENTES FUNCIONALES 

HOOKS: son fn de react, UNICAMENTE para componente funcionales, no de clases. 
*/

import { useState, useEffect } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }

    useEffect(() => {
        console.log('se montó el componente funcional');

        return console.log('se modificó el estado');

    }, [count, props])

    return(
        <div>
            <h1>FUNCTION COMPONENT</h1>
            <p>{count}</p>
            <button onClick={handleClick} >Aumentar</button>
        </div>
    )
}
// export default Counter;


//* OTRO EJEMPLO DE JORGE 

//* ARCHIVO Apps.js

import Cards from './components/Cards';
import {useState} from 'react' ; 
import './App.css';
import searchBar from './components/searchBar';

function App () {
    const [users, setUsers] = useState([{}]);

    const searchUser = (id) => {
        fetch(`https://jsonpplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUsers([...users, data])); //data es el objeto del usuario
    };

    //a partir de ahora tengo un estado que se llama users = []
    //setUsers es la fn encargada de modificar ese estado

    return (
        <div className='App'>
            <searchBar onSearch={searchUser} />
            <Cards users={users} />
        </div>
    );
}
// export default App;

//* ARCHIVO Cards.jsx

import Card from './components/Card';

const Cards = (props) => {
    return (
        <>
        {props.users.map((user) => {
            return <Card name ={user.name} email={user.email}/>;
        })}
        </>
    );
};
//export default Cards;

//* ARCHIVO Card.jsx

const Card = (props) => {
    return (
        <>
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
        </>
    );
};
 


//* ARCHIVO SearchBar.jsx

import { useState } from 'react';

const SearchBar = (props) => {
    const [id, setId] = useState('');

    const handleChange = (event) => {
        setId(event.target.value);
    };

    return (
        <>
        <input type='text' onChange={handleChange} />
        <button 
        onClick={() =>{props.onSearch(id)}}
        >Buscar</button>
        </>
    );
};
//export default searchBar;