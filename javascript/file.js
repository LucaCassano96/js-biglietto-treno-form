
/* let kmDaPercorrere, etaUtente; */


 let genera = document.querySelector(".genera");
 console.log(genera);

 genera.addEventListener ("click",  
 function() {

  /* Il programma dovrà chiedere all’utente il Nome */ 

  let NomeUtente = document.getElementById("nome_e_cognome").value;
  console.log(NomeUtente);
  
  
  /* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere */ 

  let kmDaPercorrere = document.getElementById("km_da_percorrere").value;
  console.log(kmDaPercorrere);

/* Il programma dovrà chiedere all’utente l'età*/ 

  let etaUtente = document.getElementById("eta_utente").value;
  console.log(etaUtente); 

  /* si disattiva la classe active  */
  genera = document.getElementById("biglietto");
  biglietto.classList.remove("active");

/* BIGLIETTO */

const prezzoAKm = 0.21;

let prezzoBigliettoIntero = kmDaPercorrere * prezzoAKm;

/* va applicato uno sconto del 20% per i minorenni */

if(etaUtente < 18){

 vantaggio = "-20%";
 sconto = (prezzoBigliettoIntero * 80) /100;
 console.log(`Il costo del biglietto scontato è:${sconto.toFixed(2)}€`);
}

/* va applicato uno sconto del 40% per gli over 65. */

else if (etaUtente > 65){
    vantaggio = "-40%";
    sconto = (prezzoBigliettoIntero * 60) /100;
    console.log(`Il costo del biglietto scontato è:${sconto.toFixed(2)}€`);
}

else{
    vantaggio = "nessuna";
    sconto = prezzoBigliettoIntero;
    console.log(`Il costo del biglietto intero è:${prezzoBigliettoIntero.toFixed(2)}€`);
}


/* nome utente */
document.getElementById("nome").innerHTML = NomeUtente;

/* offerta  */
document.getElementById("offerta").innerHTML = vantaggio;

/* numero carrozza */
numeroCarrozza = Math.floor(Math.random()*10) +1;
document.getElementById("numero_carrozza").innerHTML = numeroCarrozza;

numeroCp = Math.floor(Math.random()*30000) +1;
document.getElementById("numero_C_P").innerHTML = numeroCp;

/* prezzo finale biglietto */

document.getElementById("sconto").innerHTML = `${sconto.toFixed(2)}€`;
}

) 

/* fai sparire biglietto */

let annulla = document.querySelector(".annulla");
 console.log(annulla);

 annulla.addEventListener ("click",  
 function() {
  annulla = document.getElementById("biglietto");
  biglietto.classList.add("active");

 }

 )