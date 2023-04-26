const { suma, mult, obj, array, promise, suma2 } = require('./funciones');

// afterEach(() => {
//     console.log('after each');
// })

describe('Funciones', () => {
    it('Debe retornar 10 si le pasamos 4 y 6', () => {
        expect(suma(4, 6)).toBe(10)
    })
    
    it('Debe retornar la multiplicación de sus parámetros', () => {
        expect(mult(4, 5)).toBe(20)
        expect(mult(2, 3)).toBe(6)
    })
})


describe('Objetos', () => {
    it('El objeto debe contener la propiedad name', () => {
        expect(obj()).toHaveProperty('name')
    })

    it('El objeto debe tener 2 propiedades: name y modalidad', () => {
        const object = {name: '37a', modalidad: 'FT'};

        expect(obj()).toEqual(object)
    })

    it('Debe contener la propiedad modalidad', () => {
        expect(obj().modalidad).toBeTruthy()
    })

    it('No debe tener la propiedad alumno', () => {
        expect(obj().alumno).toBeFalsy()
    })
})


describe('Arrays', () => {
    it('debe tener un string con el valor de Messi', () => {
        expect(array()).toContain('Messi')
    })
})


describe('Promesas', () => {
    it('La promesa debe resolverse correctamente', () => {
        return promise().then(
            value => expect(value).toBe('demo test promise')
        )
    })
})



describe('Mock functions', () => {
    it('Debe retornar 10 si es llamda con 4 y 6', () => {
        const result = (a, b) => {
            return a + b
        }

        const prueba = jest.fn(() => result(4, 6))
        suma2(4, 6, prueba)
        expect(prueba.mock.calls.length).toBe(1)
    })
})