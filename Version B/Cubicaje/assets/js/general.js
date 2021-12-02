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



    $('.controlSelect2').select2({
		tags: "true",
  placeholder: "Seleccione una opción"
	});
	$('.select2-selection__arrow').html('<i class="fas fa-angle-down icon-select">');
	//$('.select2-container--focus select2-container--open').find('i').html('<i class="fas fa-angle-down icon-select">');

  $('#guardarFicha').click(function () {
    CambiarTituloLogin("Para guardar debe iniciar sesión");
  });
  $('#btnValorar').click(function () {
    CambiarTituloLogin("Para calificar debe iniciar sesión");
  });


  

});


$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
  });

  