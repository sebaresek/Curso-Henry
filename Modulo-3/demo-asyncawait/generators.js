// function* generatorShowInstructors(){
//     console.log('iniciando');
//     yield 'Dai'
//     yield 'Jor'
//     return 'terminando'
// }

// const generatorObject = generatorShowInstructors();
// console.log(generatorObject);

// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());



// function* naturalNumbers(){
//     let number = 1;
//     while(true){
//         yield number;
//         number += 1
//     }
// }

// const generatorObject = naturalNumbers()
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// console.log(generatorObject.next());


// function naturalNumbers2(){
//     let number = 1;
//     while(true){
//         console.log(number);
//         number += 1
//     }
// }

// console.log(naturalNumbers2())



// ASYNC AWAIT

const axios = require('axios');

// async function getUsers(){
//     const { data } = await axios('https://jsonplaceholder.typicode.com/users')
//     console.log(data);
// }

const getUsers = async () => {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        if(!data) throw new Error('hubo un pequeño inconveniente master');
        
        const users = data.map(user => {
            return {
                id: user.id,
                name: user.name
            }
        })
        return users
    } catch (error) {
        console.log(error.message);
    }
}
getUsers()

// router.get('/', async (req, res) => {
//     try {
//         const users = await getUsers()
    
//         return res.status(200).json(users)

//     } catch (error) {
//         return res.status(404).send('not found')
//     }
// })