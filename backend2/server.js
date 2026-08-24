//1. Importando o modulo nativo HTTP do node.js
const http = require('http');

//2. definindo a porta do servidor
const PORT = 3000;

//3. Criando o servidor (Garçom)
const server = http.createServer((req, res) => { 
 //exibe o terminal a rota solicitada em tempo real
console.log(`[PEDIDO RECEBIDO] Método: ${req.method} | Rota: ${req.url}`);

    //ROTA 1: Página inicial
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(`
            <h1 style="color: red; font-family: sans-serif;">🍟 Bem-vindo á lanchonete Digital Node.js!</h1>
            <p style="font-family: sans-serif;"> Servidor nativo rodando com sucesso no VS Code!</p> 
            <ul>
                <li><a href="/cardapio">cardapio</a>
                (API de Cardápio em json)</li><li><a href="/alunos">/alunos</a>(API de Alunos em json)</li>
            </ul>
        `)
    }
//ROTA 2: API DE cardápio (retorna JSON)
    else if(req.url === '/cardapio'){
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

        const produtos = [
            {id: 1, nome: 'X-Node Burguer', preco: 25.50},
            {id: 2, nome: 'Batata HTTP Cross', preco: 12.00},
            {id: 3, nome: 'Suco de reposição 200 ok', preco: 8.00}
         ];
        //Converte o objeto/array em javascript em texto JSON antes de enviar
        res.end(JSON.stringify(produtos, null, 2));
    }
        //ROTA 3: API DE alunos (retorna JSON)
        else if(req.url === '/alunos'){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

            const alunos = [
                {id: 101, nome: 'Ana Silva', curso: 'Aprovado'},
                {id: 2, nome: 'Carlos Eduardo', curso: 'Estudando'}
                
            ];
            res.end(JSON.stringify(alunos, null, 2));
     }
        //ROTA 404: Pedido não encontrado no cardápio
        else{
            res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`<h1 style="color: red; font-family: sans-serif;">❌ Erro 404 - Esse item não existe no cardápio!</h1>`)
        }
});

//Ativar o servidor para escuta de requisições
server.listen(PORT, () => { 
    console.log('#-----------------#');
    console.log('#  🚀 Servidor rodando com sucesso! #');
    console.log(`'#💻 Host: http://localhost:${PORT} #'`);
    console.log('#-----------------#');
   
});
