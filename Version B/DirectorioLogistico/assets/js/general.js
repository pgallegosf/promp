function CambiarTituloLogin(titulo){
  $('#tituloModalLogin').html(titulo);
}

$(document).ready(function() {


  
  $('.card-login').hide();
  $('.card-tooltip').hide();
  $('.card-tooltip2').hide();
  $('.card-tooltip3').hide();
  $('.card-tooltip4').hide();
  $('.card-tooltip5').hide();

  $('#btn_1').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip').toggle();
  });

  $('#btn_1_m').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip').toggle();
  });

  $('#btn_2').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip2').toggle();
  });

  $('#btn_2_m').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip2').toggle();
  });

  $('#btn_3').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip3').toggle();
  });

  $('#btn_3_m').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip3').toggle();
  });

  $('#btn_4').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip4').toggle();
  });

  $('#btn_4_m').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip4').toggle();
  });

  
  $('#btn_5').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip5').toggle();
  });

  $('#btn_5_m').click(function (e) { 
    e.preventDefault();
    $('.card-tooltip5').toggle();
  });

  $('#optLogin').click(function (e) { 
    e.preventDefault();
    $('.card-login').toggle();
  });

  $('.card-ordenar').hide();    
$('.card-ordenar-movil').hide();    

$('.ptOrdenar').click(function (e) { 
    $('.card-ordenar').toggle();
    
});

$('.ptOrdenarMovil').click(function (e) { 
    $('.card-ordenar-movil').toggle();
    
});


  $(".popover-1").show();
  $(".idPopoverNotificacionGuardar").click(function() {
    $(".popover").toggle();
});
$(".close-popover").click(function() {
  $(".popover").toggle();
});

$(".close-popover-simulacion").click(function (e) { 
  $(".popover-1").addClass('ocultar-popover');
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

$(function() {
  $('[data-bs-toggle="popover"]').popover({
      html: true,
      customClass: 'background-red',
      content: "<div class='ordenar mt-3 font-color-white'>Cambiar nombre</div><div class='ordenar mt-3 font-color-white'>Descargar</div><div class='ordenar mt-3 font-color-white'>Eliminar archivo</div>",
      placement: 'left'
  })
})

$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
  });

  