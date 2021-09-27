class Personas{
    constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;}
}

let grupoPersonas = [];

grupoPersonas.push(new Personas ('Pedro', 29, 'actor'));
grupoPersonas.push(new Personas ('Sofia', 37, 'contadora'));
grupoPersonas.push(new Personas ('Daniel', 45, 'ingeniero'));
grupoPersonas.push(new Personas ('Catalina', 30, 'docente'));
grupoPersonas.push(new Personas ('Guillermo', 32, 'empresario'));
grupoPersonas.push(new Personas ('Josefina', 23, 'estudiante'));

console.log(grupoPersonas.sort( (a, b) => a.edad - b.edad));

