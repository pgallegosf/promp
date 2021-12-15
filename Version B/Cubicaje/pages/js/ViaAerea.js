$(document).ready(function() {
    $('[data-toggle="popover"]').ggpopover();
    $(".bulto").click(function() {
        mostrarSelect();
    });
    $(".producto").click(function() {
        ocultarSelect();
        $("#bulto").val("Caja personalizada");
        $("#medida").css("visibility", "visible");
    });
    $(".bultoM").click(function() {
        mostrarSelectM();
    });
    $(".productoM").click(function() {
        ocultarSelectM();
        $("#bultoM").val("Caja personalizada");
        $("#medidam").css("visibility", "visible");
    });
    $(".paleitizado").click(function() {
        $("#Directo").hide();
        $("#Paleitizada").show();
    });
    $(".pallete").click(function() {
        $("#tipoPallete").show();
    });
    $(".palleteM").click(function() {
        $("#tipoPalleteM").show();
    });
    $(".tipPallete").click(function() {
        ocultarPaleitizada();
        $('.largo').addClass('negro-promperu');
        $('.ancho').addClass('negro-promperu');
        $('.alto').addClass('negro-promperu');
        $('.largo').removeClass('gris-promperu');
        $('.ancho').removeClass('gris-promperu');
        $('.alto').removeClass('gris-promperu');
        $("#pallete").val("Pallete Europeo (120 x 80 x 200 cm)");
    });
    $(".tipPalleteM").click(function() {
        ocultarPaleitizada();
        $('.largom').addClass('negro-promperu');
        $('.anchom').addClass('negro-promperu');
        $('.altom').addClass('negro-promperu');
        $('.largom').removeClass('gris-promperu');
        $('.anchom').removeClass('gris-promperu');
        $('.altom').removeClass('gris-promperu');
        $("#palleteM").val("Pallete Europeo (120 x 80 x 200 cm)");
    });
    $("#tipoBulto").hide()
    $("#tipoBultoM").hide()
    $("#medida").css("visibility", "hidden");
    $("#medidam").css("visibility", "hidden");
    $("#Paleitizada").hide();
    $("#tipoPallete").hide();
    $("#tipoPalleteM").hide();

    $('#add-bulto').click(function (e) { 
        $('#bulto2').show();
    });

    $('#add-bultom').click(function (e) { 
        $('#continuar').hide();
        $('#bulto2m').show();
    });

    $('#borrar').click(function (e) { 
        $('#bulto2').hide();
    });

    $('#borrarm').click(function (e) { 
        $('#continuar').show();
        $('#bulto2m').hide();
    });

    $(".accordion-header").dblclick(function() {
        var valor = 3;
        switch (valor) {
            case 3:
                $("#tab3").trigger("click");
                break;
        }
    });
    $("#add-Insumo").click(function() {
        var valor = 1;
        switch (valor) {
            case 1:
                $("#tab1").trigger("click");
                break;
        }
    });
});




function mostrarSelect() {
    $("#tipoBulto").show()
}

function ocultarSelect() {
    $("#tipoBulto").hide()
}

function mostrarSelectM() {
    $("#tipoBultoM").show()
}

function ocultarSelectM() {
    $("#tipoBultoM").hide()
}

function ocultarPaleitizada() {
    $("#tipoPallete").hide()
    $("#tipoPalleteM").hide()
}

function clickTab(numberTab) {
    console.log(numberTab);
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
    }
}

function tipocarga(text) {
    if (text == 'carga seca') {
        localStorage.removeItem('tipo');
        localStorage.setItem('tipo', 'carga_seca');
    } else {
        localStorage.removeItem('tipo');
        localStorage.setItem('tipo', 'carga_refri');
    }
    $("#tab2").trigger("click");
}

function showresult() {
    var text = localStorage.getItem('tipo');
    console.log('entroo', text);
    if (text == 'carga_seca') {
        console.log('entroo seco');
        window.location.href='ResultadoCubicaje.html';
    } else {
        console.log('entroo ref');
        window.location.href='ResultadoCubicaje_1.html';
    }
}