var socket = io();

//Escuchar info
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor!');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});

//Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Midiat',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuestaServer:', resp);

});