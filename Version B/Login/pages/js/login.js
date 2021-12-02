var inputCorreo = document.getElementById("correo")
var inputPassword = document.getElementById("password")
var btnIngresar = document.getElementById("btn-ingresar")
var chkSesionActivo = document.getElementById("check-sesion-activa")
var opcionViewRegistroLogin = document.getElementById("view-registro-login")



function recuperarPass() {
    $(".btn-enviar-pass").removeAttr('disabled');
}
function addData() {
    inputCorreo.value = "carlos@gmail.com"
    inputPassword.value = "123456"
    chkSesionActivo.className = "d-display text-center mt-3"
    opcionViewRegistroLogin.className = "d-none"

}