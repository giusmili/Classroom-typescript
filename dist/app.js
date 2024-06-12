"use strict";
var _a;
document.addEventListener("DOMContentLoaded", (e) => {
    var _a, _b;
    console.log(e.target);
    console.log("Hello typescript et js");
    const nom = "Typescript";
    const version = 6;
    const title = document.querySelector("title");
    const lang = document.querySelector("html");
    const list = document.querySelector("figure figcaption");
    console.log(lang.getAttribute("lang"));
    lang.setAttribute("lang", "fr");
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
    const country = {
        descr: "L'Italie, pays européen bordé par la Méditerranée et l'Adriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. Sa capitale, Rome, abrite le Vatican ainsi que des trésors artistiques et des ruines antiques.",
        capitale: "Rome",
        population: "59,11 millions (2021)",
        gouvernement: {
            type: "République, État unitaire, République constitutionnelle, République parlementaire",
        },
        Indicatif_telephonique: "+39",
        Superficie: "302 073 km²",
        premier_ministre: "Melonie Giorgia",
    };
    //console.table(country)
    console.log("Gouvernement : " + country.gouvernement.type);
    const person = {
        name: "John Doe",
        age: 30,
        // address est facultatif ou undefined
    };
    (_a = person === null || person === void 0 ? void 0 : person.age) !== null && _a !== void 0 ? _a : console.log("pas d'age");
    // Accès à la propriété city en utilisant le chaînage optionnel (?.)
    const city = (_b = person.address) === null || _b === void 0 ? void 0 : _b.city;
    // Affichage de la ville si elle est définie, sinon affichage d'un message par défaut
    console.log(city !== undefined ? city : "Ville non définie");
    const date = {
        printdate: new Date().getFullYear(),
        elements: document.querySelector("time"),
        // address est facultatif ou undefined
    };
    date.elements.innerText = date.printdate;
    const appareil = {
        device: "Phone",
        dates: new Date().getFullYear(),
    };
    const gen = {
        nom: "Heisenberg",
        prenom: "Walter",
    };
    let el = document.createElement("ul");
    list.appendChild(el);
    let keys = Object.keys(gen);
    el.innerHTML += `<li>
    <strong>${keys[0].toUpperCase()}</strong> : ${gen.nom}
        </li>
    <li>
         <strong>${keys[1].toUpperCase()}</strong> : ${gen.prenom}
    </li>`;
});
const animal = "Ours";
const age = 27;
const lastname = "Doe";
console.log(age + ' ' + lastname);
const myCharacter = {
    name: 'Warrior',
    life: 100,
    attack: 10,
    defense: 5
};
console.table(myCharacter);
const personne = {
    first_name: "Doe",
    name: "John",
    age: 35
};
console.log(personne.name);
// Utilisation du chaînage optionnel
const address = (_a = personne === null || personne === void 0 ? void 0 : personne.age) !== null && _a !== void 0 ? _a : "Adresse indisponible";
console.log(address);
