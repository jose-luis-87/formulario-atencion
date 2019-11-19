var btnAbrirPopup = document.getElementById('btn-enviar'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
btnAceptar = document.getElementById('btn-aceptar');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

btnAceptar.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

var btnAbrirPopup2 = document.getElementById('btn-cancelar'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2'),
    btnContinuar2 = document.getElementById('btn-continuar')
btnSalir2 = document.getElementById('btn-salir');

btnAbrirPopup2.addEventListener('click', function() {
    overlay2.classList.add('active');
    popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function() {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

btnContinuar2.addEventListener('click', function() {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

btnSalir2.addEventListener('click', function() {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});