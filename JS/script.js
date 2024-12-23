// crea un array per i numeri disponibili da 1 a 90
let availableNumbers = [];
for (let i = 1; i <= 90; i++) {
    availableNumbers.push(i);
}

// dichiara rray per i numeri estratti
let extractedNumbers = [];

// ciclo per l'estrazione dei numeri
for (let i = 1; i <= 90; i++) {

    //log numeri disponibili
    console.log(`Numeri disponibili: ${availableNumbers}`);


    // chiedi conferma per procedere con l'estrazione --- deve diventare bottone
    confirm("Estrai un numero");



    // estrazione di un numero casuale
    let calledIndex = Math.floor(Math.random() * availableNumbers.length);
    let called = availableNumbers[calledIndex]; 
    

    extractedNumbers.push(called);
    availableNumbers.splice(calledIndex, 1);


    // log per mostrare l'ultimo numero estratto e i numeri estratti finora
    console.log(`Numero estratto: ${called}`);
    console.log(`Numeri estratti finora: ${extractedNumbers}`);
}
