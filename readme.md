# <span style="color: #b5e7a0">Inicializando proyecto</span>
- Inicializar proyecto con package.json: ``` npm init -y```


# Socket.io

 <span style="color:green">Contexto: </span>Los servidores real time son muy utilizados para sistema de chat y de comentarios.

<span style="color:#c94c4c">¿Que es socket.io?</span><br>
 Es una librería open source que ayuda a construir aplicaciones con conexión persitente entre cliente y servidor. Esta herramienta permite crear comunicaciones en tiempo real entre cliente/servidor.


#  <span style="color:#b5e7a0">Seguimiento :</span>

- 1.-  <span style="color:#82b74b">Inicializando proyecto</span>
    - Configuraciones iniciales del proyecto
    - Creando repositorio local y en la nube
    - Instalando las librerías express, dotenv, cors y colors
    - Configurando el cdn de BOOTSTRAP

- 2.-  <span style="color:#82b74b">Creando el servidor de socket.io - Instalación de Socket.io</span>
    - Instalando el paquete de socket.io con npm
    - Modificando el archivo server para crear un servidor de web-sockets
        - Al arrancar nuevamente el servidor se requiere serciorarce de que socket.io ya se encuentra instalado en nuestro servidor, para ello se requiere ir al siguiente url: http://localhost:8080/socket.io/socket.io.js y se tiene que observar lo siguiente:
        - -> el url de socket.io
        - -> El código de la importación de socket.io
        - -> Código 200 de la petición http de la carga de el socket.io.js que se realiza desde el archivo index.html
    <p align="center">
        <img src="public/img/servidor-socket.png" width="1000" height="500">
    </p>

- 3.-  <span style="color:#82b74b">Configuración de socket.io - Front end</span>
    - Se agrega la función que conecta y desconecta la cmunicación de socket.io al recargar el servicio

- 4.-  <span style="color:#82b74b">Mensajes de conexión y desconexión - Cliente</span>
    - Se agrega en el index spna que contienen contenido el cual va a mostrar cuando se este conectado o desconectado
    - En socket-client.js (front-end) se agrega la funcionalidad que va ayudar a mostrar el mensaje que nos va a avisar si el clente esta conectado o desconectado

- 5.-  <span style="color:#82b74b">Emitiendo mensaje desde el cliente - Escuchar desde el servidor</span>
    - Se crea en el index una caja de texto y un botón lo cúal va ayudar a enviar un mensaje al cliente
        - La caja de texto y el botón van a contar con identificadores, los cuales van aservir para disparar un evento
    - En el archivo del servidor dentro de la funcion de socket, se configura para que el socket este escuchando el
    - mensaje del cliente y mostrarlo en consola del backend
    - En socket-client.js se crea el evento que permite enviar el texto(mensaje) en el index, este mensaje contiene la carga de un objeto. En el mismo evento se declara que socket emita el mensaje enviado por el cliente

- 6.-  <span style="color:#82b74b">Emitiendo mensaje desde el servidor - Escuchar desde el cliente</span>
    - En el archvio server.js se carga el mensaje que el servidor va a compartir con sus clientes
    - En el archivo socket-client.js se carga el mensaje que el servidor ya ha enviado




<span style="color:#c94c4c"></span>
