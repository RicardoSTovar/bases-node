const { crearArchivo } = require('./helpers/multiplicar')

console.clear();


const table = 8;



crearArchivo(table)
  .then(msg=>console.log(`${msg} creado.`))
  .catch(err=>console.log(err));