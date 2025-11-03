let userName = prompt("Enter your name:");

if (!userName || isNaN(userName)) {
    alert("Invalid Name");
} else {
    let confirmOrder = confirm("Hello " + userName + "! Do you want to order food?");

    if (!confirmOrder) {
        alert("Goodbye " + userName + "! See you next time.");
    } else {
        let menu = {
            pizza: 150,
            burger: 100,
            sandwich: 80
        };

        let foodChoice = prompt(
            "Menu:\n1. Pizza ($150)\n2. Burger ($100)\n3. Sandwich ($80)\n\nEnter your choice:"
        );

        foodChoice = foodChoice.toLowerCase();

        if (foodChoice !== "pizza" && foodChoice !== "burger" && foodChoice !== "sandwich") {
            alert("Invalid choice!");
        } else {
            let quantity = prompt("Enter quantity:");
            quantity = Number(quantity);

            if (isNaN(quantity) || quantity <= 0) {
                alert("Invalid quantity!");
            } else {
                let price = menu[foodChoice];
                let total = price * quantity;

                alert("You ordered " + quantity + " " + foodChoice + "(s). Total = $" + total);
            }
        }
    }
}
