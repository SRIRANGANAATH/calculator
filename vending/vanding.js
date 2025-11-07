function salads() {
    let vend = document.getElementById("vend");        
    let menusalad = document.getElementById("menusalad"); 
    let chip = document.getElementById("menuchips");
    if (menusalad.style.display === "none") {
        menusalad.style.display = "block";
        vend.style.display = "none";
        chip.style.display = "none";
    }
}

function drinks() {
    let vend = document.getElementById("vend");        
    let menusalad = document.getElementById("menusalad");
    let chip = document.getElementById("menuchips");
   
    if (vend.style.display === "none") {
        vend.style.display = "block";
        menusalad.style.display = "none";
        chip.style.display = "none";
    }
}

function chips()
{
    let vend = document.getElementById("vend");        
    let menusalad = document.getElementById("menusalad");
    let chip = document.getElementById("menuchips");
   
    if (chip.style.display === "none") {
        chip.style.display = "block";
        menusalad.style.display = "none";
        vend.style.display = "none";
    }
}

let cartItems = [];
let totalPrice = 0;

function price(itemName, itemPrice) {

    document.getElementById("cart").style.display = "block";

    cartItems.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""
    cartItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    document.getElementById("cart-total").textContent = totalPrice.toFixed(2);
}

   function checkout() {
      let payment = prompt("Choose payment method: Cash / UPI / Card");
      if (!['cash', 'upi', 'card'].includes(payment)) {
        alert("Invalid payment option. Please try again.");
        // return;
      }
      let finaltotal = totalPrice;
      let coupon = prompt("Enter coupon code if you have one (or press Cancel)");
      if (coupon === "7585") {
        let discount = finaltotal * 0.3;
        finaltotal -= discount;
        alert(`Coupon applied! You saved $${discount.toFixed(2)}.`);
      } else{
        alert("Invalid coupon code!");
      }

      let confirmPay = confirm(`You chose ${payment}.\nYour final total is ${finaltotal.toFixed(2)}.\nProceed with payment?`);
      if (confirmPay) {
        alert("Payment successful! Thank you for your purchase.");
        resetCart();
      } else {
        alert("Payment cancelled.");
      }
    }

    function resetCart() {
      cart = [];
      totalPrice = 0;
      document.getElementById('cart').style.display = 'none';
      document.getElementById('cart-list').innerHTML = '';
      document.getElementById('cart-total').textContent = '0.00';
    }
// Items = {itemName,itemPrice,totalPrice};
// function showJson(){
//    let food = {
//     Name : Items.itemName,
//     Price : Items.itemPrice,
//     total_Price :Items.totalPrice 
//    } 
//    let json = JSON.stringify(food,null,2);
//    let j = document.getElementById("JS")
//    j.innerText = json;
// }

