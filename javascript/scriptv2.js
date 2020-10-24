// ****** CAMPO MINATO ****** //

// Scelta livello di difficoltà

var pcBomb = [];

var level = prompt("Seleziona difficoltà \nFacile \nMedio \nDifficile \nTest").toLowerCase().trim();

switch (level) {
    case "test":
        var minPc = 1;
        var maxPc = 5;
        var count = 1;
        break;

    case "facile":
        var minPc = 1;
        var maxPc = 100;
        var count = 16;
        break;

    case "medio":
        var minPc = 1;
        var maxPc = 80;
        var count = 16;
        break;

    case "difficile":
        var minPc = 1;
        var maxPc = 50;
        var count = 16;
        break;
}

console.log('livello di difficoltà ', level);

// Generazione bombe da parte del pc

while (pcBomb.length < count) {
    var pcNumber = random(minPc, maxPc);
    if (!pcBomb.includes(pcNumber)) {
        pcBomb.push(pcNumber);
    }
}

console.log("Bombe Generate dal Computer ",pcBomb);

// Variabili per utente

var playerNumber;
var playerLog = [];
var punteggio = 0;

// L'utente sceglie un numero

while (playerLog.length < (maxPc - count)) {

    // L'utente deve inserire un numero alla volta compreso nel range

    var playerNumber = parseInt(prompt('inserisci un numero da ' + minPc + ' a ' + maxPc));

    // Controllo se il numero inserito dal giocatore è un numero valido

    while ((playerNumber < minPc) || (playerNumber > maxPc) || isNaN(playerNumber)) {
        playerNumber = parseInt(prompt('Numero non corretto,inserisci un numero da ' + minPc + ' a ' + maxPc));
    }
    // Controllo se il numero inserito è già stato usato dal giocatore

    while (playerLog.includes(playerNumber)) {
        var playerNumber = parseInt(prompt('Il numero è già stato inserito, inserisci un numero da ' + minPc + ' a ' + maxPc));
    }

    // Inserimento numero in lista 

    playerLog.push(playerNumber);

    console.log("Numeri già inseriti dall'utente ", playerLog);

    // Check se il giocatore ha preso la bomba

    if (pcBomb.includes(playerNumber)) {
        console.log('BOOOM! Hai trovato la bomba');
        break;
    }
    else {
        console.log('Bomba non trovata! Hai segnato un punto!');
        punteggio ++;
    }
}

// Fine del gioco con calcolo del punteggio

console.log("Il totale da te fatto è " + punteggio + " punti!");

if (playerLog.length == (maxPc - count)) {
    console.log("Hai vinto il gioco!");
} else {
    console.log("Hai perso, aggiorna la pagina per giocare ancora!");
}


// FUNZIONI //

/**
 * Generazione numeri random per il computer
 * @param {number} min  numero random minimo 
 * @param {number} max  numero random massimo
 */

function random(min, max) {
    var risultato = Math.floor(Math.random() * (max - min + 1) + min);
    return risultato;
}