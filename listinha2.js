function autonomie(){
    var dinheiro = parseFloat(document.getElementById("dinheiro").value);
    let litroValor = 6.29;
    let km = 26;
    let autonomia =  (dinheiro / litroValor) * km;
 
//    document.getElementById('autom').value =  autonomia.toFixed(2)
   document.getElementById("x").innerHTML = `Com R$ ${dinheiro},00 Reais voce tera uma autonomia de ${autonomia.toFixed(0)}km. 
   Total de 26km por litro.`

}

////////////  usando a function para esconder a div ate que o btn seja clickado



var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelector("#totaut");
    
  if(div.style.display === "block") {
        div.style.display = "none";
    } else {
      div.style.display = "block";
  }
    
});

/////////// tentando pegar o valor de dinheiro 


