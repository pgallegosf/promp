$(document).ready(function() {
    $(".txtcorreo").click(function() {
        login();
    });
    // Botones bloqueados
    $(".btn-ingresar").attr('disabled', 'disabled');
});

function login() {
    $(".txtcorreo").val('juan@gmail.com');
    $(".txtpass").val('******');
    $(".btn-ingresar").removeAttr('disabled');
    $(".btn-ingresar").removeClass('btn-disabled');
    $(".btn-ingresar").addClass('btn-danger');
}