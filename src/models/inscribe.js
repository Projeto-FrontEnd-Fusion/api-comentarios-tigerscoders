import {Schema, model} from 'mongoose';

const inscribe = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        match:[/.+\@.+\..+/, 'Para continuar o procedimento, insira um endereço de email válido.']
    },
    performance:{
        type:String,
        required: true
    },
    experience:{
        type:String,
        required: true
    },
    workexperience: {
        type:Boolean,
        default: false
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

//Criando e exportando o modelo de dados das inscrições.
export default model('Inscribe', inscribe)