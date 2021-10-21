$(document).ready(function() {
    $(".text-correo").click(function() {
        recuperarPass();
    });
    //Elementos ocultos
    $(".popover").hide();
    // Botones bloqueados
    $(".btn-enviar-pass").attr('disabled', 'disabled');
    $(".idPopoverNotificacionGuardar").click(function() {
        $(".popover").toggle();
    });
    $(".close-popover").click(function() {
        $(".popover").toggle();
    });
});

function recuperarPass() {
    $(".text-correo").val("prueba@live.com");
    $(".btn-enviar-pass").removeAttr('disabled');
    $(".btn-enviar-pass").removeClass('btn-disabled');
    $(".btn-enviar-pass").addClass('btn-danger');
}