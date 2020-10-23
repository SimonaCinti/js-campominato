
//TODO Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100. I numeri non possono essere duplicati 

// Variabili per calcolo numeri pc e selezione livello di difficoltà

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
var life = true;

// Inizio del gioco:

while ((life == true) && (playerLog.length < (maxPc - count))) {

    // L'utente deve inserire un numero alla volta compreso nel range

    var playerNumber = parseInt(prompt('inserisci un numero da ' + minPc + ' a ' + maxPc));

    // Controllo se il numero inserito dal giocatore è un numero valido

    playerNumber= checkNumber(playerNumber, minPc, maxPc);

    
    // Controllo se il numero inserito è già stato usato dal giocatore in precedenza

    playerNumber= checkLog(playerLog, playerNumber);

    playerLog.push(playerNumber);

    console.log("Numeri inseriti dall'utente ",playerLog); //controllo array playerlog

    //Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.

    var life = checkBomb(playerNumber, pcBomb);

    if (life == true) {
        punteggio++;
    }
}

// Fine del gioco: calcolo dei punti e se il giocatore ha vinto

console.log("il totale da te fatto è " + punteggio + " punti!");

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

function random (min, max){
    var risultato = Math.floor( Math.random() * (max - min +1) + min);
    return risultato;
}

/**
 * Check del tipo di numero inserito se valido
 * @param {number} num1  numero giocatore
 * @param {number} num2  numero minimo pc
 * @param {number} num3  numero massimo pc
 */

function checkNumber (num1, num2, num3){

    while ((num1 < num2) || (num1 > num3) || isNaN(num1)) {
        num1 = parseInt(prompt('Numero non corretto,inserisci un numero da ' + minPc + ' a ' + maxPc));
    }
    return num1;
}

/**
 * Check se il giocatore ha inserito già il numero
 * @param {number} num1 
 * @param {number} num2 
 */

function checkLog (num1,num2){
    while (num1.includes(num2)) {
        var num2 = parseInt(prompt('Il numero è già stato inserito, inserisci un numero da ' + minPc + ' a ' + maxPc));
    }
    return num2;
}

/**
 * Check se il giocatore ha preso la bomba
 * @param {number} num1 
 * @param {number} num2 
 */

function checkBomb (num1, num2){
    if (num2.includes(num1)) {
        console.log('Mi dispiace, hai perso!');
        return false
    } 
    else {
        console.log('Bomba non trovata! Hai segnato un punto!');
        return true
    }
}





