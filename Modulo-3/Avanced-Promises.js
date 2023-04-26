/*
* HANDLERS :  
son los controladores que seran ejecutados dependiendo como se resuelva una promesa. Estos se encuentran dentro del .then() el catch() solo tiene un errorHandler

* STATUS : 
es una propiedad del objeto promesa que tiene los estados pending, fulfilled y rejected

* PROMESAS : 
objetos que representan el resultado de una operacion asincronica que se resuelve o se rechaza 

* ENCADENAMIENTO : 
cuando 2 o mas operaciones asincronas consecutivas deben complementarse se pueden encadenar con los metodos que conocemos

* .THEN 
es un metodo de promesas que devuelven otra promesa

* .CATCH
es al igual que el .then un metodo de promesas que devuelve otra promesa pero que en este caso solo incluye un errorHandler

! EJEMPLOS !

*/

const fulfilled1 = new Promise((resolve, reject) => {
    resolve('Resuelto')
})
const fulfilled2 = new Promise((resolve, reject) => {
    resolve('Resuelto 2')
})
const rejected1 = new Promise((resolve, reject) => {
    reject('Rechazado')
})

// CASE 1
fulfilled1.then((value) => console.log('caso 1: ', value))

// CASE 2
rejected1.then(
    (value) => console.log(value),
    (reason) => console.log('caso 2: ', reason)
)

// CASE 3
// La promesa se reuelve y no tengo un successHandler
fulfilled1 // promesa => 'Resuelto'
.then() // promesa => 'Resuelto'
.then((value) => console.log('caso 3: ', value)) // 'caso 3: Resuelto'

// CASE 4
// La promesa se rechaza y no tengo un errorHandler
rejected1 // se rechazó
.then((value) => console.log(value)) // promesa reject(error)=>
.then((value) => console.log(value)) // promesa reject(error)=>
.then((value) => console.log(value)) // promesa reject(error)=>
.then((value) => console.log(value)) // promesa reject(error)=>
.catch((error) => console.log('caso 4: ', error)) // 'caso 4: Rechazado'


// CASE 5
fulfilled1 // 'Resuelto'
.then(
    (value) => { return 'Te paso info' } , // promesa resolve('Te paso info') => 
    (error) => console.log(error)
)
.then((value) => console.log('este es el segundo then: ', value))


// CASE 6
rejected1 // rechazado
.then(
    (value) => { return 'otro  value' }, // successHandler
    (error) => { throw error} // errorHAndler
)
.then(
    (value) => console.log('caso 6: ', value),
    (error) => console.log('errorHandler: ', error)
)

// CASE 7
fulfilled1
.then(
    (value) => { return rejected1 },
    (error) => { throw error }
)
.then(
    (value) => console.log('successHandler: ', value),
    (error) => { throw error }
)
.catch(error => console.log('catch: ', error))