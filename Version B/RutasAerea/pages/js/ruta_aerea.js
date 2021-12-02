$(document).ready(function() {
    sessionStorage.removeItem("idHerramienta");
    sessionStorage.setItem('idHerramienta', '1');
    $(".destino").click(function(e) {
        e.stopPropagation();
        showCardOrigen();
    });
    $(".destino").on('change paste keyup blur', function() { 
        if($("#destino").val() != ""){
            $(".img-check-destino").show();
        }
        else{
            $(".img-check-destino").hide();
        }
     });
     $(".destino-movil").on('change paste keyup blur', function() { 
        if($("#destino").val() != ""){
            $(".img-check-destino-movil").show();
        }
        else{
            $(".img-check-destino-movil").hide();
        }
     });
    $(".peso").click(function(e) {
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
    $(".opDestCiudadM").click(function() {
        showDestinoChina();
    });
    $(".pesoMovil").click(function() {
        llenarDatos();
    });
    // Botones bloqueados
    $(".btn-rutas").attr('disabled', 'disabled');
    $(".btn-rutas2").attr('disabled', 'disabled');
    $(".btn-rutasMovil2").attr('disabled', 'disabled');
    //Elementos ocultos
    $(".card-origen").hide();
    $(".card-destino").hide();
    $(".cmbSelectPuerto").hide();
    $(".cardPuerto").hide();
    $(".mostrarRutas").hide();
    // $(".PuertoDestino-movil").hide();
    $(".select-destino-ciudad").hide();
    $(".mapa-mundo").hide();
});

function showCardOrigen() {
    $(".card-destino").show();
}

function showCardDestino() {
    $(".peso").val("120kg");
    $(".btn-rutas").removeAttr('disabled');
    $(".btn-rutas").removeClass('btn-disabled');
    $(".btn-rutas").addClass('btn-danger');
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
    $(".destino").val("Pekin - Pek, China");
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
    $("#PaisDestinoCanvas").offcanvas('hide');
    $(".paisdestino").val("Berlín - BER, Alemania");
    $(".mapa-mundo").show();
}

function retornarPais() {
    $(".select-destino-ciudad").hide();
    $(".select-destino-pais").show();
}

function SelectCardPaisDestino() {
    $(".select-destino-pais").hide();
    $(".select-destino-ciudad").show();

}

function showDestinoChina() {
    $(".ptOrigenCanvas").offcanvas('hide');
    $(".destinoMovil").val('Pekín - PEK, China');
}

function llenarDatos() {
    $(".pesoMovil").val("120kg");
    $(".btn-rutasMovil").removeAttr('disable');
    $(".btn-rutasMovil").removeClass('btn-disabled');
    $(".btn-rutasMovil").addClass('btn-danger');
}