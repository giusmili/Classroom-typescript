document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e.target)
    console.log("Hello typescript et js");
    const nom: string = "Typescript";
    const version: number = 6;
    const title:any = document.querySelector("title")

    title.innerText = nom;

    /* création d'une interface commune auwx objets */
    interface User{
        first_name: string;
        last_name: string;
        fiction: string;
        location: string;
    }

    const Persona_1: User={
        first_name: "John",
        last_name: "Konig",
        fiction: "Space 1999",
        location: "Moon base Alpha",
    };

    const Persona_2: User={
        first_name: "Helena",
        last_name: "Russel",
        fiction: "Space 1999",
        location: "Moon base Alpha",
    };
   
    let characteres:any = [Persona_1, Persona_2];
    characteres.push()
    //console.log(characteres)

    /* itération des objets dans le tableau */
    //xcharacteres.forEach((element:any) => console.log(element.first_name));
    characteres.map((element:any) => console.log(element.last_name))

    /* modifier dans le DOM */
})
