var viewGlobal = document.getElementById("view-global") //Div que tiene toda la pagina
var inputPtoOrigen = document.getElementById("ptOrigen") // Variable id del combo puerto de origen
var pDestino = document.getElementById("puertoDestino") // Variable id del combo puerto de destino
var comPaisDestino = document.getElementById("comboPais") // Variable id del combo detalle de destino
var cmbPDestino = document.getElementById("comPais") // Variable id del combo mostrar detalle de destino
var selectPais = document.getElementById("view-select-Pais") //Variable para mostrar el detalle de seleccion de pais
var mostrarselectPais = document.getElementById("view-selectPais") //Variable para mostrar el detalle de seleccion de pais
var selectPuerto = document.getElementById("selectPuerto") //variable id selectpuerto permitira mostrar el segundo detalle de la seleccion
var puertoSelect = document.getElementById("puertoSelect") //variable id selectpuerto permitira mostrar el segundo detalle de la seleccion
var continente = document.getElementById("idContinente") // Variable id del detalle de continentes
var detPais = document.getElementById("cmbPais") // Variable id del detalle de paises
var viewRutas = document.getElementById("view-rutas") //Variable de id mostrar las rutas
var resulBusqueda = document.getElementById("view-busqueda") // variable de id resultado de busqueda de ruta
var viewLineaTiempoDesktop = document.getElementById("view-line-time-desktop") // Variable id para mostrar linea de tiempo
var inputPuertDest = document.getElementById("puertoDestino") //Variable del input que funciona como select para el puerto de destino
var inputPDest = document.getElementById("mostrarpuertoDestino") //Variable del input que funciona como select para el puerto de destino
var btnRuta = document.getElementById("btn-rutas") //Boton de mostrar rutas
var desktop = document.getElementById("container-desktop") //Mostrara el diseño para escritorio
var ptoOrigen = document.getElementById("selectPuertoOrigen") //Mostrara select puerto origen personlizado
var cmbPtoDestino = document.getElementById("cmbSelectPuerto")
var btnVolverBuscar = document.getElementById("btn-volver-buscar")
var btnOrdenar = document.getElementById("btn-Ordenar")
var rutasBuscadas = document.getElementById("rutasBuscadas");
var viewRutaDesktop = document.getElementById("vistaRutaDesktop")
var rutaEncontradas = document.getElementById("rutaEncontrada")
var footerDesktop = document.getElementById("footer-Desktop")
var lineaNavieraDesktop = document.getElementById("linea-naviera-desktop")
var opResulBuscarDesktop = document.getElementById("OpcionesResulBusqueda-Desktop")

// Variables  vista movil
var detalleMovil = document.getElementById("container-movil")
var btnBuscarMovil = document.getElementById("btn-buscar-movil")
var buscarpuertos = document.getElementById("busquedaPuertos");
var mostrarPtoOrigenMovil = document.getElementById("puertoOrigen-Movil")
var mostrarPtoDestinoMovil = document.getElementById("PuertoDestino-movil")
var mostrarSelectDestinoPais = document.getElementById("select-destino-pais")
var mostrarSelectDestinoCiudad = document.getElementById("select-destino-ciudad")
var imgEmbarcacion = document.getElementById("bg-embarcacion")
var atras = document.getElementById("retornarContinente")
var contAmerica = document.getElementById("conAmerica")
var contEuropa = document.getElementById("conEuropa")
var viewRutaMovil = document.getElementById("vistaRutaMovil")
var footerMovil = document.getElementById("footer-Movil")
var viewLineaTiempoMovil = document.getElementById("view-line-time-movil") // Variable id para mostrar linea de tiempo movil
var lineaNavieraMovil = document.getElementById("linea-naviera-movil")
var opResulBuscarMovil = document.getElementById("OpcionesResulBusqueda-Movil")


function cargarAjustes() {
    if (screen.width < 1024 || screen.width < 1280) {
        desktop.className = "d-none"
        detalleMovil.className = "d-display"
        btnBuscarMovil.className = " centrado d-display"
        btnVolverBuscar.className = "d-none"
        btnOrdenar.className = "d-none"
        rutasBuscadas.className = "d-none"
        imgEmbarcacion.className = "card-header pb-0 img-embarcacion-movil"
        lineaNavieraDesktop.className = "d-none"
        lineaNavieraMovil.className = "d-display"

        footerDesktop.className = "d-none"
        footerMovil.className = "d-display"
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
        ptoOrigen.className = "card h-100 p-3 card-select-origen d-display"
    }
}

function seleccionPuertoOrigen() {
    ptoOrigen.className = "d-none"
    inputPtoOrigen.value = "Paita, Piura"
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

function regresarDetalleSelect() {
    selectPuerto.className = "row d-none"
    comPaisDestino.className = "row d-display"
}

function mostrarRutas() {
    viewGlobal.className = "d-none"
    resulBusqueda.className = "d-display"
}

function volverBuscar() {
    resulBusqueda.className = "d-none"
    viewGlobal.className = "d-display"
}

function verDetalle() {
    resulBusqueda.className = "d-none"
    if (screen.width < 1024 || screen.width < 1280) {
        viewLineaTiempoDesktop.className = "d-none"
        viewLineaTiempoMovil.className = "d-display"
        opResulBuscarDesktop.className = "d-none"
        opResulBuscarMovil.className = "d-display"
    } else {
        viewLineaTiempoDesktop.className = "d-display"
    }
    // viewLineaTiempoDesktop.className = "d-display"
    // viewLineaTiempoMovil.className = "d-display"
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
//Mostrar vistas movil
function mostrarPaises(dato) {
    mostrarPtoOrigenMovil.className = "d-none"
    mostrarPtoDestinoMovil.className = "d-display"
}

function mostrarPuertos(dato) {
    mostrarSelectDestinoPais.className = "d-none"
    mostrarSelectDestinoCiudad.className = "d-display"
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

