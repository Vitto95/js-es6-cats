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
    cat.age > 10
      ? (cat.ribbon = { color: "#ff66cc", opacity: 0.8 })
      : (cat.ribbon = { color: "#ff66cc", opacity: 0.3 });
    return cat.gender === "female";
  });

  console.log("Array con gatti femmina: ", femaleCats);

  //Array di oggetti contenenti solo i gatti maschi
  let maleCats = cats.filter((cat) => {
    cat.age > 10
      ? (cat.ribbon = { color: BLUE, opacity: 0.8 })
      : (cat.ribbon = { color: BLUE, opacity: 0.3 });
    return cat.gender === "male";
  });

  console.log("Array con gatti maschi: ", maleCats);
  //Concatenazione degli array
  let allCats = [...femaleCats, ...maleCats];

  console.log("Array con gatti femmina e gatti maschio: ", allCats);

  //Array con gatti femmina e maschi, con però soltanto nome, colore e fiocco.
  let newCats = allCats.map((cat) => {
    //destrutturazione array 'allCats'
    const { name, color, ribbon } = cat;
    console.log("Nome: ", name, "Colore: ", color, "Fiocco: ", ribbon);
  });

  console.log("Array con tutti i gatti, filtrato: ", newCats);

  //Aggiunta fiocco rosa o blu
}); //fine document ready

//Blocco funzioni

//Creo una funzione
function getTemplateList(name, color, ...args) {
  let listItem = "";
  let catAw = `<i class="fas fa-cat" style="color: ${color}"></i>`;
  let catName = `<span>${name}</span>`;
  let maleAw = `<li><i class="fas fa-mars"></i></li>`;
  let femaleAw = `<li><i class="fas fa-venus"></i></li>`;
  //List Item base
  listItem = `<li>` + catAw + catName + `</li>`;
  if (args.length > 0) {
    listItem += args[0] + args[1];
  }
  return listItem;
}

/* console.log(cats);
 */
