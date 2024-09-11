
function AfterChangeBulb(){

  console.log(document.getElementById("bulb"));
  document.getElementById("bulb").src = "images/offbulb.jpg";

  console.log(document.getElementById("catimg"));
  document.getElementById("catimg").src = "images/cat-eyes-img.png";

  console.log(document.getElementById("text-cont"));
  document.getElementById("text-cont").textContent = "Switch On";

  document.getElementById("Offbtn").style.backgroundColor = "gray";
  document.getElementById("Onbtn").style.backgroundColor = "green";
}

function BeforeChangeBulb(){

  console.log(document.getElementById("bulb"));
  document.getElementById("bulb").src = "images/onbulb.jpg";

  console.log(document.getElementById("catimg"));

  document.getElementById("catimg").src = "images/cat-img.png";

  console.log(document.getElementById("text-cont"));
  document.getElementById("text-cont").textContent = "Switch Off";

  
  document.getElementById("Offbtn").style.backgroundColor = "red";
  document.getElementById("Onbtn").style.backgroundColor = "gray";
  
}