const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredits = notes.map(function(noteObject){
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredits.reduce(function(sum = 0, newValue){
    return sum + newValue;
});

const credits = notes.map(function(noteObject){
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(function(sum = 0, newValue){
    return sum + newValue;
});

const promedioPonderadoNotasConcreditos = sumOfNotesWithCredit / sumOfCredits;

console.log(`El promedio ponderado de las notas es: ${promedioPonderadoNotasConcreditos}`);