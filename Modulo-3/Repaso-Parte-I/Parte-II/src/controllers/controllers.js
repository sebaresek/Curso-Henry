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

let postId = 1;
const createPost = (userId, title, content) => {
    const user = getUserById(userId);

    if(user.error) return user;

    const newPost = {
        id: postId++,
        userId,
        title,
        content
    }
    posteos.push(newPost);
    user.posts.push(newPost);

    return newPost;
}

const getPosteos = () => posteos;

const getPosteosByTitle = ( title ) => {
    const posteosFiltered = posteos.filter(posteo => posteo.title === title);

    if(!posteosFiltered.length) throw Error('No hay posteos que coincidan con ese titulo')

    return posteosFiltered;
}

const getPosteoById = ( id ) => {
    const posteoFound = posteos.find(posteo => posteo.id === +id);

    if(!posteoFound) throw Error(`No hay posteos relacionados al id: ${id}`);

    return posteoFound;
}

const updatePosteo = ( id, title, content) => {
    const postFound = getPosteoById(id);

    postFound.title = title || postFound.title;
    postFound.content = content || postFound.content;

    return postFound;
}

const deletePosteo = ( id ) => {
    const postFound = getPosteoById(id);
    const userFound = getUserById(postFound.userId);

    posteos = posteos.filter(posteo => posteo.id !== +id);
    userFound.posts = userFound.posts.filter(posteo => posteo.id !== +id);

    return postFound;
}



module.exports = {
    getUsers,
    getUsersByName,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    createPost,
    getPosteos,
    getPosteosByTitle,
    getPosteoById,
    updatePosteo,
    deletePosteo
};