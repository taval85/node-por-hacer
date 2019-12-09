const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
}

const completado ={
    alias: 'c',
    default:true,
    desc: 'marca como completado o pendiente la tarea'
} 



const argv = require('yargs')
    .command('crear','crear las notas  por hacer',{
    descripcion
    }
    )
    .command('actualizar','actualizar las notas por hacer',{
    descripcion,
    completado
    }
    )
    .command('borrar','Borrar  una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;


    module.exports = {
        argv

    } 
