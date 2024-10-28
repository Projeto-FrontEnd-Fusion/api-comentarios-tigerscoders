import Comment from '../models/comment.js';

//Criando um novo comentário.
export async function createComment(req, res) {
    try{
        const{name,githubUser,email,comment} = req.body;

        //Verificando se existe cadastro com o mesmo email e githubUser.
        const existingComment = await Comment.findOne({email,githubUser});
        if(existingComment){
            return res.status(400).json({message:'Já existe um comentário com este email e usuário do GitHub.'});
        };

        const newComment = new Comment({name,githubUser,email,comment});
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);        
    }catch (error){
        res.status(500).json({error: "Erro ao salvar o comentário."});
    }
}

//Bucando todos os comentários
export async function getAllComments(req, res) {
    try{
        const comments = await Comment.find();
        res.status(200).json(comments);
    }catch(error){
        res.status(500).json({error:'Erro ao consultar comentários.'})
    }
}