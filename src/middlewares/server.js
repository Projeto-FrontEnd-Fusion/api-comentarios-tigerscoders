import cors from 'cors';
import morgan from 'morgan'; //Acompanhar o trafego na API.
import helmet from 'helmet'; //segurança para cabeçalhos.
import rateLimit from 'express-rate-limit';
import express from 'express'

const serverMiddlewares = (app)=>{
    app.use(cors()); //Permitindo requisições de outras origens.
    app.use(express.json()); //Parser do body como JSON.
    app.use(helmet()); //Segurança para configurar cabeçalhos HTTP.
    app.use(morgan('dev')); //Log da requisição HTTP.
    app.use(rateLimit({
            windowMs: 15*60*1000, //intervalo de 15 minutos.
            max: 100,//limite maximo para 100 requisão por IP.
            message: "Foram realizadas muitas requisições criadas a partir deste IP, tente novamente mais tarde."
        })
    )
};

export default serverMiddlewares;