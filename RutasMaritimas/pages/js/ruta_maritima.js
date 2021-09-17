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
var viewLineaTiempo = document.getElementById("view-line-time") // Variable id para mostrar linea de tiempo
var inputPuertDest = document.getElementById("puertoDestino") //Variable del input que funciona como select para el puerto de destino
var inputPDest = document.getElementById("mostrarpuertoDestino") //Variable del input que funciona como select para el puerto de destino
var btnRuta = document.getElementById("btn-rutas") //Boton de mostrar rutas
var desktop = document.getElementById("container-desktop") //Mostrara el diseño para escritorio
var ptoOrigen = document.getElementById("selectPuertoOrigen") //Mostrara select puerto origen personlizado
var cmbPtoDestino = document.getElementById("cmbSelectPuerto")

// Variables  vista movil
var detalleMovil = document.getElementById("container-movil")
var btnBuscarMovil = document.getElementById("btn-buscar-movil")
var buscarpuertos = document.getElementById("busquedaPuertos");


function cargarAjustes() {
    if (screen.width < 1024 || screen.width < 1280) {
        desktop.className = "d-none"
        detalleMovil.className = "d-display"
        btnBuscarMovil.className = " centrado d-display"
    }
    // else {
    //     detalleMovil.className="d-display"
    //     btnBuscarMovil.className="d-display"
    // }
}

function mostrarSelectPuertoOrigen() {
    if (screen.width < 1024 || screen.width < 1280) {
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
    viewLineaTiempo.className = "d-display"
}
//Tercer combo personalizado
function mostrarSelectPDestino(dato) {
    mostrarselectPais.className = "card h-100 p-3 card-select-buscar d-display"
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
    viewRutas.className = "d-display"
    btnRuta.className = "d-none"
}