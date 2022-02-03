$(document).ready(function() {
	/*$(".").click(function () {
        LimpiarPoppupPuerto();
        //ShowPopUp('divPopup'); 

        $('.reveal-modal-bg').css({ transition: "all 0.4s linear", height: "100%", opacity: "1" });

        $('#txtNombre').focus();
    })*/
    $("#t-option").prop("checked", true);
    $("#t-option2-movil").prop("checked", true);
    
    $("#t-option").click(function () {
        mostrarSucursal(); 
    });

    $("#t-option2").click(function () {
        ocultarSucursal();  
    });

    $("#t-option-movil").click(function () {
        mostrarSucursal(); 
    });

    $("#t-option2-movil").click(function () {
        ocultarSucursal();  
    });

    $(".siSucursales").hide();
    //$(".tab-movil").hide();
    
    contador("#txtDescripcion","#numerocaracteres");
    
    var $fileInput = $('.file-input');
    var $droparea = $('.file-drop-area');

    // highlight drag area
    $fileInput.on('dragenter focus click', function() {
    $droparea.addClass('is-active');
    });

    // back to normal state
    $fileInput.on('dragleave blur drop', function() {
    $droparea.removeClass('is-active');
    });

    // change inner text
    $fileInput.on('change', function() {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        //$textContainer.text(fileName);
        $textContainer.html('<div class="color-primary" style="display: grid;text-align: center;"><i><img class="pb-2" src="../assets/img/icon-nav.svg"></i><label class="font-H5-medium rojo-promperu">Archivo adjuntado <br> correctamente</label></div>');
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
    
});
    
});

function clickTab(numberTab){
    switch (numberTab) {
        case 1:
            $( "#tab1" ).trigger( "click" );
            break;
        case 2:
            $( "#tab2" ).trigger( "click" );
          break;
        case 3:
            $( "#tab3" ).trigger( "click" );
          break;
        default:
            $( "#tab4" ).trigger( "click" );
          break;
      }	
}

function contador(idtextarea, idcontador){

	function update_contador(idtextarea, idcontador){

		var contador = $(idcontador);
		var ta = $(idtextarea);
		
		contador.html(ta.val().length);

	}

	$(idtextarea).keyup(function(){
		update_contador(idtextarea, idcontador);
	});
	
	$(idtextarea).change(function(){
		update_contador(idtextarea, idcontador);
	});
		
}

function mostrarSucursal(){
	$(".siSucursales").show();
	
}
function ocultarSucursal(){
	$(".siSucursales").hide();
}
