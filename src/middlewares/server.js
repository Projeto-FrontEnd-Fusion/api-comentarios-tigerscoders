const cors          = require('cors');
const morgan        = require('morgan'); //Acompanhar o trafego na API.
const helmet        = require('helmet'); //segurança para cabeçalhos.
const rateLimit     = require('express-rate-limit');
const bodyParser    = require('body-parser');

const serverMiddlewares = (app)=>{
    app.use(cors()); //Permitindo requisições de outras origens.
    app.use(bodyParser.json()); //Parser do body como JSON.
    app.use(helmet()); //Segurança para configurar cabeçalhos HTTP.
    app.use(morgan('dev')); //Log da requisição HTTP.
    app.use(rateLimit({
            windowMs: 15*60*1000, //intervalo de 15 minutos.
            max: 100,//limite maximo para 100 requisão por IP.
            message: "Foram realizadas muitas requisições criadas a partir deste IP, tente novamente mais tarde."
        })
    )
};

module.exports = serverMiddlewares;