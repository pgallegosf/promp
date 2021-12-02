$(document).ready(function() {
    $(".card-tipo-contenedor").hide();
    $("body").click(function(e) {
        closeCard();
    });

    $(".tipContainer").click(function() {
        $(".card-tipo-contenedor").show();
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

function showCardTipoContenedor() {
    $(".card-tipo-contenedor").show();
}
function hideCardTipoContenedor() {
    $(".card-tipo-contenedor").hide();
}
function closeCard() {
    $(".card-tipo-contenedor").hide();
}

