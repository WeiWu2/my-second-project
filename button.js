
var f = document.getElementById("fruit");
var e = document.getElementById("electronics");
var c = document.getElementById("clothing")
  function allShow() {
   
    e.style.display = "flex";
    c.style.display = "flex";
    f.style.display = "flex";
    
  }

  function fruitShow() {
  
    e.style.display = "none";
    c.style.display = "none";
    f.style.display = "flex";
  }
  function electronicsShow() {
   
    e.style.display = "flex";
    c.style.display = "none";
    f.style.display = "none";
    
  }
  function clothingShow() {
    
    e.style.display = "none";
    c.style.display = "flex";
    f.style.display = "none";
    
  }
 