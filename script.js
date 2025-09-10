/****************
    DEFINIZIONI
*****************/

// Array di oggetti
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cards = "";                                                           // Stringa che conterrà il markup HTML di tutte le card
const containerCards = document.querySelector(".container-cards");          // Recupera il contenitore delle cards dal DOM


/******************
    ELABORAZIONE
******************/

// Crea struttura html per tutte le card
for (member of teamMembers) {
    cards += creaCard(member);
}


/*********
    DOM
**********/
containerCards.innerHTML = cards;                                           // Inserimento delle card nel DOM


/**************
    FUNZIONI
***************/

// Funzione che genera la card per ciascun membro
function creaCard(membro) {

    const { name, role, email, img } = membro;                             //Estraggo le proprietà per ogni membro usando destructuring

    const card =                                                           // Genero il markup html per il membro corrente utilizzando template literal

    `
        <div class="card">
            <div class="card-img">
                <img src=${img} alt="${name}"> <!-- Foto-->
            </div>

            <div class="card-content">
                <h3> ${name} </h3>
                <span>${role}</span> 
                <a href="#"> ${email} </a>
            </div>
        </div> 
    `
    return card;
}