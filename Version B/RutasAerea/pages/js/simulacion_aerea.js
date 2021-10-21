$(document).ready(function() {
    $(".txtordenar").click(function(e) {
        e.stopPropagation();
        showCardOrden();
    });
    $("body").click(function() {
        closeCardOrden();
    });
    //Elementos ocultos
    $(".card-orden").hide();
    $(".popover-table").hide();
    // Botones bloqueados
    $(".btn-enviar-pass").attr('disabled', 'disabled');
    //popover
    $(".idPopoverNotificacionGuardar").click(function() {
        $(".popover").toggle();
    });
    $(".close-popover").click(function() {
        $(".popover").toggle();
    });
    $(".popoper-option").click(function() {
        $(".popover-table").toggle();
    });
});

function showCardOrden() {
    $(".card-orden").show();
}

function closeCardOrden() {
    $(".card-orden").hide();
}