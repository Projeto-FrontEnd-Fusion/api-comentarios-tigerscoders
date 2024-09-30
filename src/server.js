//Importando bibliotecas.
const express       = require('express');
const mongoose      = require('mongoose');
const cors          = require('cors');
const morgan        = require('morgan'); //Acompanhar o trafego na API.
const helmet        = require('helmet'); //segurança para cabeçalhos.
const rateLimit     = require('express-rate-limit');
const errorHandler  = require('./middlewares/erroHandler');//Tratamento de erros.
const routesComment = require('./routes/routesComment');
const bodyParser    = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

//Conexão com o banco mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {console.log('Conectado ao MongoDB')
        app.listen(PORT,() =>{console.log(`Servidor rodando na porta ${PORT}`)})})
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));    

//middleware
app.use(cors()); //Permitindo requisições de outras origens.
app.use(bodyParser.json()); //Parser do body como JSON.
app.use(helmet()); //Segurança para configurar cabeçalhos HTTP.
app.use(morgan('dev')); //Log da requisição HTTP.
app.use(rateLimit({
        windowMs: 15*60*1000, //intervalo de 15 minutos.
        max: 100,//limite maximo para 100 requisão por IP.
        message: "Foram realizadas muitas requisições criadas a partir deste IP, tente novamente mais tarde."
    })
);

//Rota da aplicação.
app.use('/api', routesComment);

//Rota para verificar o funcionamento da API.
app.get('/', (req, res) =>{
    res.send('Acesso na API de comentários realizada com Sucesso.')
})

//Tratamento de erros.
app.use(errorHandler)