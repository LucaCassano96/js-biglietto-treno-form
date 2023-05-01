


function valuesUser(){
    uptadeUserName()
    uptadeUserKm()
    uptadeUserAge()
}

let userName;
let userKm;
let userAge;

/* Il programma dovrà chiedere all’utente il Nome */ 

function uptadeUserName() {
    userName = document.getElementById("name").value;
    document.getElementById("value-1").innerHTML = userName;
  }


  /* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere */ 

  function uptadeUserKm() {
    userKm = parseInt(document.getElementById("distance").value);
    document.getElementById("value-2").innerHTML = userKm;
  }

  /* Il programma dovrà chiedere all’utente l'età del passeggero*/ 

  function uptadeUserAge() {
    userAge = parseInt(document.getElementById("age").value);
    document.getElementById("value-3").innerHTML = userAge;
  }

/* Sulla base di queste informazioni dovrà calcolare il prezzo */


    /*Prezzo totale km percorsi per over 18 e under 65 (Prezzo intero)  */

    let prezzoScontato;
    let prezzoKm = userKm * 0.21;

/* Sconto under 18 */

if (userAge < 18){
    prezzoScontato = (80 * prezzoKm /100);
    console.log(prezzoScontato.toFixed( 2 ) );
}

/* sconto over 65 */

else if (userAge > 65){
    prezzoScontato = (60 * prezzoKm /100);
    console.log(prezzoScontato.toFixed( 2 ) );
} 

/* Prezzo intero  */

else{
    prezzoScontato = (prezzoKm);
    console.log(prezzoScontato.toFixed( 2 ) );
} 


document.getElementById("biglietto").innerHTML = `Il costo del tuo biglietto è: € ${prezzoScontato.toFixed( 2 )}` ;

