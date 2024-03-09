"use strict";
document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e.target);
    console.log("Hello typescript et js");
    const nom = "Typescript";
    const version = 6;
    const title = document.querySelector("title");
    title.innerText = nom;
    const Persona_1 = {
        first_name: "John",
        last_name: "Konig",
        fiction: "Space 1999",
        location: "Moon base Alpha",
    };
    const Persona_2 = {
        first_name: "Helena",
        last_name: "Russel",
        fiction: "Space 1999",
        location: "Moon base Alpha",
    };
    let characteres = [Persona_1, Persona_2];
    characteres.push();
    //console.log(characteres)
    /* itération des objets dans le tableau */
    //xcharacteres.forEach((element:any) => console.log(element.first_name));
    characteres.map((element) => console.table(element));
});
