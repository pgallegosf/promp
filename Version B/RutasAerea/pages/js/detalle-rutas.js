$(document).ready(function() {
    $('.btn-ingresar').click(function(e) {
        $(".popover").show();
        $(".modal-iniciar-sesion").hide();
    });

    $(".ver-simulaciones").click(function(e) {
        sessionStorage.removeItem("idHerramienta");
        sessionStorage.setItem('idHerramienta', '1');
    });

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