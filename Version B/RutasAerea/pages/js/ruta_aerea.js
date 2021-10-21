$(document).ready(function() {
    $(".ptOrigen").click(function(e) {
        e.stopPropagation();
        showCardOrigen();
    });
    $(".ptDestino").click(function(e) {
        e.stopPropagation();
        showCardDestino();
    });
    $("body").click(function() {
        closeCardPuertos();
    });
    $(".opCiudad").click(function() {
        showCardPuertosOrigen();
    });
    $(".opPais").click(function(e) {
        e.stopPropagation();
        showCardPuertosDestino();
    });
    $(".opPtoEE-UU").click(function() {
        showCardPuertosEEUU();
    });
    $(".btnReturn").click(function(e) {
        e.stopPropagation();
        retornarCardPuertosOrigen();
    });
    $(".mostrarpuerto").click(function(e) {
        e.stopPropagation();
        showPuerto();
    });
    $(".opPaises").click(function() {
        selectPuerto();
    });
    $(".btn-rutas2").click(function() {
        showRutas();
    });
    $(".opOrigenMovil").click(function() {
        selectPtoOrigenMovil();
    });
    $(".opDestinoMovil").click(function() {
        selectPtoDestino();
    });
    $(".opDestCiudad").click(function() {
        selectPtoDestCiudad();
    });
    $(".puertoDestinoMovil").click(function() {
        closeCardPuertos();
    });
    $(".return-pais").click(function() {
        retornarPais();
    });
    $(".opDestinoMovil2").click(function() {
        SelectCardPaisDestino();
    });
    $(".btn-rutasMovil2").click(function() {
        showRutas();
    });
    // Botones bloqueados
    $(".btn-rutas").attr('disabled', 'disabled');
    $(".btn-rutasMovil").attr('disabled', 'disabled');
    $(".btn-rutas2").attr('disabled', 'disabled');
    $(".btn-rutasMovil2").attr('disabled', 'disabled');
    //Elementos ocultos
    $(".card-origen").hide();
    $(".card-destino").hide();
    $(".cmbSelectPuerto").hide();
    $(".cardPuerto").hide();
    $(".mostrarRutas").hide();
    $(".PuertoDestino-movil").hide();
    $(".select-destino-ciudad").hide();
});

function showCardOrigen() {
    $(".card-origen").show();
}

function showCardDestino() {
    $(".card-destino").show();
}

function closeCardPuertos() {
    $(".card-origen").hide();
    $(".card-destino").hide();
    $(".cardPuerto").hide();
}

function showCardPuertosOrigen() {
    $(".ptOrigen").val("Paita, Piura")
}

function showCardPuertosDestino() {
    $(".cmbPais").hide();
    $(".cmbSelectPuerto").show();
}

function showCardPuertosEEUU() {
    $(".card-destino").hide();
    $(".puertoDestino").val("Seattle, Estados Unidos");
    $(".btn-rutas").removeAttr('disabled');
    $(".btn-rutas").removeClass('btn-disabled');
    $(".btn-rutas").addClass('btn-danger');
}

function retornarCardPuertosOrigen() {
    $(".cmbSelectPuerto").hide();
    $(".cmbPais").show();
}

function showPuerto() {
    $(".cardPuerto").show();
}

function selectPuerto() {
    $(".cardPuerto").hide();
    $(".mostrarpuerto").val("Estados Unidos");
    $(".btn-rutas2").removeAttr('disabled');
    $(".btn-rutas2").removeClass('btn-disabled');
    $(".btn-rutas2").addClass('btn-danger');
}

function showRutas() {
    $(".mostrarRutas").show();
}

function selectPtoOrigenMovil() {
    $(".puertoOrigen-Movil").hide();
    $(".PuertoDestino-movil").show();
}

function selectPtoDestino() {
    $(".PuertoDestino-movil").hide();
    $(".select-destino-ciudad").show();
}

function selectPtoDestCiudad() {
    $("#ptOrigenCanvas").offcanvas('hide');
    $(".ptOrigenMovil").val("Paita, Perú");
    $(".puertoDestinoMovil").val("Seattle, Estados Unidos");
    $(".btn-rutasMovil").removeAttr('disabled');
    $(".btn-rutasMovil").removeClass('btn-disabled');
    $(".btn-rutasMovil").addClass('btn-danger');
}

function retornarPais() {
    $(".select-destino-ciudad").hide();
    $(".PuertoDestino-movil").show();
}

function SelectCardPaisDestino() {
    $("#PaisDestinoCanvas").offcanvas('hide');
    $(".mostrarpuertoMovil").val("Estado Unidos");
    $(".btn-rutasMovil2").removeAttr('disabled');
    $(".btn-rutasMovil2").removeClass('btn-disabled');
    $(".btn-rutasMovil2").addClass('btn-danger');

}