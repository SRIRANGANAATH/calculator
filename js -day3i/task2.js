let i=prompt("Enter your monthly income :");
let r=Number(prompt("Enter your monthly rent :"));
let g=Number(prompt("Enter your monthly grocery expense :"));
let t=Number(prompt("Enter your monthly transport expense :"));
let o=Number(r+g+t);
let s=i-o;
alert("Your total expense is "+o);
if (s>0){
    alert("Remaining balance from your income : "+s);
}else{
    alert("You are overspending by "+(-s));
}
let p=(o/i)*100;
alert("You are spending "+p+"% of your income");
if (s>0){
    alert("You are within budget. Good job!");
}
else{
    alert("You are overspending. Please review your expenses.");
}
