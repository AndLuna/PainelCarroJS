var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelector("#container");
    
  if(div.style.display === "block") {
        div.style.display = "none";
    } else {
      div.style.display = "block";
  }
    
});