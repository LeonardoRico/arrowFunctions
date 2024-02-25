let peso = 70;
let altura = 1.75;

//me devuelve el valor calculado de IMC
const IMC = (peso, altura) =>{
    return peso / Math.pow(altura,2)
}
console.log(IMC(peso, altura));

let nombre = "";
//toma el valor que traiga el parámetro y lo vuelve a mayúsculas
const ConversorMayuscula = nombre => {
    console.log(nombre);
}
ConversorMayuscula("Leonardo");

//nos indica el valor de Pi
const ConsultadePI = () => {
    const pi = 3.1416;
    return "El valor de pi es " + pi;
}
console.log(ConsultadePI());

//La función realiza el cálculo factorial de un número 
const CalculaFactorial = base => {
    let result = base;
    if (base === 0 || base === 1) {
        return 1;
    }else{
        while (base > 1) {
            base--
            result = result * base;
        }
        return result;
    }
}
console.log(CalculaFactorial(3));

//la función realiza el split de una cadena de caracteres
const SplitToString = frase => {
    return frase.split(" ");
}
console.log(SplitToString("Mi perrro se llama Sancho"));

//Obtiene la fecha actual
const obtenerFecha = () => {
    const fecha = new Date().toDateString();
    return fecha;
}
console.log(obtenerFecha());

//Calcula si un número es par
const Par = (num) => {
    if (num % 2 === 0) {
        return "El número es par";
    }else{
        return "El número es impar";
    }
}

console.log(Par(4635));