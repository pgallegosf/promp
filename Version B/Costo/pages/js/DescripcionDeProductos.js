// Costos
$(document).ready(function() {
    $("#Comercializadora").click(function() {
        selectComercializadora();
        //mostrarViewComercializadora();
    });
    $("#encargo").click(function() {
        selectEncargo();
    });
    $("#directa").click(function() {
        selectDirecta();
    });
    $("body").click(function() {
        closeCardEmpresa();
    });
    $("#Productora").click(function() {
        selectProductora();
        //mostrarViewProductora();
    });
    $("#numPartida2").change(function() {
        MostrarInsumoLiberado();
    });
    $("#numPartida").change(function() {
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
    $(".vista-movil").click(function() {
        mostrarContinentesPais_Movil();
    });
    $(".pais_movil").click(function() {
        mostrarCiudadMovil();
    });
    $(".ciudad-movil").click(function() {
        CloseSelectMovil();
    });
    $("#mlargo").click(function() {
        abrirDetalle();
    });
    $(".div-container-global").click(function() {
        cambiarEfectoContenedor();
    });

    $("#consolidada").click(function() {
        optionRButton();
    });
    $("#ConLleno").click(function() {
        optionRButton2();
    });

    // Funciones Tab-3

    $("#MPrima").click(function() {
        llenarCampos();
    });
    $(".op-agregar").click(function() {
        ocultarCostoDirecto();
    });
    $(".Close-C-Directo").click(function() {
        closeCostoDirecto();
    });
    $(".btn-Directo").click(function() {
        closeDirecto_OpenIndirecto();
    });
    $(".btn-Directo-movil").click(function() {
        $(".cardCosto").hide();
        $("#main").show();
    });
    $(".btn-Indirecto-movil").click(function() {
        $(".cardCosto2").hide();
        $("#main").show();
    });
    $(".btn-Admin-movil").click(function() {
        $(".cardCosto3").hide();
        $("#main").show();
    });
    $(".btn-Finan-movil").click(function() {
        $(".cardCosto4").hide();
        $("#main").show();
    });
    $(".btn-Envase-movil").click(function() {
        $(".cardEnvase").hide();
        $("#main").show();
    });
    $(".btn-Empaque-movil").click(function() {
        $(".cardEmpaque").hide();
        $("#main").show();
    });
    $(".btn-Embalaje-movil").click(function() {
        $(".cardEmbalaje").hide();
        $("#main").show();
    });
    $(".btn-Exwork-movil").click(function() {
        $(".cardExworks").hide();
        $("#main").show();
    });
    $(".btn-Fas-movil").click(function() {
        $(".cardFas").hide();
        $("#main").show();
    });
    $(".btn-Fob-movil").click(function() {
        $(".cardFob").hide();
        $("#main").show();
    });
    $(".btn-CFR-movil").click(function() {
        $(".cardCfr").hide();
        $("#main").show();
    });
    $(".btn-DAP-movil").click(function() {
        $(".cardDap").hide();
        $("#main").show();
    });
    $(".btn-DPU-movil").click(function() {
        $(".cardDpu").hide();
        $("#main").show();
    });
    $(".btn-DDP-movil").click(function() {
        $(".cardDdp").hide();
        $("#main").show();
    });
    $(".op-agregar2").click(function() {
        ocultarIndirecto();
    });
    
    $(".Close-C-Indirecto").click(function() {
        closeCostoIndirecto();
    });
    $("#tipMonto").click(function() {
        llenarCampos2();
    });
    $(".btn-Indirecto").click(function() {
        closeIndirecto_OpenAdmin()
    });

    $(".op-agregar3").click(function() {
        ocultarGastoAdministrativo();
    });
    $(".Close-G-Admin").click(function() {
        closeGastoAdmin();
    });
    $("#gastoAdmin").click(function() {
        llenarCampo3();
    });
    $(".op-agregar4").click(function() {
        ocultarGastoFinanciero();
    });
    $(".Close-G-Finan").click(function() {
        closeGastoFinanciero();
    });
    $("#gastoFinan").click(function() {
        llenarCampo4();
    });

    $(".btn-Admin").click(function() {
        closeAdmin_OpenFinanza();
    });
    $(".btn-Finan").click(function() {
        closeFinanza();
    });


    // Funciones  Tab-4

    $(".op-Agregar").click(function() {
        ocultarEnvase();
    });
    $(".Close-Envase").click(function() {
        closeEnvase();
    });
    $("#costoEnvase").click(function() {
        llenarCampoEnv();
    });
    $(".btn-Envase").click(function() {
        closeEnvase_openEmpaque();
    });

    $(".op-Agregar2").click(function() {
        ocultarEmpaque();
    });
    $(".Close-Empaque").click(function() {
        closeEmpaque();
    });
    $("#costoEmpaque").click(function() {
        llenarCampoEmp();
    });
    $(".btn-Empaque").click(function() {
        closeEmpaque_openEmbalaje();
    });

    $(".op-Agregar3").click(function() {
        ocultarEmbalaje();
    });
    $(".Close-Embalaje").click(function() {
        closeEmbalaje();
    });
    $("#costoEmbalaje").click(function() {
        llenarCampoEmb();
    });
    $(".btn-Embalaje").click(function() {
        closeEmbalaje();
    });

    // Funciones Tab-5
    $(".OP-agregar").click(function() {
        ocultarExwork();
    });
    $(".Close-Exwork").click(function() {
        closeExwork();
    });
    $("#porcentaje").click(function() {
        llenarCampoExwork();
    });
    $(".porcentaje").click(function() {
        llenarCampoExwork();
    });
    $(".btn-Exwork").click(function() {
        closeExwork_openFas();
    });

    $(".OP-agregar2").click(function() {
        ocultarFas();
    });
    $(".Close-Fas").click(function() {
        closeFas();
    });
    $("#estiba").click(function() {
        llenarCampoFas();
    });
    $(".btn-Fas").click(function() {
        closeFas_openFob();
    });

    $(".OP-agregar3").click(function() {
        ocultarFob();
    });
    $(".Close-Fob").click(function() {
        closeFob();
    });
    $("#estiba2").click(function() {
        llenarCampoFob();
    });
    $(".btn-Fob").click(function() {
        closeFob_openCFR();
    });

    $(".OP-agregar4").click(function() {
        ocultarCFR();
    });
    $(".Close-CFR").click(function() {
        closeCFR();
    });
    $("#flete").click(function() {
        llenarCampoCFR();
    });
    $(".btn-CFR").click(function() {
        closeCFR_openCIF();
    });

    $(".OP-agregar5").click(function() {
        ocultarCIF();
    });
    $(".Close-CIF").click(function() {
        closeCIF();
    });
    $("#prima").click(function() {
        llenarCampoCIF();
    });
    $(".btn-CIF").click(function() {
        closeCIF_openDAP();
    });

    $(".OP-agregar6").click(function() {
        ocultarDAP();
    });
    $(".Close-DAP").click(function() {
        closeDAP();
    });
    $("#puerto").click(function() {
        llenarCampoDAP();
    });
    $(".btn-DAP").click(function() {
        closeDAP_openDPU();
    });
    $(".OP-agregar7").click(function() {
        ocultarDPU();
    });
    $(".Close-DPU").click(function() {
        closeDPU();
    });
    $("#cliente").click(function() {
        llenarCampoDPU();
    });
    $(".btn-DPU").click(function() {
        closeDPU_openDDP();
    });

    $(".OP-agregar8").click(function() {
        ocultarDDP();
    });
    $(".Close-DDP").click(function() {
        closeDDP();
    });
    $("#impuesto").click(function() {
        llenarCampoDDP();
    });
    $(".btn-DDP").click(function() {
        closeDDP();
    });
    $(".card-costo").click(function() {
        showCardCosto();
    });
    $(".card-costo2").click(function() {
        showCardCosto2();
    });
    $(".card-costo3").click(function() {
        showCardCosto3();
    });
    $(".card-costo4").click(function() {
        showCardCosto4();
    });
    $(".card-envase").click(function() {
        showCardEnvase();
    });
    $(".card-empaque").click(function() {
        showCardEmpaque();
    });
    $(".card-embalaje").click(function() {
        showCardEmbalaje();
    });
    $(".card-exworks").click(function() {
        showCardExworks();
    });
    $(".card-fas").click(function() {
        showCardFas();
    });
    $(".card-fob").click(function() {
        showCardFob();
    });
    $(".card-cfr").click(function() {
        showCardCFR();
    });
    $(".card-cif").click(function() {
        showCardCIF();
    });
    $(".card-dap").click(function() {
        showCardDAP();
    });
    $(".card-dpu").click(function() {
        showCardDPU();
    });
    $(".card-ddp").click(function() {
        showCardDDP();
    });
    $(".unidad-medida").click(function(e) {
        e.stopPropagation();
        showCardUnidadMedida();
    });
    $(".unidad-tiempo").click(function(e) {
        e.stopPropagation();
        showCardUnidadTiempo();
    });
    $(".siguiente-paso3").click(function(e) {
        e.stopPropagation();
        $("#m-confirmacion-sin-guardar").show();
    });
    $(".siguiente-paso4").click(function(e) {
        e.stopPropagation();
        $("#m-confirmacion-sin-guardar-envase").show();
    });
    


    // Elementos ocultados
    $(".check").hide();
    $("#view-comercializadora").hide();
    $(".view-movil").hide();
    $("#Detalle_Puerto_Movil").hide();
    $("#view-select-Continente").hide()
    $("#detalleCiudad").hide();
    $("#tipoCargaMaritima").hide();
    $("#detalle").hide();
    $("#container").hide();
    $(".btn-next").hide();
    $(".check-container").hide();
    $(".costoTotal").hide();
    $("#CostoDirectoDetalle").hide();
    $("#CostoIndirectoDetalle").hide()
    $("#GastoAdministrativoDetalle").hide();
    $("#GastoFinancieroDetalle").hide()
    $("#EnvaseDetalle").hide();
    $("#EmpaqueDetalle").hide();
    $("#EmbalajeDetalle").hide();
    $("#ExWorksDetalle").hide();
    $(".montos").hide();
    $("#FasDetalle").hide();
    $("#FobDetalle").hide();
    $("#CFRDetalle").hide();
    $("#CIFDetalle").hide();
    $("#DAPDetalle").hide();
    $("#DPUDetalle").hide();
    $("#DDPDetalle").hide();
    $(".cardCosto").hide();
    $(".cardCosto2").hide();
    $(".cardCosto3").hide();
    $(".cardCosto4").hide();
    $(".cardEnvase").hide();
    $(".cardEmpaque").hide();
    $(".cardEmbalaje").hide();
    $(".incoterms").hide();
    $(".checkmovil").hide();
    $(".tipoCarga").hide();
});

function SeleccionarUnidadMedida(unidad){
    $(".unidad-medida").val(unidad);
}
function SeleccionarUnidadTiempo(unidad){
    $(".unidad-tiempo").val(unidad);
}

function showCardUnidadMedida() {
    $(".card-unidad-medida").show();
}
function showCardUnidadTiempo() {
    $(".card-unidad-tiempo").show();
}
function closeCardEmpresa() {
    $(".card-unidad-medida").hide();
    $(".card-unidad-tiempo").hide();
    $(".card-unidad-tiempo").hide();
    $("#m-confirmacion-sin-guardar").hide();
    $("#m-confirmacion-sin-guardar-envase").hide();
    $(".card-tipo").hide();
}
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

function clickTabMovil(numberTab) {
    switch (numberTab) {
        case 3:
            $("#tab3").trigger("click");
            $(".cardCosto").hide();
            $(".cardCosto2").hide();
            $(".cardCosto3").hide();
            $(".cardCosto4").hide();
            $("#main").show();
            break;
        case 4:
            $("#tab4").trigger("click");
            $(".cardEnvase").hide();
            $(".cardEmpaque").hide();
            $(".cardEmbalaje").hide();
            $("#main").show();
            break;
        case 5:
            $("#tab5").trigger("click");
            $(".incoterms").hide();
            $("#main").show();
            $(".checkmovil").show();
            break;
    }
}

function MostrarInsumoLiberado() {
    $("#insumoLiberado2").show();
    $(".check").show();
}

function selectProductora() {
    $("#Comercializadora").removeClass("active-product")
    $("#Productora").addClass("active-product")
    /*$("#insumoLiberado").hide();
    $("#proDirecta").hide();
    $("#proEncargo").show();*/
}

function selectComercializadora() {
    $("#Productora").removeClass("active-product")
    $("#Comercializadora").addClass("active-product")
    /*$("#insumoLiberado2").hide();
    $("#proEncargo").hide();
    $("#proDirecta").show();*/

}
function selectEncargo() {
    $("#directa").removeClass("active-product");
    $("#encargo").addClass("active-product");
    $("#destinoCarga").attr("placeholder", "Escribe el país o el puerto");//placeholder("Escribe el país o el puerto");
    $("#destinoCargam").attr("placeholder", "Escribe el país o el puerto");
    $(".puerto-seleccionado").html("Puertos en China");
    $(".puerto-seleccionadom").html('<i class="fas fa-chevron-left font-color-red mx-3"></i>Puertos en China');
    $(".tipoCarga").show();
    /*$("#insumoLiberado2").hide();
    $("#proEncargo").hide();
    $("#proDirecta").show();*/
    $("#CostoIndirecto").hide();
    $("#CostoDirecto").hide();
    $(".ocultar-costo").hide();
    $(".tituloCostosGastos").html("Selecciona tus gastos");
    $(".subtituloCostosGastos").html("Ingresa los gastos que correspondan en cada una de las secciones");
    $(".lineOculto").hide();
}
function selectDirecta() {
    $(".tipoCarga").hide();
    $("#container").hide();
    $("#encargo").removeClass("active-product");
    $("#directa").addClass("active-product");
    $("#destinoCarga").attr("placeholder", "Escribe el país o el aeropuerto");//placeholder("Escribe el país o el aeropuerto");
    $(".puerto-seleccionado").html("Aeropuertos en China");
    $("#destinoCargam").attr("placeholder", "Escribe el país o el aeropuerto");
    $(".puerto-seleccionadom").html('<i class="fas fa-chevron-left font-color-red mx-3"></i>Aeropuertos en China');
    $("#CostoIndirecto").show();
    $("#CostoDirecto").show();
    $(".ocultar-costo").show();
    $(".tituloCostosGastos").html("Selecciona tus costos y gastos");
    $(".subtituloCostosGastos").html("Ingresa los costos y gastos que correspondan en cada una de las secciones");
    $(".lineOculto").show();
}
function mostrarViewProductora() {
    $("#view-comercializadora").addClass("invisible");
    $("#view-productora").removeClass("invisible");
}

function mostrarViewComercializadora() {
    $("#view-productora").addClass("invisible");
    $("#view-comercializadora").removeClass("invisible");
    $("#view-comercializadora").addClass("visible");
}

function MostrarInsumoLiberado2() {
    $("#insumoLiberado").removeClass("invisible");
    $("#insumoLiberado").addClass("visible");
    //$("#insumoLiberado").show();
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

function mostrarCiudadMovil() {
    $("#puertoOrigen-Ciudad").hide();
    $("#Detalle_Puerto_Movil").show();
}

function CloseSelectMovil() {
    $(".view-movil").hide();
    $("#puertoOrigen-Ciudad").show();
    $("#main").show();
    $(".vista-movil").val("Da Chan Bay - China");
    $("#destinomasBuscados").hide()
    $("#tipoCargaMaritima").show();
    $(".btn-next").show();
}

function CloseSelect() {
    $("#detalleCiudad").hide();
    $("#cmbPais").show();
    $("#view-select-Continente").hide();
    $("#destinoCarga").val("Da Chan Bay - China");
    $("#destinomasBuscados").hide()
    $("#tipoCargaMaritima").show();
    $(".btn-next").show();
}

function mostrarContinentesPais_Movil() {
    $("#main").hide();
    $(".view-movil").show();
    $("#Detalle_Puerto_Movil").hide();
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
    $("#cardPersonalizadom").removeClass("card-personalizado-container");
    $("#cardPersonalizadom").addClass("card-personalizado-container2");
    $("#div-img").removeClass("img-div-1");
    $("#div-img").addClass("img-div2");
    $("#div-img-1-m").removeClass("div-img-1-m");
    $("#div-img-1-m").addClass("div-img-1-m-blanco");
    $(".check-container").show();
}

function optionRButton() {
    if ($('input:radio[name=rbutton]:checked')) {
        $("#container").hide();
        $("#dimensiones").show();
        $(".btn-next").show();
    }
}

function optionRButton2() {
    if ($('input:radio[name=rbutton]:checked')) {
        $("#dimensiones").hide();
        $("#container").show();
        $(".btn-next").show();
    }
}

//Funciones  para contenidos de tabs


function ocultarCostoDirecto() {
    $("#CostoDirecto").hide();
    $("#CostoDirectoDetalle").show();
}

function closeCostoDirecto() {
    $("#CostoDirectoDetalle").hide();
    $("#CostoDirecto").show();
}

function llenarCampos() {
    $("#MPrima").val("Lana")
    $("#C-Unitario").val("30")
    $(".costoTotal").show();
    $("#tProceso").val("30")
}

function ocultarIndirecto() {
    $("#CostoIndirecto").hide()
    $("#CostoIndirectoDetalle").show()
}

function closeCostoIndirecto() {
    $("#CostoIndirectoDetalle").hide()
    $("#CostoIndirecto").show()
}

function llenarCampos2() {
    $("#tipMonto").val("Costo variable")
}

function ocultarGastoAdministrativo() {
    $("#GastoAdministrativo").hide()
    $("#GastoAdministrativoDetalle").show()
}

function closeGastoAdmin() {
    $("#GastoAdministrativoDetalle").hide()
    $("#GastoAdministrativo").show()
}

function llenarCampo3() {
    $("#gastoAdmin").val("Pagos");
}

function ocultarGastoFinanciero() {
    $("#GastoFinanciero").hide()
    $("#GastoFinancieroDetalle").show()
}

function closeGastoFinanciero() {
    $("#GastoFinancieroDetalle").hide()
    $("#GastoFinanciero").show()
}

function llenarCampo4() {
    $("#gastoFinan").val("Pagos");
}

function closeDirecto_OpenIndirecto() {
    $("#CostoDirectoDetalle").hide();
    $("#CostoDirecto").show();
    $("#CostoIndirecto").hide();
    $("#CostoIndirectoDetalle").show();
}

function closeIndirecto_OpenAdmin() {
    $("#CostoIndirectoDetalle").hide();
    $("#CostoIndirecto").show();
    $("#GastoAdministrativo").hide();
    $("#GastoAdministrativoDetalle").show();
}

function closeAdmin_OpenFinanza() {
    $("#GastoAdministrativoDetalle").hide();
    $("#GastoAdministrativo").show();
    $("#GastoFinanciero").hide();
    $("#GastoFinancieroDetalle").show();
}

function closeFinanza() {
    $("#GastoFinancieroDetalle").hide();
    $("#GastoFinanciero").show();
}

function ocultarEnvase() {
    $("#Envase").hide();
    $("#EnvaseDetalle").show();
}

function closeEnvase() {
    $("#EnvaseDetalle").hide();
    $("#Envase").show();
}

function llenarCampoEnv() {
    $("#costoEnvase").val("890")
    $(".btn-Envase").removeClass("btn-outline-secondary");
    $(".btn-Envase").addClass("btn-outline-danger");
}

function closeEnvase_openEmpaque() {
    $("#EnvaseDetalle").hide();
    $("#Envase").show();
    $("#Empaque").hide();
    $("#EmpaqueDetalle").show();

}

function ocultarEmpaque() {
    $("#Empaque").hide();
    $("#EmpaqueDetalle").show();
}

function closeEmpaque() {
    $("#EmpaqueDetalle").hide();
    $("#Empaque").show();
}

function llenarCampoEmp() {
    $("#costoEmpaque").val("890")
    $(".btn-Empaque").removeClass("btn-outline-secondary");
    $(".btn-Empaque").addClass("btn-outline-danger");
}

function closeEmpaque_openEmbalaje() {
    $("#EmpaqueDetalle").hide();
    $("#Empaque").show();
    $("#Embalaje").hide();
    $("#EmbalajeDetalle").show();
}

function ocultarEmbalaje() {
    $("#Embalaje").hide();
    $("#EmbalajeDetalle").show();
}

function closeEmbalaje() {
    $("#EmbalajeDetalle").hide();
    $("#Embalaje").show();
}

function llenarCampoEmb() {
    $("#costoEmbalaje").val("800")
    $(".btn-Embalaje").removeClass("btn-outline-secondary");
    $(".btn-Embalaje").addClass("btn-outline-danger");
}

function closeEmbalaje() {
    $("#EmbalajeDetalle").hide();
    $("#Embalaje").show();
}

function ocultarExwork() {
    $("#ExWorks").hide();
    $("#ExWorksDetalle").show();
}

function closeExwork() {
    $("#ExWorksDetalle").hide();
    $("#ExWorks").show();
}

function llenarCampoExwork() {
    $("#porcentaje").val("10%");
    $(".porcentaje").val("10%");
    $(".montos").show();
}

function closeExwork_openFas() {
    $("#ExWorksDetalle").hide();
    $("#ExWorks").show();
    $("#Fas").hide();
    $("#FasDetalle").show();
}

function ocultarFas() {
    $("#Fas").hide();
    $("#FasDetalle").show();
}

function closeFas() {
    $("#FasDetalle").hide();
    $("#Fas").show();
}

function llenarCampoFas() {
    $("#estiba").val("300");
}

function closeFas_openFob() {
    $("#FasDetalle").hide();
    $("#Fas").show();
    $("#Fob").hide();
    $("#FobDetalle").show();
}

function ocultarFob() {
    $("#Fob").hide();
    $("#FobDetalle").show();
}

function closeFob() {
    $("#FobDetalle").hide();
    $("#Fob").show();
}

function llenarCampoFob() {
    $("#estiba2").val("50");
}

function closeFob_openCFR() {
    $("#FobDetalle").hide();
    $("#Fob").show();
    $("#CFR").hide();
    $("#CFRDetalle").show();
}

function ocultarCFR() {
    $("#CFR").hide();
    $("#CFRDetalle").show();
}

function closeCFR() {
    $("#CFRDetalle").hide();
    $("#CFR").show();
}

function llenarCampoCFR() {
    $("#flete").val("400");
}

function closeCFR_openCIF() {
    $("#CFRDetalle").hide();
    $("#CFR").show();
    $("#CIF").hide();
    $("#CIFDetalle").show();
}

function ocultarCIF() {
    $("#CIF").hide();
    $("#CIFDetalle").show();
}

function closeCIF() {
    $("#CIFDetalle").hide();
    $("#CIF").show();
}

function llenarCampoCIF() {
    $("#prima").val("700");
}

function closeCIF_openDAP() {
    $("#CIFDetalle").hide();
    $("#CIF").show();
    $("#DAP").hide();
    $("#DAPDetalle").show();
}

function ocultarDAP() {
    $("#DAP").hide();
    $("#DAPDetalle").show();
}

function closeDAP() {
    $("#DAPDetalle").hide();
    $("#DAP").show();
}

function llenarCampoDAP() {
    $("#puerto").val("700");
}

function closeDAP_openDPU() {
    $("#DAPDetalle").hide();
    $("#DAP").show();
    $("#DPU").hide();
    $("#DPUDetalle").show();
}

function ocultarDPU() {
    $("#DPU").hide();
    $("#DPUDetalle").show();
}

function closeDPU() {
    $("#DPUDetalle").hide();
    $("#DPU").show();
}

function llenarCampoDPU() {
    $("#cliente").val("840");
}

function closeDPU_openDDP() {
    $("#DPUDetalle").hide();
    $("#DPU").show();
    $("#DDP").hide();
    $("#DDPDetalle").show();
}

function ocultarDDP() {
    $("#DDP").hide();
    $("#DDPDetalle").show();
}

function closeDDP() {
    $("#DDPDetalle").hide();
    $("#DDP").show();
}

function llenarCampoDDP() {
    $("#impuesto").val("840");
}

function closeDDP() {
    $("#DDPDetalle").hide();
    $("#DDP").show();
}

function showCardCosto() {
    $("#main").hide();
    $(".cardCosto").show();
}

function showCardCosto2() {
    $("#main").hide();
    $(".cardCosto").hide();
    $(".cardCosto2").show();
}

function showCardCosto3() {
    $("#main").hide();
    $(".cardCosto2").hide();
    $(".cardCosto3").show();
}

function showCardCosto4() {
    $("#main").hide();
    $(".cardCosto3").hide();
    $(".cardCosto4").show();
}

function showCardEnvase() {
    $("#main").hide();
    $(".cardEnvase").show();
}

function showCardEmpaque() {
    $("#main").hide();
    $(".cardEnvase").hide();
    $(".cardEmpaque").show();
}

function showCardEmbalaje() {
    $("#main").hide();
    $(".cardEmpaque").hide();
    $(".cardEmbalaje").show();
}

function showCardExworks() {
    $("#main").hide();
    $(".cardExworks").show();
}

function showCardFas() {
    $("#main").hide();
    $(".cardExworks").hide();
    $(".cardFas").show();
}

function showCardFob() {
    $("#main").hide();
    $(".cardFas").hide();
    $(".cardFob").show();
}

function showCardCFR() {
    $("#main").hide();
    $(".cardFob").hide();
    $(".cardCfr").show();
}

function showCardCIF() {
    $("#main").hide();
    $(".cardCFR").hide();
    $(".cardCif").show();
}

function showCardDAP() {
    $("#main").hide();
    $(".cardCif").hide();
    $(".cardDap").show();
}

function showCardDPU() {
    $("#main").hide();
    $(".cardDap").hide();
    $(".cardDpu").show();
}

function showCardDDP() {
    $("#main").hide();
    $(".cardDpu").hide();
    $(".cardDdp").show();
}
