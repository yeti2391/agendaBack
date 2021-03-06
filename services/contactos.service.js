const Mdb   = require('./mdb.service');

const Contactos = {
    obtenerTodos: async function(){
        const query     = `SELECT * FROM contactos`;
        const resultado = Mdb.query(query);
        return resultado;
    },
    obtenerPorId: async function(id){
        const query     = `SELECT * FROM contactos WHERE id = '${id}'`;
        //nota se le agrega la '' a la consulta para no tener que ponerlas en el parametro
        const resultado = Mdb.query(query);
        return resultado;
    },
    buscar: async function(nombre){
        const query     = `SELECT * FROM contactos WHERE nombre LIKE '%${nombre}'`
        const resultado = Mdb.query(query);
        return resultado;
    },
    nuevo: async function(contactos){
        const query     = `
            INSERT INTO contactos (nombre, apellido, calle, numero, pais, ciudad)
            VALUES ('${contactos.nombre}', '${contactos.apellido}', '${contactos.calle}', '${contactos.numero}', '${contactos.pais}', '${contactos.ciudad}')
        `
        const resultado = Mdb.query(query);
        return resultado;
    },
    editar: async function(contactos){
        const query     = `
            UPDATE contactos SET
                nombre = '${contactos.nombre}',
                apellido = '${contactos.apellido}',
                calle = '${contactos.calle}',
                numero = '${contactos.numero}',
                pais = '${contactos.pais}',
                ciudad = '${contactos.ciudad}'
            WHERE id = ${contactos.id} 
        `
        const resultado = Mdb.query(query);
        return resultado;
    },
    eliminar: async function(id){
        const query     = `DELETE FROM contactos WHERE id = '${id}'`
        const resultado = Mdb.query(query);
        return resultado;
    }

}

module.exports = Contactos