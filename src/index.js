const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3333

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

console.log(`Servidor está rondando na porta ${port}!`)
app.listen(port);