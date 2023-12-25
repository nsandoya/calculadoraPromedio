let nombreAlumno 
let materia 
let rgx
let nota = null
let total = 0
let promedio = 0

while(!nombreAlumno || !materia || nota == null){
    if (!nombreAlumno){
        nombreAlumno = text("Alumno");
    }else if (!materia){
        materia= text("Materia");
    }else if (nota == null){
        promedio = notasYPromedio();
    };
};
aprobado(promedio, nombreAlumno, materia);
console.log(nombreAlumno, materia, promedio.toFixed(2));

function useRegex(input) {
    let regex = /^[A-Za-z]/;
    return regex.test(input);
};

function text(tipo){
    let texto;
    while (!texto || isNaN(texto)==false || rgx == false){
        texto = prompt(`${tipo}: `);
        rgx = useRegex(texto);
        if (!texto || rgx == false){
            alert(`Ingrese el nombre de ${tipo} correctamente`);
        }else if(isNaN(texto)==false){
            alert("No se admiten números");
        };
    };
    console.log(rgx);
    return texto;
};

function notasYPromedio(){
    let i;
    for (i=0; i<3; i++){
        nota = parseFloat(prompt(`Nota ${i+1}: `));
        if (isNaN(nota)){
            nota = 0;
            i = i - 1;
            alert("Las calificaciones deben ser números");
        }else if (nota < 0 || nota > 10){
            i = i-1;
            alert("Se debe calificar entre 0 y 10 ptos");
        };
        
        total = total + nota;
    };
    
    promedio = total / 3;
    console.log(promedio);
    return promedio;
    
};

function aprobado(promedio, nombreAlumno, materia){
    if (promedio >= 7){
        alert(`${nombreAlumno}, ¡felicidades! Has aprobado ${materia} con un promedio de ${promedio.toFixed(2)}`);
    }else if(promedio < 7){
        alert(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ${materia} es de ${promedio.toFixed(2)}`);
    };
};