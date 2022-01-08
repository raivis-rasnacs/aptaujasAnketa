function ievadiVardu() {
  var vards = prompt("Ievadi savu vārdu!")
  document.getElementById("tavsvards").innerHTML = "Sveiks, "+vards+"!";
}

function iesniedzAtbildi() {
  alert("Paldies, ka atbildēji!");

  if (document.getElementById("atbilde3").checked == true) {
    document.getElementById("atsauksme").style.visibility = "visible";
    document.getElementById("iesniegt").style.visibility = "visible";
  }
}