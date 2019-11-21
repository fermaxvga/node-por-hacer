const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de tarea por hacer"
};
const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca la tarea como completado o pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea ingresada', {
        descripcion
    })
    .help()
    .argv;
module.exports = {
    argv
}

/*const opt1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripcion de tarea por hacer"
    }
}
const opt2 = {
    completado: {
        demand: true,
        alias: 'c',
        desc: 'Marca la tarea como completado o pendiente'
    }
}*/