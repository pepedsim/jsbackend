// let nota = 82;
// let conceito;

// if(nota >= 90){
//     conceito = 'A';
// }else if (nota >= 80){
//     conceito = 'B';
// }else if (nota >= 70){
//     conceito = 'C';
// }else{
//     conceito ='reprovado';
// }

// const statusFinal = nota >= 70 ? 'Aprovado' : 'Recuperação';

// console.log(`Nota: ${nota}`);
// console.log(`Conceito: ${conceito}`);
// console.log(`Status Final: ${statusFinal}`);


const express = require('express');
const app = express();

app.get('/api/classificar-idade', (req, res) => {
    const idade = Number(req.query.idade);
    if (!idade || isNaN(idade)){
        return res.status(400).json({erro: 'o parametro idade é obrigatorio e deve ser numérico.'});
    }
    let categoria = idade <12 ? 'Criança': idade <18 ? 'Adolecente': idade <60 ? 'Aduto' : 'Idoso';
    return res.json({idade,categoria});
});

app.listen(3000, () => {
    console.log('Servidor rodando! http://localhost:3000/api/classificar-idade');

})                                                                                                                                                          
