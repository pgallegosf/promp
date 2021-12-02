$(document).ready(function() {

    $("#flexRadioDefault1").click(function() {
        mostrarSucursal();
    });

    $("#flexRadioDefault2").click(function() {
        ocultarSucursal();
    });

    $(".empresa").show();
    $(".natural").hide();
});

function mostrarSucursal() {
    $(".empresa").show();
    $(".natural").hide();

}

function ocultarSucursal() {
    $(".empresa").hide();
    $(".natural").show();
}