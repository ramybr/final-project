// OUR DATA ARRAY
// ***************
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
        title: "diner double",
        category: "dinner",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 12.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo&reg dream",
        category: "shakes",
        price: 18.99,
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
    },
];
let container = document.querySelector('.container');



// ADDING OUR BUTTONS DYNAMICALLY 
// *******************************
window.addEventListener("DOMContentLoaded", function() {
    displayItems(menu);
    const categories = menu.reduce(
        function(value, current) {
            if (!value.includes(current.category)) {
                value.push(current.category);
            }
            return value
        }, ["all"])
    const buttons = categories.map(function(category) {
        return `<button class="btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");



    //  FILTERING ELEMENTS BY CATEGORY
    //  *******************************
    btnContainer = document.querySelector('.btn-container');
    btnContainer.innerHTML = buttons;

    let btns = document.getElementsByClassName('btn');
    let btnsArray = Array.from(btns);

    btnsArray.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id
            console.log(category);
            const menuCategory = menu.filter(function(element) {
                if (element.category === category) {


                    return element;
                }
            })

            if (category === "all") {
                displayItems(menu);


            } else {
                displayItems(menuCategory);
            }
        })
    })
    btnsArray.forEach(button => {
        button.addEventListener('click', function() {
            btnsArray.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        })
    })
})



// DISPLAYING ELEMENTS
// ******************** 
function displayItems(menuItems) {

    let elements = menuItems.map((element) => {
        return (`<div class="dish">
        <img src=${element.img} alt="9" class="dish-photo">
        <div class="dish-info">
            <div class="dish-title"><span class="dish-name">${element.title}</span><span class="price">${element.price} dt</span></div>
            <p> ${element.desc}</p>
        </div>
    </div>`)
    })
    elements = elements.join("")
    container.innerHTML = elements;

}