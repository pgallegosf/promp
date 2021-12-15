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

  $('.option-select').click(function (e) { 
    $('#selectPuertoOrigen').addClass('ocultar-popover');
  });

  $('#optLogin').click(function (e) { 
    e.preventDefault();
    $('.card-login').toggle();
  });

  $('#flush-headingOne').hover(function () {
      // over
      $('.div-beneficiario').addClass('show');
    }, function () {
      // out
      $('.div-beneficiario').removeClass('show');
    }
  );

  $('#flush-headingtwo').hover(function () {
      // over
      $('#flush-collapseTwo').addClass('show');
    }, function () {
      // out
      $('#flush-collapseTwo').removeClass('show');
    }
  );

  $('#flush-heading3').hover(function () {
      // over
      $('#flush-collapseThree').addClass('show');
    }, function () {
      // out
      $('#flush-collapseThree').removeClass('show');
    }
  );

  $(".idPopoverNotificacionGuardar").click(function() {
    $(".popover").toggle();
});
$(".close-popover").click(function() {
  $(".popover").hide();
});

$(".close-popover-simulacion").click(function (e) { 
  $(".popover-1").addClass('ocultar-popover');
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

  