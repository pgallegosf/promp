$(document).ready(function() {
    $("#div-boton").click(function() {
        mostrarEmpezarSecond();
    });
    $("#next").click(function() {
        mostrarEmpezarTercero();
    });
    $(".btn-volver").click(function() {
        volver();
    });
    $("#btn-volver2").click(function() {
        volver2();
    });
    $("#view-empezar-second").hide();
    $("#view-empezar-tercero").hide();
});

function mostrarEmpezarSecond() {
    $("#view-empezar-principal").hide();
    $("#view-empezar-second").show();
}

function mostrarEmpezarTercero() {
    $("#view-empezar-second").hide();
    $("#view-empezar-tercero").show();
}

function volver() {
    $("#view-empezar-second").hide();
    $("#view-empezar-principal").show();
}

function volver2() {
    $("#view-empezar-tercero").hide();
    $("#view-empezar-second").show();
}