var indicadorDashboard=true;
$(function() {
    $('#idPopoverNotificacion').popover({
        html: true,
        customClass: 'background-azul-promperu blanco',
        content: '<div onclick="ocultarNotificacion()" class="blanco close-notificacion" id="close-notificacion"><i class="fas fa-times posicion-close-notificacion"></i></div><div class="sin-margen-top mt-3 font-color-white">Las tarifas promedio mostradas son referenciales y no incluyen reajustes ni costos adicionales.</div>',
        placement: 'left'
    })
    $(".a-menu").click(function() {
        mostrarDashboard();
    });
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
    $(".idPopoverNotificacionGuardar").click(function() {
        $(".popover").toggle();
    });
    $(".close-popover").click(function() {
        $(".popover").toggle();
    });
    $('.btn-enviar-calificacion').click(function() {
        setTimeout(function(){ 
            $('#m-informativo-confirmacion').modal('toggle');
            $('#m-informativo').modal('toggle');
           // $(".modal ").removeClass('show');
        }, 2000);
    });
    $('.btn-enviar-calificacion-2').click(function() {
        setTimeout(function(){ 
            $('#m-opinion-confirmacion').modal('toggle');
            $('#m-opinion').modal('toggle');
           // $(".modal ").removeClass('show');
        }, 2000);
    });
});
function ocultarNotificacion(){
    console.log("close2");
    $("#idPopoverNotificacion").trigger("click");
    $(".popover").hide();
}
function mostrarDashboard() {
    if(indicadorDashboard){
        $(".modal-dashboard").addClass('show');
        $(".modal-dashboard").show();
    }else{
        $(".modal-dashboard").removeClass('show');
        $(".modal-dashboard").hide();
    }
    indicadorDashboard=!indicadorDashboard;

}