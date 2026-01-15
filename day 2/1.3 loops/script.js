for (let i = 1; i < 5; i++) {
    console.log(i)
}

let Fruits = ["Apple", "Mango", "Grapes"]

for (let i= 0; i < Fruits.length; i++) {
    console.log(Fruits[i])
}

let Fruits2 = ["Blueberry", "Lychee", "Buko"]

for (let fruit of Fruits2) {
    console.log(fruit);
}

let money = 5

while (money > 0) {
    console.log(`I have $${money}`);
    money--;
}

console.log("I have no money")

money = 5
do {
    console.log(`I have $${money}`)
} while (money < 0)
