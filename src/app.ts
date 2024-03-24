document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e.target)
    console.log("Hello typescript et js");
    const nom: string = "Typescript";
    const version: number = 6;
    const title:any = document.querySelector("title")
    const lang:any = document.querySelector("html")
    console.log(lang.getAttribute("lang"))
    lang.setAttribute("lang","fr")

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
    characteres.map((element:any) => console.table(element))

    /* interface objet */
    interface Country {
        descr: string;
        capitale: string;
        population: string;
        gouvernement: {
            type: string;
        };
        Indicatif_telephonique: string;
        Superficie: string;
        premier_ministre?: string; // Le premier ministre est facultatif
    }
    
    const country: Country = {
        descr: "L'Italie, pays européen bordé par la Méditerranée et l'Adriatique, a laissé une forte empreinte sur la culture et la cuisine occidentales. Sa capitale, Rome, abrite le Vatican ainsi que des trésors artistiques et des ruines antiques.",
        capitale: "Rome",
        population: "59,11 millions (2021)",
        gouvernement: {
            type: 'République, État unitaire, République constitutionnelle, République parlementaire'
        },
        Indicatif_telephonique: '+39',
        Superficie: '302 073 km²',
        premier_ministre: "Melonie Giorgia"
    };
  
    //console.table(country)
    console.log("Gouvernement : "+country.gouvernement.type)
})
