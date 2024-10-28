//Importando bibliotecas.
import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './src/middlewares/erroHandler.js';//Tratamento de erros.
import serverMiddlewares from './src/middlewares/server.js';//verificação do server.
import routesComment from'./src/routes/routesComment.js';
import routesInscribe from'./src/routes/routesInscribe.js';//Rota para inscrever novos membros.
import routesCheck from'./src/routes/routesCheck.js'; //checando se rota da API está funcionando.
import connectDb from './src/controllers/controllerDb.js';//Conexão com o banco mongoDB.

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
serverMiddlewares(app);

//Rota da aplicação.
app.use('/api', routesComment);
app.use('/api', routesInscribe);

//Verificar o funcionamento da API.
app.use('/', routesCheck);

//iniciando o servidor.
connectDb(app, PORT);

//Tratamento de erros.
app.use(errorHandler)