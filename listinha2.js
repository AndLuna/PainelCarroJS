// 1 -Elabore um script que leia dois números e imprima  o resultado das operações aritméticas soma, produto, divisão e resto da divisão (%) entre esses números.

let a = 11;
let b = 2;

let somar = (a,b) => a +b;
let subtrair = (a,b) => a-b;
let dividir = (a,b) => a/b;
let multi = (a,b) => a*b;
let resto = (a, b) => (a%b);

//console.log(resto(a,b))

//2 - Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.

let lado = 10;

let area = (lado) => lado * lado;

//console.log(area(lado));

// 3 - Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius

// function conversor(c) {
//     let f = (c * 1.8) + 32;
//     return f
// }
let f = 100;
let c;
let conversor = (f) => c = (f-32) /1.8;

//console.log(conversor(f))

// 4 - Faça um algoritmo que transforme a velocidade fornecida em m/s pelo usuário para Km/h. Para tal, multiplique o valor em m/s por 3,6.

let ms;
let _conversor = (ms) => km = ms * 3.6
//console.log(_conversor(100));

// 5- Crie um object array com os valores de um veículo, sendo as chaves são marca, modelo, cor, ano, valor, renavam, placa, cada um das chaves devem possuir valores. Exiba através da body do HTML as informações do veículo:

let Veiculo = 
{    marca: 'Ferrari', 
    modelo: 'y',
    cor: 'azul',
    ano: '22-05-2010',
    renavam: 'Sim',
    placa: 'placa-abc'
}
//console.table(Veiculo)

// 6 - Crie um array com valores de 10 alunos de sua turma, exiba os valores existentes nas posições: 0,5,2,6,9 e 7.

let alunos = ['Benther','Luna','Campello','Flavio','Bruno','Elize','Zeulli','Robson','Leandro','Cinthia']


// 7 - Crie um array com 5 posições e em cada posição, um object array com as seguintes chave/valor (id, nome, telefone, email). Exiba o array via console. e acesse as informações do object na posição 3.

let usuario = [
    {
        id: 23213, 
        nome: 'Andre',
        telefone: '719922004',
        email: 'bol@gmail.com'
    },
    {
        id: 223213, 
        nome: 'Andre2',
        telefone: '2719922004',
        email: 'bol2@gmail.com'
    },
    {
        id: 323213, 
        nome: 'Andre3',
        telefone: '3719922004',
        email: 'bol3@gmail.com'
    },
    {
        id: 423213, 
        nome: 'Andre4',
        telefone: '4719922004',
        email: 'bol4@gmail.com'
    },
    {
        id: 523213, 
        nome: 'Andre5',
        telefone: '5719922004',
        email: 'bol5@gmail.com'
    }
    
]
//console.table(usuario[3])

// *DESAFIO GANDALF*

// 8- Um novo modelo de carro da Tesal, super econômico foi lançado.
// Ele faz 26km com 1 litro de combustível.
// Cada litro de combustível custa R$ 6,29.

// Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.

function autonomie(){
    var dinheiro = parseFloat(document.getElementById("dinheiro").value);
    let litroValor = 6.29;
    let km = 26;
    let autonomia =  Math.round(dinheiro / litroValor) * km;
 
    if(autonomia > 0) {
        alert("Sua autonomia e de "+autonomia+'Km');
    }
     
    else{
        alert("Coloque algum valor!")
    } 
   }

   