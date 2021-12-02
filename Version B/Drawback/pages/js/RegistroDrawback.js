$(document).ready(function() {
    $(".text-correo").click(function() {
        recuperarPass();
    });
    $(".txtsector").click(function(e) {
        e.stopPropagation();
        showCardDistribuidor();
    });
    $(".txttipo").click(function(e) {
        e.stopPropagation();
        showCardTipo();
    });
    $("body").click(function() {
        closeCardEmpresa();
    });
    $(".chkEmpresa").click(function() {
        var valor = $(this).val();
        if (valor == "0") {
            $(".natural").css("display", "none");
            $("#flexRadioDefault3").prop("checked", false);
        } else {
            $(".natural").css("display", "block");
            $("#flexRadioDefault3").prop("checked", true);
        }
    });
    //Radiobutton activado
    $("#flexRadioDefault1").prop("checked", true);
    // elementos ocultos
    $(".card-empresa").hide();
    $(".natural").hide();
});

function showCardDistribuidor() {
    $(".card-distribuidor").show();
}

function showCardTipo() {
    $(".card-tipo").show();
}

function closeCardEmpresa() {
    $(".card-distribuidor").hide();
    $(".card-tipo").hide();
}

// function tipoEmpresa(event) {}