const express = require('express');
const cors = require('cors');

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
        this.io.on('connection', socket => {

            /* console.log('Cliente conectado...', socket.id); */

            socket.on('disconnect', () => {
                /* console.log('Cliente desconectado'); */
            });

            socket.on('enviar-mensaje', (payload, callback) => {


                const id = 123456;
                callback( id );

                socket.broadcast.emit('enviar-mensaje', payload);
                /* console.log(payload); */
                /* this.io.emit('enviar-mensaje', payload ); */
            });

        });
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`\nServidor corriendo en el puerto ${this.port.green} -  http://localhost:${this.port.green}`)
        })
    }

}




module.exports = Server;
