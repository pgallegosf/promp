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
            $(".empresa").css("display", "flex");
            $(".natural").css("display", "none");
            $("#flexRadioDefault3").prop("checked", false);
            $(".lblCorreoCorporativo").html("Correo corporativo");
        } else {
            $(".empresa").css("display", "none");
            $(".natural").css("display", "block");
            $("#flexRadioDefault3").prop("checked", true);
            $(".lblCorreoCorporativo").html("Correo electrónico");
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

function SeleccionarSector(sector){
    $("#txtsector").val(sector);
}
function SeleccionarTipoEmpresa(tipo){
    $("#txttipo").val(tipo);
}
function IrConfirmacionRegistro(){
    var flagDesdeResultado=sessionStorage.getItem("flagDesdeResultado");
    if(flagDesdeResultado==1){
        window.location.href="ConfirmarRegistroResultado.html";
    }
    else{
        window.location.href="ConfirmarRegistro.html";
    }
    sessionStorage.removeItem("flagDesdeResultado");
}
// function tipoEmpresa(event) {}