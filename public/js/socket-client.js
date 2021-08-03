// REferencias del html para actual
const lblonline  = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');


const socket = io();


socket.on('connect', () => {

    lbloffline.style.display = 'none';
    lblonline.style.display = '';

    console.log('Conectado..');

});


socket.on('disconnect', () => {

    lblonline.style.display = 'none';
    lbloffline.style.display = '';

    console.log('Desconectado..');
});
