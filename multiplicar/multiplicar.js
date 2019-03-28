const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            console.log(base * i);
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve('creado')
            console.log('Archivo creado!');
        });

    });
}

let listarTabla = (base, limite) => {

    console.log('================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(base * i);
        //data += `${base} * ${i} = ${base*i} \n`;
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}