const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/socket.controller');

require('colors');



class Server {

    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = {}



        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //Configuración de sockets
        this.sockets();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use(cors());


        // Directorio Público
        this.app.use(express.static('public'));


    }

    routes() {

        /* this.app.use(this.paths.auth, require('../routes/auth')); */
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`\nServidor corriendo en el puerto ${this.port.green} -  http://localhost:${this.port.green}\n`)
        })
    }

}




module.exports = Server;
