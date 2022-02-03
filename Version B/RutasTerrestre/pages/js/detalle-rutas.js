$(document).ready(function() {    
    $('#btnEnviarIndicamosTuConsulta').click(function(e) {                
        $('#m-informativo').modal('hide');
    });
    $('#btnEnviarDejaTuopinion').click(function(e) {                
        $('#m-opinion').modal('hide');
    });

    
    $('.btn-ingresar').click(function(e) {
        $(".popover").show();
        $(".modal-iniciar-sesion").hide();
        if($('.modal-backdrop').hasClass('show')) {
            $('.modal-backdrop').removeClass('show');
            $('.modal-backdrop').addClass('hide');
        }
    });
    $('.descarga-pdf').click(function(e) {
        var a = document.createElement("a");
        a.href = "../assets/img/download.pdf";
        a.target = '_blank';
        a.setAttribute("download", "Rutas Terreste");
        a.click();
    });
    $(".card-terrestre").hide();
    $("body").click(function(e) {
        closeCard();
    });

    $(".tipContainer").click(function(e) {
        e.stopPropagation();
        $(".card-terrestre").show();
    });
    $(".text-correo").click(function() {
        recuperarPass();
    });
    $(".opCiudad").click(function(e) {
        e.stopPropagation();
        $("#txtContainer").val($(this).text());
        $(".card-terrestre").hide();
    });
    //Elementos ocultos
    $(".popover").hide();
    // Botones bloqueados
    $(".btn-enviar-pass").attr('disabled', 'disabled');
    $(".idPopoverNotificacionGuardar").click(function() {
        
        $(".popover").toggle();
    });
    $(".close-popover").click(function() {
        $(".popover").toggle("close");
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
    $(".card-terrestre").show();
}
function hideCardTipoContenedor() {
    $(".card-terrestre").hide();
}
function closeCard() {
    $(".card-terrestre").hide();
}

