const express 	= require('express');
const bodyParser= require('body-parser');
const app 		= express();
const port		= 3001;

const Contactos	= require('./services/contactos.service')

app.use(bodyParser.json());
app.get('/', (req, res)=> {
	res.send({proyecto: "agenda"})
});

app.get('/contactos', async (req, res) => {
    const contactos = await Contactos.obtenerTodos()
    res.send({
        response: productos
    })
})

app.get('/contactos/:id', async (req, res) => {
    const id = req.params.id
    const contactos = await Contactos.obtenerPorId(id)
    res.send({
        response: productos[0]
    })
})








app.listen(port, (req, res)=> {
	console.log(`Example app listening on port ${port}`)
});


/* 
LETRA DEL PROBLEMA

1. Crear una API en express contemplando el ABM para el modelo anterior
a. GET /contactos - Obtiene todos los contactos de la base de datos
b. GET /contactos/:id - Obtener contacto por ID
c. POST /contactos - Ingresa un contacto con la dirección contemplada en el
modelo
d. PUT /contactos/:id - Actualizar contacto por ID
e. DELETE /contactos/:id - Eliminar contacto por ID



Desarrollar un sistema para almacenar contactos en una agenda con el siguiente modelo:
{
"nombre":"Alex",
"apellido":"Casadevall",
"calle":"Defensa",
"numero":"123",
"pais":"Uruguay",
"ciudad":"Montevideo"
}
*/

