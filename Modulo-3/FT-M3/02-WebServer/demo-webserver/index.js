const http = require('http');

http
.createServer((request, response) => {
    if(request.url === '/users'){
        response.writeHead(200, {"Content-type": "application/json"})

        const users = [
            {id: 1, name: 'Lautaro'},
            {id: 2, name: 'Fernando'},
            {id: 3, name: 'Messi'},
            {id: 4, name: 'Elian'}
        ]        

        return response.end(JSON.stringify(users))
    }
    if(request.url === '/posteos'){
        response.writeHead(200, {"Content-type": "text/plain"})
        return response.end("esta ruta es para los posteos")
    }
    else{
        response.writeHead(404, {"Content-type": "text/plain"})
        return response.end("Error: ruta no encontrada")
    }
})
.listen(3001, "localhost")