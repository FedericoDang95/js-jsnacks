// Richiede all'utente di inserire la prima parola
let parola1 = prompt("Inserisci la prima parola:");

// Richiede all'utente di inserire la seconda parola
let parola2 = prompt("Inserisci la seconda parola:");

// Confronta la lunghezza delle parole e stampa prima quella più corta, poi quella più lunga
if (parola1.length < parola2.length) {
    console.log("La parola più corta è: " + parola1);
    console.log("La parola più lunga è: " + parola2);
} else if (parola2.length < parola1.length) {
    console.log("La parola più corta è: " + parola2);
    console.log("La parola più lunga è: " + parola1);
} else {
    console.log("Le parole hanno la stessa lunghezza: " + parola1 + ", " + parola2);
}
