const suma = (a, b) => a + b;

const mult = (c, d) => c * d;

const obj = () => {
    return {name: '37a', modalidad: 'FT'}
}

const array = () => {
    const arr = [
        'Daiana', 'Gaston', 'Pepito', 'Messi'
    ]
    return arr
}

const promise = () => {
    const newPromise = new Promise((resolve, reject) => {
        resolve('demo test promise')
    })

    return newPromise
}



const suma2 = (a, b, result) => {
    result(a, b)
}



module.exports = {
    suma,
    mult,
    obj,
    array,
    promise,
    suma2
}