// REferencias del html para actual
const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();


socket.on('connect', () => {

    lbloffline.style.display = 'none';
    lblonline.style.display = '';

    /* console.log('Conectado..'); */

});


socket.on('disconnect', () => {

    lblonline.style.display = 'none';
    lbloffline.style.display = '';

    /*  console.log('Desconectado..'); */
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 'asdc1245dfghth778sd',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, function (id) {
        console.log('Desde el server ', id);
    });

});
