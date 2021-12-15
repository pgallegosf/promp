$(document).ready(function () {
    /*$('.card-tooltip').hide();
    $('.card-tooltip2').hide();
    $('.card-tooltip3').hide();
    $('.card-tooltip4').hide();
    $('.card-tooltip5').hide();*/
    
    $('.card-login').hide();
    
    
    $('.card-ordenar').hide();    
    $('.card-ordenar-movil').hide();    

    /*$('.ptOrdenar').click(function (e) { 
    $('.card-ordenar').toggle();
    
    });

    $('.ptOrdenarMovil').click(function (e) { 
    $('.card-ordenar-movil').toggle();
    
    });*/


    $('#optLogin').click(function (e) { 
        e.preventDefault();
        $('.card-login').toggle();
      }); 
/*
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
*/
  $('.rutaAerea').click(function (e) { 
    e.preventDefault();
    irListaSimulacion(1)
  }); 
  $('.rutaMaritima').click(function (e) { 
    e.preventDefault();
    irListaSimulacion(2)
  }); 
  $('.rutaTerrestre').click(function (e) { 
    e.preventDefault();
    irListaSimulacion(3)
  });
  $('.costoExportacion').click(function (e) { 
    e.preventDefault();
    irListaSimulacion(4)
  });
  $('.cubicaje').click(function (e) { 
    e.preventDefault();
    irListaSimulacion(5)
  }); 
  $('.directorio').click(function (e) { 
    e.preventDefault();
    irListaSimulacion(6)
  }); 
  $('.drawback').click(function (e) { 
    e.preventDefault();
    irListaSimulacion(7)
  });  

});




function irListaSimulacion(idHerramienta){
    switch(idHerramienta){
        case 1:
          sessionStorage.removeItem("idHerramienta");
          sessionStorage.setItem('idHerramienta', '1');
            break;
        case 2:
          sessionStorage.removeItem("idHerramienta");
          sessionStorage.setItem('idHerramienta', '2');
            break;
        case 3:
          sessionStorage.removeItem("idHerramienta");
          sessionStorage.setItem('idHerramienta', '3');
            break;
        case 4:
          sessionStorage.removeItem("idHerramienta");
          sessionStorage.setItem('idHerramienta', '4');
            break;
        case 5:
          sessionStorage.removeItem("idHerramienta");
          sessionStorage.setItem('idHerramienta', '5');
          break;
        case 6:
          sessionStorage.removeItem("idHerramienta");
          sessionStorage.setItem('idHerramienta', '6');
          break;
        default:
          sessionStorage.removeItem("idHerramienta");
          sessionStorage.setItem('idHerramienta', '7');
          
    }
    window.location.href="ListaSimulaciones.html";
}
