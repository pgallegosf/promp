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




    // Elementos ocultados
    $(".check").hide();
    $("#insumoLiberado").hide();
    $("#view-comercializadora").hide();
    $("#view-select-Continente").hide();
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
    $(".btn-next").show();
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