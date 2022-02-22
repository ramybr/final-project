const init = function (e) {
  let order = document.querySelector(".order");
  let totalPrice = localStorage.getItem("total-price");
  let totalItems = localStorage.getItem("total-items");

  if (localStorage.length == 0) {
    order.innerHTML = `You don't have any items yet ! `;
  } else {
    order.innerHTML = `${totalItems} items for a total of ${totalPrice} dt`;
  }
};

let container = document.querySelector(".container");

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
    let display = tempfiltredarrayofdishes
      .map((element) => {
        return `<div class="order">

            <h3>dish :${element.title}</h3><img src="${element.img}"/>
             </div>`;
      })
      .join("");
    container.innerHTML = display;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  init();

  // localStorage.clear();
});

recieve();
