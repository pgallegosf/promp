$(document).ready(function() {
    $("#proDirecta").show();
    $("#proEncargo").hide();
    $("#directa").click(function() {
        selectDirecta();
    });
    $("#encargo").click(function() {
        selectEncargo();
    });
    $("#btn-comenzar").click(function() {
        mostrarDocumento();
    });
    $("#btn-comenzarM").click(function() {
        mostrarDocumento();
    });
    $("#view-tabs").hide();
    $("#pDirecta").click(function() {
        MostrarProduccionDirecta();
    });
    $("#pEncargo").click(function() {
        MostrarProduccionEncargo();
    });
    $("#opciones").hide();
    $("#opcion-01").hide();
    $("#opcion-02").hide();
    $(".back").click(function() {
        regresar();
    });
});

function selectEncargo() {
    $("#directa").removeClass("active-product")
    $("#encargo").addClass("active-product")
    $("#proDirecta").hide();
    $("#proEncargo").show();
}

function selectDirecta() {
    $("#encargo").removeClass("active-product")
    $("#directa").addClass("active-product")
    $("#proEncargo").hide();
    $("#proDirecta").show();

}

function mostrarDocumento() {
    $("#view-empezar").hide();
    $("#view-tabs").show();
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
    }
}

function MostrarProduccionDirecta() {
    $("#main").hide();
    $("#opciones").show();
    $("#opcion-01").show();
}

function MostrarProduccionEncargo() {
    $("#main").hide();
    $("#opciones").show();
    $("#opcion-02").show();
}

function regresar() {
    $("#opciones").hide();
    $("#opcion-01").hide();
    $("#opcion-02").hide();
    $("#main").show();
}