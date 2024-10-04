//Importando bibliotecas.
const express           = require('express');
const dotenv            = require('dotenv');//config de ambiente.
const errorHandler      = require('./src/middlewares/erroHandler');//Tratamento de erros.
const serverMiddlewares = require('./src/middlewares/server');//verificação do server.
const routesComment     = require('./src/routes/routesComment');
const routesCheck       = require('./src/routes/routesCheck'); //checando se rota da API está funcionando.
const connectDb         = require('./src/controllers/controllerDb')//Conexão com o banco mongoDB.

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
serverMiddlewares(app);

//Rota da aplicação.
app.use('/api', routesComment);

//Verificar o funcionamento da API.
app.use('/', routesCheck);

//iniciando o servidor.
connectDb(app, PORT);

//Tratamento de erros.
app.use(errorHandler)