const axios = require('axios');
const { API, API_KEY } = process.env;

let characters = []; // [[20 personajes], [20 personajes]]

let i = 1;
// const getCharacters = async () => {
//     try {
//         while(i < 3) {
//             const { data } = await axios(`${API}?key=${API_KEY}&page=${i}`);
    
//             characters = [...characters, ...data.info.results]
//             console.log(characters);
//             i++;
//         }
//         return characters
        
//     } catch (error) {
//         console.log(error);
//     }
// }


const getCharacters = async () => {
    try {
        while(i < 3){
            let response = await axios(`${API}?key=${API_KEY}&page=${i}`);

            characters.push(response);
            i++;
        };

        characters = (await Promise.all(characters))
        .map(response => 
            response.data.info.results.map(character => {
                return({
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    origin: character.origin.name
                })
            })
        )

        let allCharacters = [];
        characters.map(array => { allCharacters = allCharacters.concat(array) });

        return allCharacters;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getCharacters
};