var parola = prompt('inserisci parola');
var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    document.getElementById('testo').innerHTML = ('la parola è palindroma');
  } else {
    document.getElementById('testo').innerHTML = ('la parola non è palindroma');
}

function invertiParola(str){
  var parolaInversa = '';

  var i = str.length - 1;

  while (i >= 0) {
    parolaInversa += str[i];
    i--;
  }

 
  return parolaInversa ;
}