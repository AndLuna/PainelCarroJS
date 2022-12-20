function hello () {
    var nome;
    nome = prompt("Qual é o seu nome ?")
    alert("hello"+" "+nome+" "+"é um prazer telo conosco, vamos começar a inserção dos dados ?");
}

var etanol, gasolina;
function Calcular(){
    etanol = parseFloat (frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat (frmFlex.txtGasolina.value.replace(",","."));
   
    if (etanol< 0.7 * gasolina ){
document.getElementById("status").src="etanol.png";
    }
    else{
        document.getElementById("status").src="gasolina.png";

    }

}

function resetar () {
    document.getElementById("status").src="neutro.png";

}