import Inscribe from '../models/inscribe.js';

//Criando um novo participante.
export async function createInscribe(req, res) {
    try{
        const{name,email,performance,experience,workexperience,comment} = req.body;

        //Verificando se existe um participante com o mesmo email e nome.
        const existingInscribe = await Inscribe.findOne({email,name});
        if(existingInscribe){
            return res.status(400).json({message:'Já existe um participante com este email e nome.'});
        };

        const newInscribe = new Inscribe({name,email,performance,experience,workexperience,comment});
        const savedInscribe = await newInscribe.save();
        res.status(201).json(savedInscribe);
    }catch (error){
        console.error(error)
        res.status(500).json({error: "Erro ao salvar o participante."});
    }
}

//Bucando todos os participantes
export async function getAllInscribe(req, res) {
    try{
        const inscribe = await Inscribe.find();
        res.status(200).json(inscribe);
    }catch(error){
        res.status(500).json({error:'Erro ao consultar o participante.'})
    }
}