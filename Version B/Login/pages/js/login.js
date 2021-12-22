var inputCorreo = document.getElementById("correo")
var inputPassword = document.getElementById("password")
var btnIngresar = document.getElementById("btn-ingresar")
var chkSesionActivo = document.getElementById("check-sesion-activa")
var opcionViewRegistroLogin = document.getElementById("view-registro-login")



function recuperarPass() {
    $(".btn-enviar-pass").removeAttr('disabled');
}
function addData() {
    //inputCorreo.value = "carlos@gmail.com"
    //inputPassword.value = "123456"
    chkSesionActivo.className = "d-display text-center mt-3"
    opcionViewRegistroLogin.className = "d-none"
}
function login(){
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
        case 7:
            window.location.href='../../Drawback/pages/EmpezarDrawback.html';    
        break;
            default:
            window.location.href="../../Drawback/Pages/Drawback.html";
    }
}
