import express from 'express';
import router from './routes/routes.js';
import db from './config/db.js'

import dotenv from 'dotenv';
dotenv.config({ path: ('./variables.env')});

const app = express();

// conectar Database
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error));


// Habilitar PUG 
app.set('view engine', 'pug');

// Middlewares
app.use( (req, res, next) => {
    const year = new Date();

    res.locals.actualityYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

// agregar body parser para leer los datos del form 
app.use(express.urlencoded({extended: true}))

// definir la carpeta publica 
app.use(express.static('public'));

// Routers
app.use('/', router);

// puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log(`El servidor esta corriendo en el puerto`)
});