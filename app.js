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
        response: contactos
    })
})

app.get('/contactos/:id', async (req, res) => {
    const id = req.params.id
    const contactos = await Contactos.obtenerPorId(id)
    res.send({
        response: contactos[0]
    })
})

app.post('/contactos', Middleware.verify, async(req, res)=>{
    const contacto = req.body
    const resultado = await Contactos.nuevo(contacto)
    res.send({
        response: resultado
    })
})

app.put('/contactos', Middleware.verify, async(req, res)=>{
    const contacto = req.body
    const resultado = await Contactos.editar(contacto)
    res.send({
        response: resultado
    })
})

app.delete('/contactos/:id', Middleware.verify, async(req, res)=>{
    const id = req.params.id 
    const resultado = await Contactos.eliminar(id)
    res.send({
        response:resultado
    })
})






app.listen(port, (req, res)=> {
	console.log(`Example app listening on port ${port}`)
});


/* 
LETRA DEL PROBLEMA

1. Crear una API en express contemplando el ABM para el modelo anterior
LISTO a. GET /contactos - Obtiene todos los contactos de la base de datos
PROBLEMAS b. GET /contactos/:id - Obtener contacto por ID
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

