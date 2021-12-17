$(document).ready(function() {
    $("#pdf").click(function() {
        
        document.execCommand('SaveAs',true,"../assets/pdf/resultado.pdf");
        document.getElementById('my_iframe').src = "../assets/pdf/resultado.pdf";
        download("../assets/pdf/resultado.pdf","resultado.pdf");
        //Download("../--/assets/pdf/resultado.pdf");
    });
    $('#pdf').attr({target: '_blank', 
                    href  : '../assets/pdf/resultado.pdf'}); 
    $('.popover').show();
});

function download(dataurl, filename) {
    const link = document.createElement("a");
    link.href = dataurl;
    link.target = '_blank';
    link.download = filename;
    link.click();
  }

function Download(url) {
    document.getElementById('my_iframe').src = url;
};

