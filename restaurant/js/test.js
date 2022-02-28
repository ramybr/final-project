const init = function(e) {
    let order = document.querySelector(".order");
    // 
    if (localStorage.length == 0) {
        container.innerHTML = `You don't have any items yet ! `;
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

// let testing = document.getElementsByClassName("test-button")
// let testing2 = document.querySelector(".test-button2")
// let testing3 = document.getElementById('test')
// console.log(testing)























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

                total += (dish.price)

                console.log(total)


            }

        )

        let display = tempfiltredarrayofdishes
            .map((element) => {
                return `
                <div class="dish">
                <input type="button" class="btn remove" id="remove" value="Remove" onclick="removeItem(this)"/>
            <div class="dish-info">
            <img src="${element.img}"/><span>${element.title}</span>
            </div>
            <div class="item-price">        
            <span  id='element-price'>${element.price} Dt</span>
            </div> 
            </div> `;

            })
            .join("");
        let totalDisplay = ` <span>TOTAL :</span> <span id="total-price">${total.toFixed(2)} Dt</span>`

        container.innerHTML = display;
        totalDiv.innerHTML = totalDisplay;





    });
}



function removeItem(elements) {
    let element = elements;
    let elementPrice = (element.nextElementSibling).nextElementSibling;
    let totalPrice = document.getElementById('total-price');
    let removeBtn = document.getElementsByClassName('remove');
    console.log(removeBtn.length)


    totalPrice.innerHTML = `${(parseFloat(totalPrice.innerHTML.replace('Dt', '') - +elementPrice.innerText.replace('Dt', ''))).toFixed(2)} Dt`;

    element.parentNode.remove();
    if (removeBtn.length === 0) {
        container.innerHTML = `You don't have any items yet ! `
        welcome.innerHTML = ``;
        goodbye.innerHTML = ``;



    }




}


document.addEventListener("DOMContentLoaded", function() {
    init();
    // localStorage.clear();
});

recieve();