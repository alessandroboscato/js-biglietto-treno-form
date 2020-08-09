// BOTTONE GENERA

var genera = document.getElementById("genera");
genera.addEventListener("click",
function() {

// 1 prendi il valore nome dall'input e stampalo come output

  var nome = document.getElementById("nome").value;
  document.getElementById("nome-passeggero").innerHTML = nome;

  // 2 genera l'offerta sulla base dei kilometri

  var prezzo = 0.21;
  var km = document.getElementById("km").value;
  var prezzokm = prezzo * km;

  // 3 applica lo sconto sulla base dell'età
  var prezzoSconto20 = (prezzokm - ((prezzokm * 20) / 100)).toFixed(2);
  var prezzoSconto40 = (prezzokm - ((prezzokm * 40) / 100)).toFixed(2);

  var fasciaeta = document.getElementById("fascia-eta").value;

  if (fasciaeta == "minorenne") {
    document.getElementById("totale").innerHTML = prezzoSconto20;
    document.getElementById("offerta").innerHTML = "Sconto minorenne";
  } else if (fasciaeta == "over65") {
    document.getElementById("totale").innerHTML = prezzoSconto40;
    document.getElementById("offerta").innerHTML = "Sconto silver";
  } else {
    document.getElementById("totale").innerHTML = prezzokm;
    document.getElementById("offerta").innerHTML = "Prezzo standard";
  }

  // 4 genera il numero carrozza e il codice CP

  var carrozza = Math.floor(Math.random() * 9 ) + 1;
  document.getElementById("carrozza").innerHTML = carrozza;
  var codiceCP = Math.floor(Math.random() * 10000 ) + 90000;
  document.getElementById("codiceCP").innerHTML = codiceCP;

  // 5 rendi visibile il biglietto
  document.getElementById("box-output").classList.add("show");
}
);

// BOTTONE ANNULLA
var annulla = document.getElementById("annulla");
annulla.addEventListener("click",
function() {

  // 1 rendi invisible il biglietto
  document.getElementById("box-output").classList.remove("show");

  // 2 pulisci la ricerca
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("fascia-eta").value = "";
}
);
