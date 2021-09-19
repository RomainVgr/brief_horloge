



function demarrerLaMontre(){
    
 // Séléctionner les aiguilles de montre
    const AIGUILLEHR = document.querySelector("#hour");
    const AIGUILLEMIN = document.querySelector("#minute");
    const AIGUILLESEC = document.querySelector("#second");
    


//Extraire l'heure actuel à l'aide de l'objet Date()

const now = new Date();


//Stocker l'heure , minute , seconde  dans des varaiables

const seconds = now.getSeconds();
const hours = now.getHours();
const minutes = now.getMinutes();



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque seconde selon un degré

const secDegre = ((seconds/60) * 360 + 90);

const minDegre = ((minutes/60) * 360) + ((seconds/60 *6));

const hourDegre = ((hours /12)*360) + ((minutes/60 * 30));


// Déplacer les aiguilles 

    AIGUILLEHR.style.transform = `rotate(${hourDegre}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${minDegre}deg)`;
    AIGUILLESEC.style.transform = `rotate(${secDegre}deg)`;

}


// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

