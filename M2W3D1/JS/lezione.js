/*Le funzioni sono blocchi di codice riutilizzabili che eseguono un'azione specifica.
 Una funzione può essere chiamata o invocata per eseguire il suo codice.
 Le funzioni aiutano a mantenere il codice pulito e organizzato, e a ridurre la duplicazione.
In JavaScript, una funzione può essere definita utilizzando la parola chiave function, seguita dal nome della funzione, una lista di parametri racchiusa tra parentesi e il corpo della funzione 
racchiuso tra parentesi graffe. */
 

function doSomething(param1, param2) {
  // corpo della funzione
  console.log(param1 + param2);
}

function greet() {
  console.log('Ciao, mondo!');
}

// Chiamata della funzione
greet(); // Output: Ciao, mondo!
1

//PARAMETRI E ARGOMENTI
//I parametri sono variabili elencate come parte della definizione della funzione. Gli argomenti sono i valori reali passati alla funzione quando viene chiamata.
function sum(a, b) { // fra le parentesi abbiamo i parametri
  console.log(a + b);
}

// Chiamata della funzione con argomenti
sum(3, 4); // Output: 7 (fra le parentesi abbiamo gli ARGOMENTI)
function sum(a, b) { // fra le parentesi abbiamo i parametri
  console.log(a + b);
}

// Chiamata della funzione con argomenti
sum(3, 4); // Output: 7 (fra le parentesi abbiamo gli ARGOMENTI)
1

//FUNZIONI CON VALORE DI RITORNO
  //Una funzione può restituire un valore utilizzando la parola chiave return. Una volta che la funzione esegue un'istruzione return, essa esce e restituisce il valore specificato.  
function multiply(a, b) {
  return a * b;
}

let result = multiply(3, 4);
console.log(result); // Output: 12
function multiply(a, b) {
  return a * b;
}

let result = multiply(3, 4);
console.log(result); // Output: 12

//javascript
//FUNZIONI ANONIME
//Una funzione anonima è una funzione senza nome. Viene spesso utilizzata come valore di una variabile o passata come argomento a un'altra funzione.
const anonimousGreet = function() {
  console.log("Ciao da una funzione anonima!");
};

anonimousGreet(); // Output: Ciao da una funzione anonima!

const anonimousGreet = function() {
  console.log("Ciao da una funzione anonima!");
};

anonimousGreet(); // Output: Ciao da una funzione anonima!


/*Arrow Function

In javascript sappiamo che è possibile dichiarare una funzione con la keyword "function", ed è ancora oggi un metodo utilizzato. Tuttavia con l'introduzione di Javascript ES6 sono state
introdotte delle migliorie, che prendono il nome di "arrow functions".
Le arrow functions sono una sintassi più concisa ed "elegante" per definire le funzioni, consentono per certi versi (e per certi utilizzi) di scrivere meno codice per avere lo stesso risultato
di una "function" normale. Ma ci sono alcuni punti che le differenziano!!
Intanto vediamo la differenza di sintassi fra le due versioni:*/
// "vecchio" metodo
function greet(name) {
    return `Ciao, ${name}!`;
}

greet('Pippo')

// nuovo metodo
const newGreet = (name) => {
    return `Ciao, ${name}!`;
};

newGreet('Pippo')
// "vecchio" metodo
function greet(name) {
    return `Ciao, ${name}!`;
}

greet('Pippo')

// nuovo metodo
const newGreet = (name) => {
    return `Ciao, ${name}!`;
};

newGreet('Pippo')

//Ok, vedo una freccia...ma cosa cambia davvero?
//Partiamo dai cambiamenti più semplici, tramite le arrow functions, possiamo semplificare il nostro codice se la funzione ha una SINGOLA espressione, esempio:
const greet = name => `Ciao, ${name}!`;
greet('Pippo')

// come vedete, abbiamo omesso le parentesi tonde attorno al parametro "name".
// come potete vedere, abbiamo omesso le parentesi graffe, in quanto la funzione esegue una SINGOLA espressione
// abbiamo omesso anche il "return", che nelle arrow functions viene inserito automaticamente quanto abbiamo un solo dato da ritornare.
const greet = name => `Ciao, ${name}!`;
greet('Pippo')

// come vedete, abbiamo omesso le parentesi tonde attorno al parametro "name".
// come potete vedere, abbiamo omesso le parentesi graffe, in quanto la funzione esegue una SINGOLA espressione
// abbiamo omesso anche il "return", che nelle arrow functions viene inserito automaticamente quanto abbiamo un solo dato da ritornare.

/*Le differenze sintattiche sono subito evidenti:
Le arrow functions utilizzano la freccia => anziché la parola chiave function.
Non richiedono le parentesi tonde () se hanno un solo argomento.
Possono omettere le parentesi graffe {} e la parola chiave return se il corpo della funzione è una singola espressione.
altro esempio:*/
// vecchio
function sum(a, b) {
    return a + b;
}

// nuovo
const sum = (a, b) => a + b;
// vecchio
function sum(a, b) {
    return a + b;
}

// nuovo
const sum = (a, b) => a + b;


//Metodi delle stringhe

//ecco una lista dei metodi delle stringhe in javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods