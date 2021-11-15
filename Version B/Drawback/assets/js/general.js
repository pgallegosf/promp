function CambiarTituloLogin(titulo){
  $('#tituloModalLogin').html(titulo);
}

$(document).ready(function() {
  
  $(".idPopoverNotificacionGuardar").click(function() {
    $(".popover").toggle();
});
$(".close-popover").click(function() {
  $(".popover").toggle();
});
  $(".popover-1").show();
    $('.controlSelect2').select2({
		tags: "true",
  placeholder: "Seleccione una opción"
	});
	$('.select2-selection__arrow').html('<i class="fas fa-angle-down icon-select">');
	//$('.select2-container--focus select2-container--open').find('i').html('<i class="fas fa-angle-down icon-select">');

  $('#guardarFicha').click(function () {
    CambiarTituloLogin("Para guardar debe iniciar sesión");
  });

  $('.close-popover').click(function () {
    $(".popover-1").toggle();
  })

  $('#opt1').click(function () {
    $("#slide-1").show();
    $("#slide-2").hide();
    $("#slide-3").hide();
    $('#opt1 i').addClass('active-slider');
    $('#opt2 i').removeClass('active-slider');
    $('#opt3 i').removeClass('active-slider');
  });

  $('#opt2').click(function () {
    $("#slide-1").hide();
    $("#slide-3").hide();
    $("#slide-2").show();
    $('#opt1 i').removeClass('active-slider');
    $('#opt3 i').removeClass('active-slider');
    $('#opt2 i').addClass('active-slider');
  });

  $('#opt3').click(function () {
    $("#slide-1").hide();
    $("#slide-2").hide();
    $("#slide-3").show();
    $('#opt1 i').removeClass('active-slider');
    $('#opt2 i').removeClass('active-slider');
    $('#opt3 i').addClass('active-slider');
  });

  $('#btnValorar').click(function () {
    CambiarTituloLogin("Para calificar debe iniciar sesión");
  });


  

});

$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
  });

  