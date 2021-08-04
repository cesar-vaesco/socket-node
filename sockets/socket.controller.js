const colors = require('colors');

const socketController = (socket) => {



    console.log(colors.green('Cliente conectado: '), socket.id);

        socket.on('disconnect', () => {
            console.log(colors.yellow('Cliente desconectado: '), socket.id);
        });

        socket.on('enviar-mensaje', (payload, callback) => {


            const id = 123456;
            callback(id);
            /* this.io.emit('enviar-mensaje', payload ); */

            socket.broadcast.emit('enviar-mensaje', payload);
            /* console.log(payload); */
        });


}


module.exports = {

    socketController
 }
