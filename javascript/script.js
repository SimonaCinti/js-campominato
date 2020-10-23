
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

// L'utente deve inserire un numero alla volta compreso nel range

var playerNumber = parseInt(prompt('inserisci un numero da ' + minPc + ' a ' + maxPc ));

// Controllo numero inserito dal giocatore

while ( (playerNumber < minPc) || (playerNumber > maxPc) ){
    var playerNumber = parseInt(prompt('Numero non corretto,inserisci un numero da ' + minPc + ' a ' + maxPc));
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