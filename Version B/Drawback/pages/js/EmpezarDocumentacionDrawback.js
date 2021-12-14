$(document).ready(function() {
    $('#menu').hide();
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
        $('#menu').show();
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

    $('#seccion-1').click(function (e) { 
        if ($('#icon-normal').css('display') == 'block') {
            $('#icon-normal').hide();
            $('#icon-abajo').show();
        } else {
            $('#icon-normal').show();
            $('#icon-abajo').hide();
        }
      
    });

    $('#seccion-2').click(function (e) { 
        console.log('entroooo');
        if ($('#icon-normal2').css('display') == 'block') {
            $('#icon-normal2').hide();
            $('#icon-abajo2').show();
        } else {
            $('#icon-normal2').show();
            $('#icon-abajo2').hide();
        }
     });

     $('#seccion-3').click(function (e) { 
        if ($('#icon-normal3').css('display') == 'block') { 
            $('#icon-normal3').hide();
            $('#icon-abajo3').show();
        } else {
            $('#icon-normal3').show();
            $('#icon-abajo3').hide();
        }

     });

    $('#btn-next1').click(function (e) { 
        $("#main").show();
        $("#opciones").hide();
        $('option-01').hide();
        
    });

    $('#btn-next2').click(function (e) { 
        $("#main").show();
        $("#opciones").hide();
        $('option-02').hide();
        
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