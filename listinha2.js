

// 8- Um novo modelo de carro da Tesal, super econômico foi lançado.
// Ele faz 26km com 1 litro de combustível.
// Cada litro de combustível custa R$ 6,29.

// Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.

// function autonomie(){
//     var dinheiro = parseFloat(document.getElementById("dinheiro").value);
//     let litroValor = 6.29;
//     let km = 26;
//     let autonomia =  Math.round(dinheiro / litroValor) * km;
 
//     if(autonomia > 0) {
//         alert("Sua autonomia e de "+autonomia+'Km');
//     }
     
//     else{
//         alert("Coloque algum valor!")
//     } 
//    }

function autonomie(){
    var dinheiro = parseFloat(document.getElementById("dinheiro").value);
    let litroValor = 6.29;
    let km = 26;
    let autonomia =  (dinheiro / litroValor) * km;
 
   document.getElementById('autom').value =  autonomia.toFixed(2)
   }
  

