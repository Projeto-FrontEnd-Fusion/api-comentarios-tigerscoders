import express from 'express';
import {createInscribe, getAllInscribe} from '../controllers/controllerInscribe.js'
import validateInscribe from '../middlewares/validateInscribe.js'
const router = express.Router();

//Validando os dados da rota para criação de um novo usuario.
router.post('/inscribe', validateInscribe, createInscribe);

//Buscando todos os dados da rota de inscrição.
router.get('/inscribe', getAllInscribe);

//exportando o objeto.
export default router;