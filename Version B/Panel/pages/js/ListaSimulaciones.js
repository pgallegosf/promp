$(document).ready(function () {

    VerificarHerramienta();
$('.card-ordenar').hide();    
$('.card-ordenar-movil').hide();    

$('.ptOrdenar').click(function (e) {
    $('.card-tooltip').hide();
    $('.card-tooltip2').hide();
    $('.card-tooltip3').hide();
    $('.card-tooltip4').hide();
    $('.card-tooltip5').hide(); 
    $('.card-ordenar').toggle();
    
});

$('.ptOrdenarMovil').click(function (e) { 
    $('.card-tooltip').hide();
    $('.card-tooltip2').hide();
    $('.card-tooltip3').hide();
    $('.card-tooltip4').hide();
    $('.card-tooltip5').hide(); 
    $('.card-ordenar-movil').toggle();
    
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
function IrResultadoHerramienta(){
    var idHerramienta=sessionStorage.getItem("idHerramienta");
    switch(Number(idHerramienta)){
        case 1:
            window.location.href="../../RutasAerea/Pages/Detalle_rutas.html";
            break;
            case 2:
                window.location.href="../../RutasMaritimas/Pages/Detalle_rutas.html";
                break;
            case 3:
                window.location.href="../../RutasTerrestre/Pages/Detalle_rutas.html";
                break;
            case 4:
                window.location.href="../../Costo/Pages/ResultadoCostos.html";
                break;
            case 5:
                window.location.href="../../Cubicaje/Pages/ResultadoCubicaje.html";
                break;
            case 6:
                window.location.href="../../DirectorioLogistico/Pages/DetalleDirectorio.html";
            break;
                default:
                window.location.href="../../Drawback/Pages/ResultadoSimulador.html";
    }
}

function NuevaSimulacion(){
    var idHerramienta=sessionStorage.getItem("idHerramienta");
    switch(Number(idHerramienta)){
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
function VerificarHerramienta(){
    var idHerramienta=sessionStorage.getItem("idHerramienta");
    switch(Number(idHerramienta)){
        case 1:
            $('.titulo-simulacion').html("Simulaciones de Rutas Aéreas");
            $('.titulo-header').html("Rutas Aéreas");
            break;
        case 2:
            $('.titulo-simulacion').html("Simulaciones de Rutas Marítimas");
            $('.titulo-header').html("Rutas Marítimas");
            break;
        case 3:
            $('.titulo-simulacion').html("Simulaciones de Rutas Terrestres");
            $('.titulo-header').html("Rutas Terrestres");
            break;
        case 4:
            $('.titulo-simulacion').html("Simulaciones de Costos");
            $('.titulo-header').html("Simulador de Costos");
            break;
        case 5:
            $('.titulo-simulacion').html("Simulaciones de Cubicaje");
            $('.titulo-header').html("Simulador de Cubicaje");
            break;
        case 6:
            $('.titulo-simulacion').html("Simulaciones de Directorio Logístico");
            $('.titulo-header').html("Simulador de Directorio Logístico");
        break;
            default:
                $('.titulo-simulacion').html("Simulaciones de Drawback");
                $('.titulo-header').html("Simulador de Drawback");
    }
}