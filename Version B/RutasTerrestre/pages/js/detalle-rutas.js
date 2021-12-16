$(document).ready(function() {
    $('.descarga-pdf').click(function(e) {
        debugger;
        var a = document.createElement("a");
        a.href = "../assets/img/download.pdf";
        a.setAttribute("download", "Rutas Terreste");
        a.click();
    });
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

    $(".div-detalle-rutas").click(function() {        
        console.log($(this).find('i'));
        var object = $(this).find('i');
        if(object.hasClass('fa-chevron-right')) {
            object.removeClass('fa-chevron-right');
            object.addClass('fa-chevron-down');
        }else {
            object.removeClass('fa-chevron-down');
            object.addClass('fa-chevron-right');
        }
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

