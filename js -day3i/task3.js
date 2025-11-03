let p = Number(prompt("Enter pin:"));
let amount=10000
if (p === 7585) {
    alert("Welcome to your account");
    let a = true;
    try{
        while (a === true) {
            let option = prompt("Choose an option: \n1=Check Balance,\n 2=Withdraw,\n 3=Deposit,\n 4=Exit");
        switch (option) {
            case "1":
                alert("Your balance is "+ amount);
                break;
            case "2":
                let w = Number(prompt("Enter amount to withdraw:"));
                if (w <= 5000) {
                    alert("Please take your cash. Your new balance is $" + (amount - w));
                } else {
                    alert("Insufficient balance.");
                }
                break;
            case "3":
                let d = Number(prompt("Enter amount to deposit:"));
                alert("Your new balance is $" + (amount + d));
                break;
            case "4":
                alert("Thank you for using our service. Goodbye!");
                break;
            default:
                alert("Invalid option selected.");
        }
        let b = confirm("Do you want to check again?");
        if (b === false) {
            alert("Goodbye!");
            break;
        }
    }
    }catch(error){
        alert("An error occurred: " + error);
    }
}
