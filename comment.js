import {Schema, model} from 'mongoose';

const comment = new Schema({
    name:{
        type:String,
        required: true
    },
    githubUser:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        match:[/.+\@.+\..+/, 'Para continuar o procedimento, insira um endereço de email válido.']
    },
    comment:{
        type: String,
        required: true
    },
    createDate:{
        type:Date,
        default: Date.now
    }
});

//Criando e exportando o modelo de dados.
export default model('Comment', comment)