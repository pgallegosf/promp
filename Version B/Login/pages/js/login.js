$(document).ready(function() {
    $(".correo").click(function() {
        mostrarChkActivo();
    });
    $(".text-correo").click(function() {
        recuperarPass();
    });
    // Botones bloqueados
    $(".btn-enviar-pass").attr('disabled', 'disabled');
    // Elementos Ocultos
    $(".check-sesion-activa").hide();
});

function mostrarChkActivo() {
    $(".correo").val("carlos@gmail.com");
    $(".password").val("********");
    $(".view-registro-login").hide();
    $(".check-sesion-activa").show();
}

function recuperarPass() {
    $(".btn-enviar-pass").removeAttr('disabled');
}