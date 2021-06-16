const express = require('express');

const {router} = require('./users/users.routes');

const app = express(); //instancia de express

app.use(express.json()); //me habla en json

app.use('/v1/users', router);

module.exports = {app}; //lo va a importar server


//hay q crear routes, controller para score