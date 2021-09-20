//Extraire l'heure actuelle à l'aide de l'objet Date()
const date = new Date();

//Stocker l'heure , minute , seconde  dans des variables
const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hours = date.getHours();


/*temps en secondes écoulé selon l'heure actuelle extraite avec l'objet date(), 
et les valeurs extraites des variables getSeconds(), getMinutes() et getHours() */
const tempsEcouleSec = seconds + (minutes * 60) + (hours * 3600);  


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
const degSec = 360/60;  // = 6 degrés / sec
const degMin = 360/60/60; // = 0,1 degré / sec
const degHeure = 360/12/60/60; //  environ = 0,00833333.../ sec


// Cibler le degré exacte pour chaque aiguille selon l'heure, les minutes et les secondes 
// stockées dans l'objet date()
let tempsSecDegre = tempsEcouleSec * degSec;
let tempsMinDegre = tempsEcouleSec * degMin;
let tempsHourDegre = tempsEcouleSec * degHeure;


function demarrerLaMontre(){

    tempsSecDegre = tempsSecDegre + degSec;
    tempsMinDegre = tempsMinDegre + degMin;
    tempsHourDegre = tempsHourDegre + degHeure;


// Déplacer les aiguilles 
// Hint : Tous les aiguilles doivent se déplacer chaque seconde selon un degré
 // Selectionner les aiguilles de montre

const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

AIGUILLEHR.style.transform = "rotate(" + tempsHourDegre + "deg)";
AIGUILLEMIN.style.transform = "rotate(" + tempsMinDegre + "deg)";
AIGUILLESEC.style.transform = "rotate(" + tempsSecDegre + "deg)";
}

// Executer la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

