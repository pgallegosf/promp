$(document).ready(function() {

    $("#search").click(function() {
        mostrarSearch();
    });

    $("#buscador").click(function() {
        ocultarSearch();
    });

    $("#search").show();
    $("#buscador").hide();
});

function mostrarSearch() {
    $("#buscador").show();
    $("#search").hide();

}

function ocultarSearch() {
    $("#buscador").hide();
    $("#search").show();
}

$(function() {
    $('[data-bs-toggle="popover"]').popover({
        html: true,
        customClass: 'background-red',
        content: "<div class='ordenar mt-3 font-color-white'>Cambiar nombre</div><div class='ordenar mt-3 font-color-white'>Descargar</div><div class='ordenar mt-3 font-color-white'>Eliminar archivo</div>",
        placement: 'left'
    })
})