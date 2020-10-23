
//TODO Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100. I numeri non possono essere duplicati 

// Variabili per calcolo numeri pc
var minPc = 1;
var maxPc = 30;
var pcBomb = [];
var count = 16;

//Inserimento numeri del pc
while (pcBomb.length < count) {
    var pcNumber = random (minPc, maxPc);
    if (! pcBomb.includes(pcNumber)) {
        pcBomb.push(pcNumber);
    }
}

console.log(pcBomb);

// Variabili per utente

var playerNumber;

var playerLog = [];

var punteggio = 0;

// L'utente deve inserire un numero alla volta compreso nel range

var playerNumber = parseInt(prompt('inserisci un numero da ' + minPc + ' a ' + maxPc ));

// Controllo tipologia numero inserito dal giocatore

check (playerNumber,minPc,maxPc);

// Controllo se il numero inserito è già stato usato dal giocatore

while (playerLog.includes(playerNumber)) {
    var playerNumber = parseInt(prompt('Il numero è già stato inserito, inserisci un numero da ' + minPc + ' a ' + maxPc));
}

playerLog.push(playerNumber);

console.log(playerLog); //controllo array playerlog

//Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.

if ( pcBomb.includes(playerNumber)){
    console.log("mi dispiace, hai perso");
} else {
    punteggio++
}

/**
 * Generazione numeri random
 * @param {number} min  numero random minimo 
 * @param {number} max  numero random massimo
 */

function random (min, max){
    var risultato = Math.floor( Math.random() * (max - min +1) + min);
    return risultato;
}

function check (num1, num2, num3){

    while ((num1 < num2) || (num1 > num3) || isNaN(num1)) {
        num1 = parseInt(prompt('Numero non corretto,inserisci un numero da ' + minPc + ' a ' + maxPc));
        return num1;
    }

}