var indicador1 = true;
var indicador2 = true;
var indicador3 = true;
var indicador4 = true;
$(document).ready(function() {
    sessionStorage.removeItem("idHerramienta");
    sessionStorage.setItem('idHerramienta', '2');
    $(".ptOrigen").click(function(e) {
        e.stopPropagation();
        $(".ptOrigen").val('');
        showCardOrigen();
    });
    $(".ptDestino").click(function(e) {
        e.stopPropagation();
        $(".ptDestino").val('');
        showCardDestino();
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

    
    $("body").click(function() {
        closeCardPuertos();
    });
    $("#ruta1").click(function() {
        mostrarOcultarRutas();
    });
    $("#ruta2").click(function() {
        mostrarOcultarRutas2();
    });
    $("#ruta3").click(function() {
        mostrarOcultarRutas3();
    });
    $("#ruta4").click(function() {
        mostrarOcultarRutas4();
    });
    $(".opCiudad").click(function() {
        showCardPuertosOrigen();
    });
    $(".opPais").click(function(e) {
        e.stopPropagation();
        showCardPuertosDestino();
    });
    $(".opPaisRuta").click(function(e) {
        e.stopPropagation();
        $("#mostrarMapaRuta").val($(this).text());
        $(".card-maritima-pais-select").hide();
        $(".btn-rutas2").removeAttr('disabled');
        showRutas();
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
    $(".opPaíses").click(function() {
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

function mostrarOcultarRutas() {
    if (this.indicador1) {
        $("#flecha1").hide();
    } else {
        setTimeout('$("#flecha1").show()', 500);
    }
    this.indicador1 = !this.indicador1;
}

function mostrarOcultarRutas2() {
    if (this.indicador2) {
        $("#flecha2").hide();
    } else {
        setTimeout('$("#flecha2").show()', 500);
    }
    this.indicador2 = !this.indicador2;
}

function mostrarOcultarRutas3() {
    if (this.indicador3) {
        $("#flecha3").hide();
    } else {
        setTimeout('$("#flecha3").show()', 500);
    }
    this.indicador3 = !this.indicador3;
}

function mostrarOcultarRutas4() {
    if (this.indicador4) {
        $("#flecha4").hide();
    } else {
        setTimeout('$("#flecha4").show()', 500);
    }
    this.indicador4 = !this.indicador4;
}

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
    $(".mostrarpuertoMovil").val("Estados Unidos");
    $(".btn-rutasMovil2").removeAttr('disabled');
    $(".btn-rutasMovil2").removeClass('btn-disabled');
    $(".btn-rutasMovil2").addClass('btn-danger');
    showRutas();
}