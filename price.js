// Calcolo prezzo biglietto del treno

// assegnazione variabili, il programma chiede l'età e il numero di Km da percorrere
var eta = parseInt(prompt("Età"));
var kilometri = parseFloat(prompt("Kilometri"));
var prezzoint = kilometri * 0.21;
var studentprice = prezzoint - (prezzoint * 20)/100;
var oldmenprice = prezzoint - (prezzoint * 40)/100;

// il programma eroga il prezzo intero
document.writeln("Prezzo intero: ", prezzoint, " Eur");

// se età è maggiore di 65 il prezzo sarà inferiore del 40%, il programma eroga il prezzo ridotto
if (eta > 65){
  document.writeln("Prezzo scontato: ", oldmenprice, " Eur");
}

// se età è inferiore di 18 il perzzo sarà inferiore del 20%, il programma eroga il prezzo ridotto
if (eta < 18){
  document.writeln("Prezzo scontato: ", studentprice, " Eur")
}
