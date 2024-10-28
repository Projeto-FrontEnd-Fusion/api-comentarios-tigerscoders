import express from 'express'
import {createComment, getAllComments} from '../controllers/controllerComment.js'
import validateComment from '../middlewares/validateComment.js';
const router = express.Router();

//Validando os dados da rota para criação de um comentário.
router.post('/comments', validateComment, createComment);

//Buscando todos os dados da rota de comentários.
router.get('/comments', getAllComments);

//exportando o objeto.
export default router;