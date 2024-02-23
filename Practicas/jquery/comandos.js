
function efectos() {
    // $(selector).hide(spped, callback);
    $('.caja').hide(3000, function() {
        $(this).show(3000);
    });

    $('h1').hide(); // Elemento oculto
    $('#id').show(); // Id visible

    $('.caja').show();

    // Efectos con velocidad guapos para menus
    $('.caja').toggle(); //Alternar entre mostrar y ocultar

    $('.caja').fadeIn(); //Mostrar con efecto de transición
    $('.caja').fadeOut(); //Ocultar con efecto de transición

    $('.caja').fadeToggle(); //Alternar entre mostrar y ocultar con efecto de transición
    $('.caja').slideDown(); //Mostrar con efecto de deslizamiento
    $('.caja').slideUp(); //Ocultar con efecto de deslizamiento
    $('.caja').slideToggle(); //Alternar entre mostrar y ocultar con efecto de deslizamiento
    

    // Estilos
    $('.caja').first().css({background: '#000'});
    $('.caja').last().css({background: '#000'});
    $('.caja').eq(0).css({background: '#000'});

    $('.caja').filter('#tercera').css({background: '#ff1'});
    $('.caja').not('#tercera').css({background: '#3294'});

    // Manipulación
    $('#id').html('<h1>Texto</h1>');
    $('#id').text('Texto');

    var nombre = $('#id');
    nombre.on('change', function() {
        $('#id').text(nombre.val());
    });


}