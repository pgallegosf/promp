$(document).ready(function () {
    $('.card-tooltip').hide();
    $('.card-tooltip2').hide();
    $('.card-tooltip3').hide();
    $('.card-tooltip4').hide();
    $('.card-tooltip5').hide();
    $('.card-login').hide();

    $('.card-ordenar').hide();    
    $('.card-ordenar-movil').hide();    

    $('.ptOrdenar').click(function (e) { 
    $('.card-ordenar').toggle();
    
    });

    $('.ptOrdenarMovil').click(function (e) { 
    $('.card-ordenar-movil').toggle();
    
    });


    $('#optLogin').click(function (e) { 
        e.preventDefault();
        $('.card-login').toggle();
      }); 

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


});