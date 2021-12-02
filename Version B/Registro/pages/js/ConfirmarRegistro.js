
function irPaginaInicio(){
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
