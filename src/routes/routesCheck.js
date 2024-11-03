import express from 'express';
const router = express.Router();

//Rota para verificar o funcionamento da API.
router.get('/', (req, res) =>{
    res.send('Acesso na API de comentários realizada com Sucesso.')
})

export default router;