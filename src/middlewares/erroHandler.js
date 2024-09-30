//Criando o objeto de validação.
const errorHandler =(err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({
        mensage:"O servidor apresentou um erro interno, tente novamente mais tarde."
    })
};

//exportando objeto.
module.exports = errorHandler