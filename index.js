//Importar libreria express
const express = require('express')

//Declarar variable de tipo express
const app = express();

//Declarar que los body se manejaran como json
app.use(express.json());

//Importar archivo con peticiones
app.use(require('./routes/exampleRest'));

//Inicializar el servidor en el puerto 8081
const listenPort = process.env.LISTENPORT || 8081
app.listen(8081, ()=> {
    console.log("Server on port 8081");
});
