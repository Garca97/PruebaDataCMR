$(document).ready(function() {
    $('#boton').click(function() {
        
        $.post('../Controlador/PruebaControlador.php',{name:'cosa'}, function(data){
            $('#lista').append(data);
        });
        
         
    });
});