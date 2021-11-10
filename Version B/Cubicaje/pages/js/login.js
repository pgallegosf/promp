var inputCorreo = document.getElementById("correo")
var inputPassword = document.getElementById("password")
var btnIngresar = document.getElementById("btn-ingresar")
var chkSesionActivo = document.getElementById("check-sesion-activa")
var opcionViewRegistroLogin = document.getElementById("view-registro-login")




function addData() {
    inputCorreo.value = "carlos@gmail.com"
    inputPassword.value = "123456"
    btnIngresar.className = "btn btn-danger"
    chkSesionActivo.className = "col-lg-4 col-md-6 col-xs-12 paddingControl d-display"
    opcionViewRegistroLogin.className = "d-none"
}