// Inizializza una variabile per la somma totale
let somma = 0;

// Ciclo per chiedere 10 numeri all'utente
for (let i = 0; i < 10; i++) {
    // Chiede all'utente di inserire un numero
    let numero = parseFloat(prompt("Inserisci un numero:"));

    // Aggiunge il numero inserito alla somma totale
    somma += numero;
}

// Stampa la somma totale dei numeri inseriti
console.log("La somma totale dei numeri inseriti è: " + somma);
