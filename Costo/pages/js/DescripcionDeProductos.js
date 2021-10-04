// Costos
$(document).ready(function() {
    $("#Comercializadora").click(function() {
        selectComercializadora();
        mostrarViewComercializadora();
    });
    $("#Productora").click(function() {
        selectProductora();
        mostrarViewProductora();
    });
    $("#prodComercial2").click(function() {
        MostrarInsumoLiberado();
    });
    $("#prodComercial").click(function() {
        MostrarInsumoLiberado2();
    });
    $("#destinoCarga").click(function() {
        mostrarContinentesPais();
    });
    $(".pais").click(function() {
        mostrarCiudad();
    });
    $(".ciudad").click(function() {
        CloseSelect();
    });
    $("#RetornaPais").click(function() {
        retornarPais();
    });
    $("#mlargo").click(function() {
        abrirDetalle();
    });
    $(".div-container-global").click(function() {
        cambiarEfectoContenedor();
    });
    $(".check").hide();
    $("#insumoLiberado").hide();
    $("#view-comercializadora").hide();
    $("#view-select-Continente").hide();
    $("#detalleCiudad").hide();
    $("#tipoCargaMaritima").hide();
    $("#detalle").hide();
    $("#container").hide();
});

function clickTab(numberTab) {
    switch (numberTab) {
        case 1:
            $("#tab1").trigger("click");
            break;
        case 2:
            $("#tab2").trigger("click");
            break;
        case 3:
            $("#tab3").trigger("click");
            break;
        case 4:
            $("#tab4").trigger("click");
            break;
        case 5:
            $("#tab5").trigger("click");
            break;
    }
}

function MostrarInsumoLiberado() {
    $("#prodComercial2").val("R&R");
    $("#numPartida2").val("0303420000");
    $("#insumoLiberado2").show();
    $(".check").show();
}

function selectProductora() {
    $("#Comercializadora").removeClass("active-product")
    $("#Productora").addClass("active-product")
    $("#insumoLiberado").hide();
    $("#proDirecta").hide();
    $("#proEncargo").show();
}

function selectComercializadora() {
    $("#Productora").removeClass("active-product")
    $("#Comercializadora").addClass("active-product")
    $("#insumoLiberado2").hide();
    $("#proEncargo").hide();
    $("#proDirecta").show();

}

function mostrarViewProductora() {
    $("#view-comercializadora").hide();
    $("#view-productora").show();
}

function mostrarViewComercializadora() {
    $("#view-productora").hide();
    $("#view-comercializadora").show();
}

function MostrarInsumoLiberado2() {
    $("#prodComercial").val("R&R");
    $("#numPartida").val("0303420000");
    $("#insumoLiberado").show();
    $(".check").show();
}

function mostrarContinentesPais() {
    $("#view-select-Continente").show();
    // $("#cmbPais").show();
}

function mostrarCiudad() {
    $("#cmbPais").hide();
    $("#detalleCiudad").show();
}

function CloseSelect() {
    $("#detalleCiudad").hide();
    $("#cmbPais").show();
    $("#view-select-Continente").hide();
    $("#destinoCarga").val("Da Chan Bay - China");
    $("#destinomasBuscados").hide()
    $("#tipoCargaMaritima").show();
}

function retornarPais() {
    $("#detalleCiudad").hide();
    $("#cmbPais").show();
}

function abrirDetalle() {
    $("#detalle").show();
}

function mostrarContainer() {
    $("#container").show()
}
// Funcion para efecto de contenedores

function cambiarEfectoContenedor() {
    $("#cardPersonalizado").removeClass("card-personalizado-container");
    $("#cardPersonalizado").addClass("card-personalizado-container2");
    $("#div-img").removeClass("img-div")
    $("#div-img").addClass("img-div2")
}