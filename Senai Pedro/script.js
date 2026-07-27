//1. usando var (forma mais antiga)
var idade = 25;
var nome = 'Maria';
var estudante = true;

//2. Usando Let (introduzido no es6)
let idade = 25;
let nome = 'Maria';
let estudante = true;

//3. Usando const (Usando valores constantes)
const PI = 3.14159;
const NOME_EMPRESA = 'TecheSolutions';

//1 tipos primitivos 
number (numero)
//Representa tento numeros decimais quanto números inteiros.
let idade = 25; // inteiro
let altira = 1.75; // Decimal
let temperatura = -5; // numero negativo

String(texto)
let nome ='Pedro'
let sobrenome ='Martins'
let enderço = 'Rua des flores 453' //templet stringi (es6)
Boolean(booleno)
//representa valores logicos : de verdade (true) ou falso (false)
let estudante = true
let aprovado = false
underfined
//representa uma variavel que foi declarada mas não recebeu um valor 
let cidade; //valor é underfined 
null
//Representa a ausência internacional de valor.
let telefone = null ; // explicitamente sem valor 
2. //tipos complexos 
// Array (vetor)
//correção ordenada de valores
let frutas = ['Maçã','Banana','Laranja'];
let numeros = [1,2,3,4,5];
let misturado = [1, 'dois', true, null] 

//Object (objeto)
//coleção de pares chave valor
let pessoa = {
    nome: 'ana'
    idade: 30
    profissao: 'desenvolvedora'
};


// verificando o tipo de variavel

let idade =  25;
console.log(typeof idade);

let nome = 'maria';
console.log(typeof Ativo);

let ativo = true;
console.log(typeof ativo);

//conversão entre tipos
//de String para number 
let numeroTexto = '42';
let numero = number(numeroTexto);
console.log(typeof numero );// 'number'

let numero1 = preseint(numeroTexto); //inteiros
let numero2 = presefloat(numerotexto);//decimais

//de number para sring 
let numero = 42;
let texto = String (numero); //"42" (texto)
//Alternativa
let texto2 = numero.toString(); // "42"(texto)
//Para Boolean
let valor = 1;
let Booleano = Bolean(valor); //true
// valores que convertem para false:
//6, "", null, undefined, NaN, false


//exemplo pratico; calculadora de idade 

//declaração de variaveis 
const anoAual = 2026;
let anodoNascimento = 1990;
//lculando a idade
let idade = anoAtual - anodoNascimento;
//exibindo o resultado
console.log('você tem' + idade + 'anos')

console.log('ocê tem ${idade} anos');

//Exemplo prático:
//calculadora de media de notas 
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.5;

let media = (nota1 + nota2 + nota3) / 3;
console.log( A media das notas e ${media.toFixed(1)});
//Operadores de atribuição Combinados
let pontos = 100;
console.log('Pontuação inicial: ${pontos)`);
//0 jgador ganhou 50 pontos
pontos += 50;
// Adiciona 50 pontos
console.log(Pontuação após ganhar 50 pontos: ${pontos)');
pontos = 30;
console.log(Pontuação após perder 30 pontos: ${pontos}');


