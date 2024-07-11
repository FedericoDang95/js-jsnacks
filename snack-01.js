// Richiede all'utente di inserire il primo numero
let numero1 = parseFloat(prompt("Inserisci il primo numero:"));

// Richiede all'utente di inserire il secondo numero
let numero2 = parseFloat(prompt("Inserisci il secondo numero:"));

// Confronta i due numeri e stampa il maggiore
if (numero1 > numero2) {
    console.log("Il numero maggiore è: " + numero1);
} else if (numero2 > numero1) {
    console.log("Il numero maggiore è: " + numero2);
} else {
    console.log("I due numeri sono uguali."); 5
}