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
    $(".text-correo").val("prueba@live.com");
    $(".btn-enviar-pass").removeAttr('disabled');
    $(".btn-enviar-pass").removeClass('btn-disabled');
    $(".btn-enviar-pass").addClass('btn-danger');
}