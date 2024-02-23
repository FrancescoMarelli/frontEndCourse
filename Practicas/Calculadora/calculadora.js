

function sumar() {
    var numero1 = parseFloat(document.getElementById("num1").value); 
    var numero2 = parseFloat(document.getElementById("num2").value);
    var result = numero1 + numero2;
    document.getElementById("resultado").value = result;
}