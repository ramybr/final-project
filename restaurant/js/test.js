const init = function(e) {
    let order = document.querySelector(".order");
    // 
    if (localStorage.length == 0) {
        order.innerHTML = `You don't have any items yet ! `;
    } else {
        welcome.innerHTML = `<span>You have ordered :</span>`;
        goodbye.innerHTML = `<span>Thanks for your visit, we hope to see you again soon in our restaurant...</span>`
    }
};

let container = document.querySelector(".container");
let totalDiv = document.querySelector(".total");
let order = document.querySelector(".order");
let welcome = document.querySelector(".welcome");
let goodbye = document.querySelector(".goodbye");







function recieve() {
    // RECIEVE OBJECT
    // ***************
    document.addEventListener("DOMContentLoaded", () => {
        let cartObjStr = localStorage.getItem("tempObj");
        let cartObj = JSON.parse(cartObjStr);
        // console.log(cartObj)
        // console.log(dishId)

        // RECIEVE ARRAY OF ID
        // ********************
        let dishesIdString = localStorage.getItem("dishes-id-array");
        let dishesIdArray = JSON.parse(dishesIdString);
        console.log(dishesIdArray);

        let tempfiltredarrayofdishes = []; // empty array
        // for for filtring the elements only and we create an array of object using the spread then push
        for (i = 0; i < dishesIdArray.length; i++) {
            let toDisplay = cartObj.filter(
                (element) => element.id == dishesIdArray[i]
            );
            // console.log(toDisplay)
            // toDisplay = toDisplay.concat(toDisplay)
            // tempDishes.push(...toDisplay)
            // tempDishes = [...toDisplay, ...toDisplay];
            // console.log(tempDishes);
            // let displayAll = toDisplay.concat(toDisplay)
            tempfiltredarrayofdishes.push(...toDisplay);

        }

        console.log(tempfiltredarrayofdishes);
        let total = 0;
        tempfiltredarrayofdishes.forEach(dish => {

            total += dish.price
            console.log(total)

        })

        let display = tempfiltredarrayofdishes
            .map((element) => {
                return `
                <div class="dish">
            <div class="dish-info">
            <img src="${element.img}"/><span>${element.title}</span>
            </div>
            <div class="item-price">        
            <span>${element.price} Dt</span>
            </div> 
            </div> `;
            })
            .join("");

        let totalDisplay = ` <span>TOTAL : ${total} Dt</span>`

        container.innerHTML = display;
        totalDiv.innerHTML = totalDisplay;
        // totalDiv.style.backgroundColor = "yellow"





    });
}

document.addEventListener("DOMContentLoaded", function() {
    init();

    // localStorage.clear();
});

recieve();