$(document).ready(function() {
    
    $(".btn-ingresar").click(function (e) { 
        $(".icon-user").show();
        $(".div-link-simulaciones").show();
        $(".text-iniciar-sesion").html("Cerrar sesión");
        $(".popover").show();
        $(".modal-iniciar-sesion").hide();
        if($('.modal-backdrop').hasClass('show')) {
            $('.modal-backdrop').removeClass('show');
            $('.modal-backdrop').addClass('hide');
        }
      });
      $(".popover").hide();
      $(".idPopoverNotificacionGuardar").click(function() {
        $(".popover").toggle();
    });
    $(".close-popover").click(function() {
        $(".popover").toggle();
    });
});