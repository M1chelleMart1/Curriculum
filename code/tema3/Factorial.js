function factorialFor(numero) {
    let resultado = 1
    if (numero == 1 || numero == 0) {
        return resultado
    } else {
        for (i = 2; i < numero; i++) {
            resultado = resultado * i
        }
    }
    return alert("El factorial es: " + resultado)
}

function factorialRecursion(numero) {
    if (numero == 0) {
        return 1;
    } else {
        return numero * factorialRecursion (numero - 1);
    }
}

function mostrarMenu() {
    var option = prompt(
        "Selecciona una opcion\n " +
        "1. Factorial con For\n" +
        "2. Calcular factorial con recursion" 
    )

    switch(option) {
        case "1":
            var numero = prompt("Introduzca un numero: ")
            var res = factorialFor(numero)
            alert("El factorial es: " + res)
            break

        case "2":
            var numero = prompt("Introduzca un numero: ")
            var res = factorialRecursion(numero)
            alert("El factorial es: " + res)
            break;

        default:
            alert("Opcion Invalida")
            break
        
    }

}
mostrarMenu()