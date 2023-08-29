// Función para calcular el promedio
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Función para crear un objeto de alumno y agregarlo al array
function agregarAlumno(nombre, nota1, nota2, nota3) {
    const alumno = {
        nombre: nombre,
        notas: [nota1, nota2, nota3],
        promedio: calcularPromedio(nota1, nota2, nota3)
    };
    alumnos.push(alumno);
}

// Función para buscar un alumno por nombre
function buscarAlumnoPorNombre(nombre) {
    return alumnos.find(alumno => alumno.nombre === nombre);
}

const alumnos = []; // Array para almacenar objetos de alumnos

do {
    const alumnoNombre = prompt("Ingrese el nombre del alumno");
    const notaPrimerTrimestre = parseFloat(prompt("Ingrese nota del primer trimestre"));
    const notaSegundoTrimestre = parseFloat(prompt("Ingrese nota del segundo trimestre"));
    const notaTercerTrimestre = parseFloat(prompt("Ingrese nota del tercer trimestre"));

    agregarAlumno(alumnoNombre, notaPrimerTrimestre, notaSegundoTrimestre, notaTercerTrimestre);

    const alumnoBuscado = buscarAlumnoPorNombre(alumnoNombre);
    if (alumnoBuscado) {
        let resultado;
        if (alumnoBuscado.promedio >= 7) {
            resultado = "Aprobado";
        } else {
            resultado = "Desaprobado";
        }
        alert(`El alumno ${alumnoBuscado.nombre} tiene un promedio de ${alumnoBuscado.promedio.toFixed(2)} y está ${resultado}.`);
    } else {
        alert("Alumno no encontrado.");
    }

    const continuar = confirm("¿Desea agregar otro alumno?");
    if (!continuar) {
        break; // Salir del bucle si el usuario no desea continuar
    }
} while (true); // El bucle se ejecutará siempre que el usuario quiera continuar

// Cierre del programa
alert("Sesión finalizada!");
