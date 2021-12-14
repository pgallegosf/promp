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

  $('.rutaAerea').click(function (e) { 
    e.preventDefault();
    irPaginaInicio(1)
  }); 
  $('.rutaMaritima').click(function (e) { 
    e.preventDefault();
    irPaginaInicio(2)
  }); 
  $('.rutaTerrestre').click(function (e) { 
    e.preventDefault();
    irPaginaInicio(3)
  });
  $('.costoExportacion').click(function (e) { 
    e.preventDefault();
    irPaginaInicio(4)
  });
  $('.cubicaje').click(function (e) { 
    e.preventDefault();
    irPaginaInicio(5)
  }); 
  $('.directorio').click(function (e) { 
    e.preventDefault();
    irPaginaInicio(6)
  }); 
  $('.drawback').click(function (e) { 
    e.preventDefault();
    irPaginaInicio(7)
  });  

});




function irPaginaInicio(idHerramienta){
    switch(idHerramienta){
        case 1:
            window.location.href="../../RutasAerea/Pages/Rutas_aerea.html";
            break;
        case 2:
            window.location.href="../../RutasMaritimas/Pages/Rutas_maritimas.html";
            break;
        case 3:
            window.location.href="../../RutasTerrestre/Pages/Rutas_terrestre.html";
            break;
        case 4:
            window.location.href="../../Costo/Pages/inicio.html";
            break;
        case 5:
            window.location.href="../../Cubicaje/Pages/Cubicaje.html";
            break;
        case 6:
            window.location.href="../../DirectorioLogistico/Pages/DirectorioLogistico.html";
        break;
            default:
            window.location.href="../../Drawback/Pages/Drawback.html";
    }
}
