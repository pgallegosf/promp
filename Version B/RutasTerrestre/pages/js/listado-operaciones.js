$(document).ready(function() {
    
    $('.nav-nacional').click(function(e) {  
        var obj_nacional = $('.seccion-nacional');
        var obj_internacional = $('.seccion-internacional');
        var nav_nacional = $('.nav-nacional').find('a');
        var nav_internacional = $('.nav-internacional').find('a');
        
        if(!nav_nacional.hasClass('active')) nav_nacional.addClass('active');
        if(nav_internacional.hasClass('active')) nav_internacional.removeClass('active');

        if(!obj_nacional.hasClass('show')) obj_nacional.addClass('show');
        if(!obj_nacional.hasClass('active')) obj_nacional.addClass('active');
        if(obj_internacional.hasClass('show')) obj_internacional.removeClass('show');
        if(obj_internacional.hasClass('active')) obj_internacional.removeClass('active');
    });

    $('.nav-internacional').click(function(e) {   
        var obj_nacional = $('.seccion-nacional');
        var obj_internacional = $('.seccion-internacional');
        var nav_nacional = $('.nav-nacional').find('a');
        var nav_internacional = $('.nav-internacional').find('a');
        
        if(nav_nacional.hasClass('active')) nav_nacional.removeClass('active');
        if(!nav_internacional.hasClass('active')) nav_internacional.addClass('active');
        
        if(obj_nacional.hasClass('show')) obj_nacional.removeClass('show');
        if(obj_nacional.hasClass('active')) obj_nacional.removeClass('active');
        if(!obj_internacional.hasClass('show')) obj_internacional.addClass('show');
        if(!obj_internacional.hasClass('active')) obj_internacional.addClass('active');
    });
});