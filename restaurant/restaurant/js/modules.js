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
          <input type="button" value="-" class="cart-btn moins" id="moins" />
          <input type="button" size="1" value="0" id="count counter" class="counter" />
          <input type="button" value="+" class="cart-btn plus" id="plus" />
          <input  class="cart-btn add" type="button" value="Add To Cart" id="add"/>
          <p> Price : <span class="itemPrice">10</span>$</p>
          <p> total <span class="totalprice">0</span>$</p>
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



let plus = document.getElementsByClassName("plus");
let moin = document.getElementsByClassName("moins");
let counts = document.getElementsByClassName("counter");
let prices = document.getElementsByClassName("itemPrice");
let totals = document.getElementsByClassName("totalprice");
let alladd = document.getElementsByClassName("add");

var totalitems = 0;
var totalamount = 0;

function addItem() {
    for (let i = 0; i < plus.length; i++) {
        let button = plus[i];
        let counter = counts[i];
        let price = prices[i];
        let total = totals[i];
        button.addEventListener("click", function() {
            counter.value++;
            let topay = price.innerHTML * counter.value;
            total.innerHTML = topay;

            totalamount = +totalamount + +price.innerHTML;
            totalitems = +totalitems + 1;
        });
    }
}

function removeItem() {
    for (let i = 0; i < moin.length; i++) {
        let button = moin[i];
        let counter = counts[i];
        let price = prices[i];
        let addbtn = alladd[i];
        let total = totals[i];
        button.addEventListener("click", function() {
            if (counter.value > 0) {
                counter.value--;
                totalamount = +totalamount - +price.innerHTML;
                totalitems = +totalitems - 1;
            }
            let topay = price.innerHTML * counter.value;
            total.innerHTML = topay;

        });
    }
}
let topay;

function addlist_header() {
    let alladd = document.getElementsByClassName("add");
    for (let i = 0; i < alladd.length; i++) {
        alladd[i].addEventListener("click", () => {
            // console.log(`you added ${totalitems} for a total price of ${totalamount} `);
            document.getElementById("total").innerHTML = `${totalitems}`;
            document.getElementById("price").innerHTML = `${totalamount}`;
        });
    }
}





const init = function(e) {
    let btn = document.querySelector("#cart");

    btn.addEventListener('click', function() {
        localStorage.setItem('total-price', totalamount)
        localStorage.setItem('total-items', totalitems)
        window.location = './cart.html';
        console.log(btn)
    })
}
document.addEventListener('DOMContentLoaded', function() {
    init();
})

















displayItems(menu);
displaybuttons();
filter();
classeactive();
search();
addItem();
removeItem();
addlist_header();