$(document).ready(function() {
    $("#btn-comenzar").click(function() {
        empezarSimulacion();
    });
    $("#btn-volver").click(function() {
        retornarViewPrincipal();
    });
    $("#view-simulador-principal").hide()

    $(".accordion-header").dblclick(function() {
        var valor = 3;
        switch (valor) {
            case 3:
                $("#tab3").trigger("click");
                break;
        }
    });
    $("#add-Insumo").click(function() {
        var valor = 1;
        switch (valor) {
            case 1:
                $("#tab1").trigger("click");
                break;
        }
    });
});



function empezarSimulacion() {
    $("#view-empezar-principal").hide()
    $("#view-simulador-principal").show()
}

function retornarViewPrincipal() {
    $("#view-simulador-principal").hide()
    $("#view-empezar-principal").show()
}

function clickTab(numberTab) {
    console.log(numberTab);
    switch (numberTab) {
        case 1:
            $("#tab1").trigger("click");
            break;
        case 2:
            $("#tab2").trigger("click");
            break;
        case 3:
            $("#tab3").trigger("click");
            break;
    }
}