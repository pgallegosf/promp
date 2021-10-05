$(document).ready(function() {
    $("#pdf").click(function() {
        generarPDF();
    });
});

function generarPDF() {
    $("pdfResultadoSimulador").show();
    var element = document.getElementById('pdfResultadoSimulador');
    html2pdf(element, {
        margin: 10,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        // posicion vertical: portrait
        //posicion horizontal: landscape
    })
}