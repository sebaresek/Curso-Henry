const express = require('express');
const morgan = require('morgan');
const server = express();

const usersRouter = require('./routes/usersRoutes');
const posteosRouter = require('./routes/posteosRoutes');

server.use(express.json());
server.use(morgan('dev'));

server.use('/users', usersRouter);
server.use('/posteos', posteosRouter);

server.get('/', (req, res) => {
    res.send('holi')
});

module.exports = server;