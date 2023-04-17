/*
* FOMIULAIOS CONTOLADOS : 
nos permite tener el control total de lo que esta escribiendo el usuario en tiempo real. si el estado cambia, cambia el input y viceversa
- el valor del input tiene un bind al estado del componente 
- recomendado por los creadores de react 
- sigue los patrones de react 
- es predecible

on submit : cuando el formulario dispara un evento

CARACTERISTICAS : 
- recuperacion del valor on submit
- validacion on submit
- calidacion instantanea del campo
- deshabilitacion condicional del boton submit
- campos requeridos
- inputs dinamicos
- muchos inputs para un mismo conjunto de datos    


*/


//* COMO HACER UN FORMULARIO CONTROLADO :

import { useState } from 'react';

const Forms = () => {


    const [form, setForm] =useState({
        email: '',
        password: ''
    });


    const [error, setError] =useState({
        email: '',
        password: ''
    });


    const handleOnChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        validate()
    }


    const validate = () => {
        if(!/\S+@\S+\.\S+/.test(form.email)) {
            setError({
                ...error,
                email: 'tiene que ser un email valido'
            });
          } else {
            error.email('');
          };
          
          if(from.password.length < 6){
            setError({
                ...error,
                password: 'tiene que tener un minimo de 6 caracteres'
            });
          }else {
            error.password('');
          };
    };


    const handleOnSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <Forms onSubmit={handleOnSubmit}>
            <h1>SOY EL FORMULARIO</h1>

            <label htmlFor='email'>Email: </label>
            <input name='email' type='email' placeholder='ingrese su email' value={form.email} onChange={handleOnChange}/>
            {error.email && <p>{error.email}</p>}
            <br />
            <label htmlFor='password'>Password: </label>
            <input name='password' type='password' placeholder='ingrese su password' value={form.password} onChange={handleOnChange}/>
            <br />
            <button disabled={ !form.email || !form.password || error.email || error.password } > Enviar </button>
        </Forms>
    )
}
