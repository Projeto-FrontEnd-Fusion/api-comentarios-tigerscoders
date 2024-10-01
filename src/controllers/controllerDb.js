const mongoose = require('mongoose')

//Função responsavel por conectar no banco.
const connectDb = async (app, PORT) =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectado ao MongoDB')
        //Inicia o servidor caso a conexão for segura.
        app.listen(PORT,() =>{console.log(`Servidor rodando na porta ${PORT}`)})
    }catch (err){
     console.error('Erro ao conectar ao MongoDB:', err)
     process.exit(1);//Finaliza o processo em caso de erro.
    }
};

module.exports = connectDb;