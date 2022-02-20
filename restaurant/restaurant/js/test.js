const init = function(e) {
    let order = document.querySelector(".order");
    let totalPrice = localStorage.getItem('total-price');
    let totalItems = localStorage.getItem('total-items');
    console.log(localStorage)
    order.innerHTML = `You have bought ${totalItems} items for a total of ${totalPrice} dt`
}


document.addEventListener('DOMContentLoaded', function() {
    init();
});