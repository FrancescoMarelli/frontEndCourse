$(document).ready(function(){
    var boton = $('#btn');

    // boton.click(function(){
    //     document.write('Click');
    // });

    // Evento con fallback
    boton.on('click', function(){
        document.write('Click');
    });

    boton.on('mouseenter', function(){
        $('.btn').css({
            background: '#000',
            color: '#fff',
            
        });
    });



});