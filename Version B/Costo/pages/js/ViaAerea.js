$(document).ready(function() {
    $(".bulto").click(function() {
        mostrarSelect();
    });
    $(".producto").click(function() {
        ocultarSelect();
        $("#bulto").val("Caja personalizada");
        $("#medida").show();
    });
    $(".bultoM").click(function() {
        mostrarSelectM();
    });
    $(".productoM").click(function() {
        ocultarSelectM();
        $("#bultoM").val("Caja personalizada");
    });
    $(".paleitizado").click(function() {
        $("#Directo").hide();
        $("#Paleitizada").show();
    });
    $(".pallete").click(function() {
        $("#tipoPallete").show();
    });
    $(".tipPallete").click(function() {
        ocultarPaleitizada();
        $("#pallete").val("Pallete Europeo (120 x 80 x 200 cm)");
    });
    $("#tipoBulto").hide()
    $("#tipoBultoM").hide()
    $("#medida").hide()
    $("#Paleitizada").hide();
    $("#tipoPallete").hide();

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