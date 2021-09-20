
function demarrerLaMontre(){
    
 // Selectionner les aiguilles de montre
    const AIGUILLEHR = document.querySelector("#hour");
    const AIGUILLEMIN = document.querySelector("#minute");
    const AIGUILLESEC = document.querySelector("#second");
    

//Extraire l'heure actuelle à l'aide de l'objet Date()

const date = new Date();


//Stocker l'heure , minute , seconde  dans des variables

const seconds = date.getSeconds();
const hours = date.getHours();
const minutes = date.getMinutes();


// temps en secondes écoulé selon l'heure actuelle extraite avec l'objet date(), et les valeurs extraites 
// des variables 

const tempsEcouleSec = seconds + (minutes * 60) + (hours * 3600);  



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde


const degSec = 360/60;  // = 6 degrés / sec
const degMin = 360/60/60; // = 0,1 degré / sec
const degHeure = 360/12/60/60; //  environ = 0,00833333.../ sec



// Déplacer les aiguilles 
// Hint : Tous les aiguilles doivent se déplacer chaque seconde selon un degré

AIGUILLEHR.style.transform = "rotate(" + tempsEcouleSec * degHeure + "deg";

// On deplace l'aiguille de heures en fonction du temps total de secondes écoulé dans la journée
// par le degré à ajouter pour chaque seconde ecoulé.

AIGUILLEMIN.style.transform = "rotate(" + tempsEcouleSec * degMin + "deg";

// On deplace l'aiguille de heures en fonction du temps total de secondes écoulé dans la journée
// par le degré par minute à ajouter pour chaque seconde ecoulé.

AIGUILLESEC.style.transform = "rotate(" + tempsEcouleSec * degSec + "deg";

// On deplace l'aiguille de heures en fonction du temps total de secondes écoulé dans la journée
// par le degré par seconde  à ajouter pour chaque seconde ecoulé.
}

// Executer la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

