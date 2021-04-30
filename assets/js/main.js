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
      gender: "male",
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

  console.log(cats[0].color);

  //Ciclo forEach() per stampare la lista dei gatti, con nome e colore
  cats.forEach((cat) => {
    $("ul").append(getTemplateList(cat.name, cat.color));
  });

  //console.log(cats);
}); //fine document ready

//Blocco funzioni

//Creo una funzione
function getTemplateList(name, color) {
  let listItem = `<li>
            <i class="fas fa-cat" style="color: ${color}"></i>
            <span>${name}</span>
          </li>`;
  return listItem;
}

/* console.log(cats);
 */
