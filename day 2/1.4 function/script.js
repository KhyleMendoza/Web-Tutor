function Greet() {
    console.log("Hello!")
}
Greet()

balance = 0
input = 1

if (input == 1) {
    Add()
} else if(input == 2) {4
    Sub()
} else {
    console.log("Invalid Input!")
}

function Add() {
    balance +=1;
    console.log("Added 1$ to your balance!");
    CheckBalance()
}

function Sub() {
    balance -=1;
    console.log("Subtracted 1$ to your balance!")
    CheckBalance()
}

function CheckBalance() {
    console.log(`Your balance is ${balance}$`);
}