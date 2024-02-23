
// Función normal
function max(matriz) {
    var max = -1;
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] >= max) {
                max = matriz[i][j];
            }
        }
    }
    console.log(max);
}

//  Función autoinvocada
(function(){
    console.log("Hola mundo");
}());