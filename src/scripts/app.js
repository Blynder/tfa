"use strict"

import"./module2.js";


/////////// Module 1

// trouver et afficher la base de donnée json

fetch("assets/data/dataobjectif.json")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    console.log(json);
    displaylist(json);

});

// créer des div en fonction du json + leur contenu

var newContent = document.querySelector(".objectiflist");

function displaylist(json){
    for(let i= 0; i < json.length; i++){
        var newDiv = document.createElement("div");
        var newTitle = document.createElement("H2");
        var newDescription = document.createElement("P");
        var newPoints = document.createElement("P");

        newDiv.className = "objectif";
        //newDiv.classList.add(json[i].Id);
        newDiv.setAttribute("data-id", json[i].Id);


        newContent.appendChild(newDiv);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newDescription);
        newDiv.appendChild(newPoints);

        newTitle.innerHTML= json[i].Titre;
        newDescription.innerHTML= json[i].Description;
        newPoints.innerHTML= json[i].Points + " Points";
    


        
      }
}

// Bouton affichage liste

let allObjectif = document.querySelector(".allObjectif");
let addObjectif = document.querySelector(".addObjectif");

addObjectif.addEventListener('click', (e) => {
    allObjectif.classList.toggle('hide');
});







