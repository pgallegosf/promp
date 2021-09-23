var viewGlobal = document.getElementById("view-global") //Div que tiene toda la pagina
var resulBusqueda = document.getElementById("view-busqueda") // variable de id resultado de busqueda de ruta
var inputPuertDest = document.getElementById("puertoDestino") //Variable del input que funciona como select para el puerto de destino
var inputPDest = document.getElementById("mostrarpuertoDestino") //Variable del input que funciona como select para el puerto de destino
var btnRuta = document.getElementById("btn-rutas") //Boton de mostrar rutas
var rutasBuscadas = document.getElementById("rutasBuscadas");
var footerDesktop = document.getElementById("footer-Desktop")
var verListados = document.getElementById("Listado")
var ptoOrigen = document.getElementById("view-pto-origen")
var ptoDestino = document.getElementById("view-pto-destino")
var inputPuertoOrigen = document.getElementById("RTptoOrigen")
var inputPuertoDestino = document.getElementById("RTptoDestino")
var inputRTOrigen = document.getElementById("RTptoOrigen-mapa")
var inputRTDestino = document.getElementById("RTptoDestino-mapa")
var ptoOrigenMapa = document.getElementById("view-pto-origen-mapa")
var ptoDestinoMapa = document.getElementById("view-pto-destino-mapa")
var imgPrimero = document.getElementById("img-a")
var imgSegundo = document.getElementById("img-b")
var puertoGlobal = document.getElementById("Puertos-Global")
var puertoGlobal = document.getElementById("Puertos-Global")

var opResulBuscarDesktop = document.getElementById("OpcionesResulBusqueda-Desktop")





// Variables  vista movil
var puertoOrigenCiudad = document.getElementById("puertoOrigen-Ciudad")
var puertoDestinoCiudad = document.getElementById("PuertoDestino-Internacional")
var inputMovilPOCiudad = document.getElementById("PO-Ciudad")
var inputMovilPDCiudad = document.getElementById("PD-Ciudad")
var imgEmbarcacion = document.getElementById("bg-embarcacion")
var resulBusquedaMovil = document.getElementById("view-busqueda-movil")
var footerMovil = document.getElementById("footer-Movil")

var opResulBuscarMovil = document.getElementById("OpcionesResulBusqueda-Movil")


function cargarAjustes() {
    if (screen.width < 1024 || screen.width < 1280) {
        rutasBuscadas.className = "d-none"
    }
    // else {
    //     detalleMovil.className="d-display"
    //     btnBuscarMovil.className="d-display"
    // }
}

function mostrarSelectPuertoOrigen() {
    if (screen.width < 1024 || screen.width < 1280) {
        viewGlobal.className = "d-none"
        comPaisDestino.className = "d-none"
        buscarpuertos.className = "d-display"
    } else {
        buscarpuertos.className = "d-none"
        ptoOrigen.className = "col-lg-8 col-md-8 col-xs-12 card h-100 p-3 card-select-origen d-display"
    }
}

function seleccionarServicio(nombre) {
    ptoOrigen.className = "d-none";
    inputPtoOrigen.value = nombre;
}

function mostrarSelectPuertoDestino() {
    if (screen.width < 1024 || screen.width < 1280) {
        selectPais.className = "d-none"
        buscarpuertos.className = "d-display"
    } else {
        buscarpuertos.className = "d-none"
        selectPais.className = "card h-100 p-3 card-select d-display"
    }
}

function capValueOptionSelect(dato) {
    detPais.className = "row d-none"
    cmbPtoDestino.className = "row d-display"
}

function capValueOptionSelectsecond(dato) {
    selectPais.className = "card h-100 p-3 card-select d-none"
    inputPuertDest.value = "Seattle - Estados Unidos"
}

function mostrarRutas() {
    viewGlobal.className = "d-none"
    if (screen.width < 1024 || screen.width1280) {
        resulBusqueda.className = "d-none"
        resulBusquedaMovil.className = "d-display"
        footerDesktop.className = "d-none"
        footerMovil.className = "d-display"
    } else {
        resulBusqueda.className = "d-display"
    }
}
//Tercer combo personalizado
function mostrarSelectPDestino(dato) {
    if (screen.width < 1024 || screen.width < 1280) {
        viewGlobal.className = "d-none"
        mostrarPtoOrigenMovil.className = "d-none"
        buscarpuertos.className = "d-display"
        mostrarPtoDestinoMovil.className = "d-display"
        inputPDest.value = "Seattle, Estados unidos"
    } else {
        mostrarselectPais.className = "card h-100 p-3 card-select-buscar d-display"
    }

}

function capturarValorOptionSelect(dato) {
    comPaisDestino.className = "card h-100 p-3 card-select d-none"
    puertoSelect.className = "row d-display"
}

function capturarValorOptionSelectsecond(dato) {
    mostrarselectPais.className = "card h-100 p-3 card-select d-none"
    inputPDest.value = "Seattle - Estados Unidos"
}

function regresarDetalSelect() {
    puertoSelect.className = "row d-none"
    cmbPDestino.className = "row d-display"
}

function mostrarRutasDestino() {
    if (screen.width < 1024 || screen.width < 1280) {
        viewRutas.className = "d-display"
        viewRutaMovil.className = "d-display"
    } else {
        viewRutas.className = "d-display"
        viewRutaDesktop.className = "d-display"
        rutaEncontradas.className = "d-display mt-12"
    }
    btnRuta.className = "d-none"
}

function ViewSelectPtoOrigen() {
    if (screen.width < 1024 || screen.width < 1280) {
        viewGlobal.className = "d-none"
        puertoGlobal.className = "d-display"
    } else {
        ptoOrigen.className = "d-display"
    }
}

function ViewSelectPtoDestino() {
    if (screen.width < 1024 || screen.width < 1280) {
        ptoDestinoMapa.className = "d-display"
    } else {
        ptoDestino.className = "d-display"
    }
}

function selectCiudad() {
    ptoOrigen.className = "d-none"
    inputPuertoOrigen.value = "Paita"

}

function selectPuertos() {
    ptoDestino.className = "d-none"
    inputPuertoDestino.value = "Callao"

}

function ViewSelectPtoOrigenMapa() {
    if (screen.width < 1024 || screen.width < 1280) {
        // selectPais.className = "d-none"
        // buscarpuertos.className = "d-display"
    } else {
        ptoOrigenMapa.className = "d-display"
    }
}

function ViewSelectPtoDestinoMapa() {
    if (screen.width < 1024 || screen.width < 1280) {
        // selectPais.className = "d-none"
        // buscarpuertos.className = "d-display"
    } else {
        ptoDestinoMapa.className = "d-display"
    }
}














//Mostrar vistas movil
function mostrarPaises(dato) {
    if (screen.width < 1024 || scree.width < 1280) {

        puertoOrigenCiudad.className = "d-none"
        inputPuertoOrigen.value = "Paita"
        puertoDestinoCiudad.className = "d-display"
        inputRTOrigen.value = "Paita"
    } else {
        if (inputPuertoOrigen.focus() = true) {
            alert('ok')
            ptoOrigen.className = "d-display"
        } else if (inputRTOrigen.focus() = true) {
            alert('aqui')
            inputRTOrigen.className = "d-display"
        }
        mostrarPtoOrigenMovil.className = "d-none"
        ptoOrigenMapa.className = "d-none"
    }
}

function mostrarPuertos(dato) {
    if (screen.width < 1024 || screen.width < 1280) {
        puertoDestinoCiudad.className = "d-none"
        inputPuertoDestino.value = "Callao"
        inputRTDestino.value = "Callao"
        puertoOrigenCiudad.className = "d-display"
        puertoGlobal.className = "d-none"
        viewGlobal.className = "d-display"
    } else {
        mostrarSelectDestinoPais.className = "d-none"
        mostrarSelectDestinoCiudad.className = "d-display"
        ptoDestinoMapa.className = "d-none"
    }
    imgPrimero.className = "d-none"
    imgSegundo.className = "img d-display"
}

function obtenerDatosSeleccionados(dato) {
    buscarpuertos.className = "d-none"
    viewGlobal.className = "d-display"
    inputPtoOrigen.value = "Paita, Piura"
    pDestino.value = "Seattle, Estados Unidos"
}

function retornarContinente() {
    mostrarSelectDestinoCiudad.className = "d-none"
    mostrarSelectDestinoPais.className = "d-display"
}

function cambiarContinente(dato) {
    let America = document.getElementById("America").innerText
    let Europa = document.getElementById("Europa").innerText
        // let Asia = document.getElementById("Asia")
        // let Africa = document.getElementById("Africa")
        // let Oceania = document.getElementById("Oceania")

    if (screen.width < 1024 || screen.width < 1280) {
        if (America) {
            contAmerica.className = "d-display"
            contEuropa.className = "d-none"
            console.log(America);
        } else {
            contAmerica.className = "d-none"
            contEuropa.className = "d-display"
            console.log(Europa);
        }
        // clase.className = "col-2 div-left select-cmb-paisContinente-movil continente"
    } else {

    }
}

function mostrarListado() {
    viewGlobal.className = "d-none"
    verListados.className = "d-display"
}

function mostrarOperadorLogistico() {
    viewGlobal.className = "d-none"
    resulBusqueda.className = "d-none"
    verListados.className = "d-display"
}

///////////////////////////////////////////////////////////////////////////


$(document).ready(function() {
    $(".busquedaAvanzada").hide();
    /*$(".").click(function () {
        LimpiarPoppupPuerto();
        //ShowPopUp('divPopup'); 

        $('.reveal-modal-bg').css({ transition: "all 0.4s linear", height: "100%", opacity: "1" });

        $('#txtNombre').focus();
    })*/
});

function mostrarBusquedaAvanzada() {
    $(".busquedaNormal").hide();
    $(".busquedaAvanzada").show();

}

function ocultarBusquedaAvanzada() {
    $(".busquedaAvanzada").hide();
    $(".busquedaNormal").show();
}