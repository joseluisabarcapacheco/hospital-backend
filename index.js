const { config } = require('dotenv');
const express = require('express');
const {dbConnection} = require('./database/config');
require('dotenv'),config();
const cors = require('cors');

// crear el servidor de express
const app = express();

// configurar cors
app.use(cors());

//base de datos

dbConnection();
console.log( process.env )

//josdb
//HtG8jmsQv4v0u7hM
//190.114.38.98
//rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg:  'hola mundo'
    });
});



app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto' + process.env.PORT );
});
