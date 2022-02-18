// OUR DATA ARRAY
const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "egg attack",
        category: "lunch",
        price: 12.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 3,
        title: "diner double",
        category: "dinner",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 4,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 5,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },

    {
        id: 6,
        title: "oreo&reg dream",
        category: "shakes",
        price: 8.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 29.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }


];
// ***************

// GLOBAL VARIABLES
let container = document.querySelector(".container");
let btnContainer = document.querySelector(".btn-container");
let dish = document.getElementsByClassName("dish");
console.log(dish)

//****************

// DISPLAYING ELEMENTS
function displayItems(array) {
    let showelements = array
        .map((element) => {
            return `<div class="dish">
          <img src=${element.img} alt="9" class="dish-photo">
          <div class="dish-info">
              <div class="dish-title"><span class="dish-name">${element.title}</span><span class="price">${element.price} dt</span></div>
              <p> ${element.desc}</p>
          </div>
      </div>`;
        })
        .join("");
    container.innerHTML = showelements;
}
// ***************

// DISPLAYING BUTTONS
function displaybuttons() {
    // GETTING UNIQUE BUTTONS
    let arrayofbuttons = menu.map((element) => element.category);
    arrayofbuttons.unshift("All");
    let uniquebuttons = [...new Set(arrayofbuttons)];
    // ***************
    // SHOWING THE BUTTONS IN THE PAGE
    let buttons = uniquebuttons
        .map((category) => {
            return `<button class="btn" type="button" data-id="${category}">${category}</button>`;
        })
        .join("");
    btnContainer.innerHTML = buttons;
    //****************
}
//**************

// ShOWING ELEMENTS BY CATEGORY

function filter() {
    let buttons = document.getElementsByClassName("btn");
    let btnsArray = Array.from(buttons);
    btnsArray.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let category = e.target.dataset.id;
            let filtredcategory = menu.filter(
                (element) => element.category === category
            );
            displayItems(filtredcategory);
            if (category === "All") {
                displayItems(menu);
            }
        });
    });
}

//*************************

//ALTERNATE BUTTONS CLASSES
function classeactive() {
    let buttons = document.getElementsByClassName("btn");
    let btnsArray = Array.from(buttons);
    btnsArray.forEach((button) => {
        button.addEventListener("click", function() {
            btnsArray.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
}
//******************



// SEARCHBAR
function search() {
    const searchBar = document.getElementById('searchBar');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredItems = menu.filter(element => {

            return element.title.includes(searchString) || element.category.includes(searchString);
        });
        displayItems(filteredItems);
    });
}
// ********************




















displayItems(menu);
displaybuttons();
filter();
classeactive();
search();