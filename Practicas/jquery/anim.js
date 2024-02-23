$(document).ready(function(){
//     $("#btn").on('click', function(){
//         $('.caja').animate({
//             width: '300px',
//             height: '300px',
//             marginLeft: '100px',
//             marginTop: '100px'
//         },1000, function(){
//             $(this).animate({
//                 width: '150px',
//                 height: '150px',
//                 marginLeft: '0px',
//                 marginTop: '10px'
//             },1000);
//         }
//         );
//     });
// }

    $("#btn").on('click', function(){
        $('.caja').toggleClass('ampliado', function(){
            $(this).toggleClass('ampliado', 3000);
        });
    });
});