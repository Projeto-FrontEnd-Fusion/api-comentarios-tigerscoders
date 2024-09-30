const express                        = require('express');
const router                         = express.Router();
const{createComment, getAllComments} = require('../controllers/controllerComment');
const validateComment                = require('../middlewares/validateComment');

//Validando os dados da rota para criação de um comentário.
router.post('/comments', validateComment, createComment);

//Buscando todos os dados da rota de comentários.
router.get('/comments', getAllComments);

//exportando o objeto.
module.exports = router;