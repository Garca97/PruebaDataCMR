$(document).ready(function() {
    $('#boton').click(function() {
        
       $.post('../Controlador/PruebaControlador.php', function(data){
            var datos = data.split('##');
            var respuesta='<table>';
            respuesta+= '<tr><th>ID</th>';
            respuesta+= '<th>first_name</th>';
            respuesta+= '<th>last_name</th> </tr>';
            for (var i = 0; i < datos.length-1; i++) {
                var registro = datos[i].split(';');
                respuesta+= '<tr><td>'+registro[0]+'</td>';
                respuesta+= '<td>'+registro[1]+'</td>';
                respuesta+= '<td>'+registro[2]+'</td> </tr>';

            }
            respuesta+='</table>';
            $('#lista').empty();
            $('#lista').append(respuesta);
        });
        
         
    });
});