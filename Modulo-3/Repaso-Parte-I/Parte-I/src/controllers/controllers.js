let users = [];
let posteos = [];


const getUsers = () => users;

const getUsersByName = (name) => {
    const usersFound = users.filter(user => user.name === name);

    if(!usersFound.length) return { error: 'No existen usuarios con ese nombre' };

    return usersFound;
};

const getUserById = (id) => {
    const userFound = users.find(user => user.id === +id);

    if(!userFound) return { error: 'No existe un usuario asociado a ese ID' };

    return userFound;
}

let id = 1;
const postUser = (name, lastname, email) => {
    const newUser = {
        id: id++,
        name,
        lastname,
        email,
        posts: []
    };

    users.push(newUser);
    return newUser;
}

const updateUser = (id, name, lastname, email) => {
    const user = getUserById(id);

    if(user.error) return user;
    
    user.name = name || user.name;
    user.lastname = lastname || user.lastname;
    user.email = email || user.email;

    return user;
}

const deleteUser = (id) => {
    const user = getUserById(id);

    if(user.error) return user;

    users = users.filter(user => user.id !== +id);

    return user;
}

module.exports = {
    getUsers,
    getUsersByName,
    getUserById,
    postUser,
    updateUser,
    deleteUser
};