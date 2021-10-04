$(function() {
    $('#idPopoverNotificacion').popover({
        html: true,
        customClass: 'background-azul-promperu blanco',
        content: '<div onclick="ocultarNotificacion()" class="blanco close-notificacion" id="close-notificacion"><i class="fas fa-times posicion-close-notificacion"></i></div><div class="sin-margen-top mt-3 font-color-white">Las tarifas promedio mostradas son referenciales y no incluyen reajustes ni costos adicionales.</div>',
        placement: 'left'
    })
})
$(document).ready(function() {
    $("#close-notificacion").click(function () {
        console.log("close");
        $("#idPopoverNotificacion").trigger("click");
        $(".popover").hide();
    });
    $(".close-notificacion").click(function () {
        console.log("close");
        $("#idPopoverNotificacion").trigger("click");
        $(".popover").hide();
    });
});
function ocultarNotificacion(){
    console.log("close2");
    $("#idPopoverNotificacion").trigger("click");
    $(".popover").hide();
}