const fs = require('fs');

const crearArchivo = async(tableNumber = 5) => {
  try {
      console.log("=======================");
      console.log(`Tabla del ${tableNumber}`);
      console.log("=======================");

      let salida = '';

      for (let index = 1; index < 11; index++) {
        salida += `${tableNumber} * ${index} = ${tableNumber * index}\n`
      }

      console.log(salida);

      fs.writeFileSync(`tabla-${tableNumber}.txt`, salida);

      return `tabla-${tableNumber}.txt`;

    } catch (error) {
       throw error;
    }
}

module.exports = {
  crearArchivo
}