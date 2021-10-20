$(document).ready(function() {
    $(".text-correo").click(function() {
        recuperarPass();
    });
    // Botones bloqueados
    $(".btn-enviar-pass").attr('disabled', 'disabled');
});

function recuperarPass() {
    $(".text-correo").val("prueba@live.com");
    $(".btn-enviar-pass").removeAttr('disabled');
    $(".btn-enviar-pass").removeClass('btn-disabled');
    $(".btn-enviar-pass").addClass('btn-danger');
}