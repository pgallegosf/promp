$(document).ready(function() {
    $(".close-popover-simulacion").click(function (e) { 
        $(".popover-1").addClass('ocultar-popover');
      });  
  
    $(".popover-1").show();
  
    $('.close-popover').click(function () {
      $(".popover-1").toggle();
    });
  
  });