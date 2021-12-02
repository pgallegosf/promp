$(document).ready(function () {
$('.card-ordenar').hide();    
$('.card-ordenar-movil').hide();    

$('.ptOrdenar').click(function (e) { 
    $('.card-ordenar').toggle();
    
});

$('.ptOrdenarMovil').click(function (e) { 
    $('.card-ordenar-movil').toggle();
    
});

});

$(function() {
    $('[data-bs-toggle="popover"]').popover({
        html: true,
        customClass: 'background-red',
        content: "<div class='ordenar mt-3 font-color-white'>Cambiar nombre</div><div class='ordenar mt-3 font-color-white'>Descargar</div><div class='ordenar mt-3 font-color-white'>Eliminar archivo</div>",
        placement: 'left'
    })
})