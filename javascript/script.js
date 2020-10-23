
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

// L'utente deve inserire un numero alla volta compreso nel range

var playerNumber = parseInt(prompt('inserisci un numero da ' + minPc + ' a ' + maxPc ));

// Controllo tipologia numero inserito dal giocatore

while ( (playerNumber < minPc) || (playerNumber > maxPc) || isNaN(playerNumber) ){
    var playerNumber = parseInt(prompt('Numero non corretto,inserisci un numero da ' + minPc + ' a ' + maxPc));
}

// Controllo se il numero inserito è già stato usato dal giocatore

while (playerLog.includes(playerNumber)) {
    var playerNumber = parseInt(prompt('Il numero è già stato inserito, inserisci un numero da ' + minPc + ' a ' + maxPc));
}

playerLog.push(playerNumber);

console.log(playerLog);

/**
 * Generazione numeri random
 * @param {number} min  numero random minimo 
 * @param {number} max  numero random massimo
 */

function random (min, max){
    var risultato = Math.floor( Math.random() * (max - min +1) + min);
    return risultato;
}