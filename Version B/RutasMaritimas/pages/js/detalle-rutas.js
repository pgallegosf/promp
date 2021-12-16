$(document).ready(function() {    
    $('.descarga-pdf').click(function(e) {
        var a = document.createElement("a");
        a.href = "../assets/img/download.pdf";
        a.target = '_blank';
        a.setAttribute("download", "Rutas Maritimas");
        a.click();
    });

    $('.btn-ingresar').click(function(e) {
        $(".popover").show();
        $(".modal-iniciar-sesion").hide();
    });

    $(".ver-simulaciones").click(function(e) {
        sessionStorage.removeItem("idHerramienta");
        sessionStorage.setItem('idHerramienta', '2');
    });

    $(".tipContainer").click(function(e) {
        e.stopPropagation();
        showCardOrigen();
    });
    $(".opcContainer").click(function(e) {
        selectContainer(this.text);
    });
    $(".text-correo").click(function() {
        recuperarPass();
    });
    $("body").click(function() {
        closeCardContainers();
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
    //Elementos ocultos
    $(".card-origen").hide();
});

function selectContainer(text) {
    $("#tipContainerCanvas").offcanvas('hide');
    $(".tipContainer").val(text);
}

function recuperarPass() {
    $(".text-correo").val("prueba@live.com");
    $(".btn-enviar-pass").removeAttr('disabled');
    $(".btn-enviar-pass").removeClass('btn-disabled');
    $(".btn-enviar-pass").addClass('btn-danger');
}


function showCardOrigen() {
    $(".card-origen").show();
}

function closeCardContainers() {
    $(".card-origen").hide();
}