const alumno = prompt("Ingrese el nombre del alumno") ;
const notaPrimerTrimestre = parseFloat(prompt("Ingrese nota del primer trimestre")) ;
const notaSegundoTrimestre = parseFloat(prompt("Ingrese nota del segundo trimestre")) ;
const notaTercerTrimestre = parseFloat(prompt("Ingrese nota del tercer trimestre")) ;


function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

const notaPromedio =calcularPromedio(notaPrimerTrimestre, notaSegundoTrimestre, notaTercerTrimestre);

 let resultado;

if(notaPromedio >=7){
    resultado = "Aprobado"
}else{
    resultado = "Desaprobado"
}

document.write(`El alumno ${alumno} tiene un promedio de ${notaPromedio.toFixed(2)} y está ${resultado}.`);


