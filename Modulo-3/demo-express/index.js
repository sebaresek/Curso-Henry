// const http = require('http')

// http
// .createServer((req, res) => {
//     if(req.url === '/'){
//         res
//         .writeHead(200, {"Content-type": "text/plain"})
//         .end('Holis, me craearon con http')
//     }
// })
// .listen(3001, 'localhost')




const express = require('express');
const server = express();
const morgan = require('morgan');

const usersRoutes = require('./routes/usersRoutes');
const posteosRoutes = require('./routes/posteosRoutes');

server.use(express.json())
server.use(morgan('dev'))


server.use('/user', usersRoutes)
server.use('/posteo', posteosRoutes)



server.get('/', (req, res) => {
    res.send('esta ruta fue creada con express')
})


server.listen(3001, () => {
    console.log('Server listen on port 3001');
})