let computerNumber = randomNumber();
let userNumber = parseInt(prompt("inserisci un numero"));
let userChoice = prompt("pari o dispari");
let output= EvenorOdd(computerNumber, userNumber,userChoice)


console.log(output);
console.log(userNumber, computerNumber, userChoice)
// controllo se la somma dei numeri è pari oppure dispari
function EvenorOdd(computerNumber, userNumber, userChoice){
    let sum = computerNumber + userNumber;
    let evenorOdd;
    // controllo che sum e la scelta siano vincenti oppure perdenti
    if(sum % 2 === 0 && userChoice === "pari" || sum % 2 != 0 && userChoice === "dispari"){
        evenorOdd = "you won";
    }else{
        evenorOdd = "you lost";
    }
    return evenorOdd;
}
// generiamo numero casuale per il cpmputer
function randomNumber(){
    
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}