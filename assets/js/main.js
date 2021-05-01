$(document).ready(function () {
  /*Milestone 1: definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore, sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore ed il proprio nome
*/

  //Creo delle costanti per i vari colori
  const BLACK = "#000000";
  const WHITE = "#ffffff";
  const ORANGE = "#ff3300";
  const BLUE = "#003366";
  const PINK = "#ff66cc";
  const GREY = "#999966";
  //Array di oggetti
  const cats = [
    {
      name: "Mimì",
      age: 10,
      color: BLACK,
      gender: "female",
    },
    {
      name: "Birba",
      age: 3,
      color: GREY,
      gender: "female",
    },
    {
      name: "Baloo",
      age: 5,
      color: ORANGE,
      gender: "male",
    },
    {
      name: "Kira",
      age: 2,
      color: BLACK,
      gender: "female",
    },
    {
      name: "Shiny",
      age: 1300,
      color: BLUE,
      gender: "male",
    },
    {
      name: "Skitty",
      age: 12,
      color: PINK,
      gender: "female",
    },
  ];

  //Ciclo forEach() per stampare la lista dei gatti, con nome e colore
  cats.forEach((cat) => {
    $("ul.all-cats").append(getTemplateList(cat.name, cat.color));
  });

  /* Milestone 2: Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio. */

  //Array di oggetti contenenti solo i gatti femmina
  let femaleCats = cats.filter((cat) => {
    //aggiungo il fiocco rosa, con opacità diversa in base all'età
    /*  cat.age > 10
      ? (cat.ribbon = { color: "PINK", opacity: 0.5 })
      : (cat.ribbon = { color: "PINK", opacity: 0.2 }); */
    return cat.gender === "female";
  });

  console.log("Array con gatti femmina senza ribbon: ", femaleCats);

  //Aggiunta oggetto "ribbon"
  femaleCats.forEach((cat) => {
    if (cat.age > 10) {
      cat.ribbon = { color: PINK, opacity: 0.5 };
    } else {
      cat.ribbon = { color: PINK, opacity: 0 };
    }
  });

  console.log("Array con gatti femmina, con aggiunto ribbon: ", femaleCats);

  //Array di oggetti contenenti solo i gatti maschi
  let maleCats = cats.filter((cat) => {
    /*  cat.age > 10
      ? (cat.ribbon = { color: "BLUE", opacity: 0.8 })
      : (cat.ribbon = { color: "BLUE", opacity: 0.3 }); */
    return cat.gender === "male";
  });

  console.log("Array con gatti maschi senza ribbon: ", maleCats);

  //Aggiunta oggetto "ribbon"
  maleCats.forEach((cat) => {
    if (cat.age > 10) {
      cat.ribbon = { color: BLUE, opacity: 0.8 };
    } else {
      cat.ribbon = { color: BLUE, opacity: 0.3 };
    }
  });

  console.log("Array con gatti maschi, con aggiunto ribbon: ", maleCats);

  /* Milestone 3: Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */

  //Concatenazione degli array
  let allCats = [...femaleCats, ...maleCats];

  console.log("Array con gatti femmina e gatti maschio: ", allCats);

  //Array con gatti femmina e maschi, con però soltanto nome, colore e fiocco.
  let newCats = allCats.map((cat) => {
    //destrutturazione array 'allCats'
    const { name, color, ribbon } = cat;
    console.log("Nome: ", name, "Colore: ", color, "Fiocco: ", ribbon);
    return {
      name,
      color,
      ribbon,
    };
  });

  console.log("Array con tutti i gatti, filtrato: ", newCats);

  //Output newCats

  newCats.forEach((cat) => {
    $("#new-cats").append(
      getTemplateList(cat.name, cat.color, cat.ribbon.color, cat.ribbon.opacity)
    );
  });
}); //fine document ready

//Blocco funzioni

//Creo una funzione
function getTemplateList(name, color, ...args) {
  let listItem = "";
  let catAw = `<i class="fas fa-cat" style="color: ${color}"></i>`;
  let catName = `<span>${name}</span>`;
  let maleAw = `<i class="fas fa-mars" style="color: ${args[0]}; opacity:${args[1]}; "></i>`;
  let femaleAw = `<i class="fas fa-venus style="color: ${args[0]}; opacity:${args[1]};"></i>`;
  //List Item base
  listItem = `<li>` + catAw + catName + `</li>`;
  if (args.length > 0) {
    if (args[0] === "#003366") {
      listItem = `<li>` + catAw + catName + maleAw + `</li>`;
    } else {
      listItem = `<li>` + catAw + catName + femaleAw + `</li>`;
    }
  }
  return listItem;
}

/* console.log(cats);
 */
