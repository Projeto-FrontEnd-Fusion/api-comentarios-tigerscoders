import {body, validationResult} from 'express-validator';

const validateInscribe = [
    body('name').notEmpty().withMessage('O campo nome é obrigatório.'),
    body('email').isEmail().withMessage('O email fornecido não é valido, verifique novamente.'),
    body('performance').notEmpty().withMessage('O campo Área de Atuação é obrigatório.'),
    body('experience').notEmpty().withMessage('O campo Senioridade é obrigatório.'),
    body('comment').notEmpty().withMessage('O campo comentário não pode estar vazio.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        next();
    }
];

//exportando objeto
export default validateInscribe;