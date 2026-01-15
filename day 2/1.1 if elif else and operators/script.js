let age = 22

if (age >= 18) {
    console.log(`You are an adult with age of ${age}`)
} else {
    console.log("You are still a minor!")
}

let money = 500

if (money >= 1000) {
    console.log("You are rich");
} else if (money >= 500) {
    console.log(`You are middle class with money of ${money}`);
} else {
    console.log("You are poor");
}

let name = "khyle"

if (name == "khyle") {
    console.log("You may enter!")
} else {
    console.log("Not allowed!")
}

//We can use operators such as:

let agec = 22;
console.log(agec == 22) // equal
console.log(agec != 18);  // not equal
console.log(agec !== "22"); // not equal or not same type
console.log(agec > 18);   // greater than
console.log(agec >= 18);  // greater than or equal
console.log(agec < 30);   // less than
console.log(agec <= 30);  // less than or equal

agec=23
console.log(agec)
agec+=1
console.log(agec)
agec-=1
console.log(agec)
agec*=2
console.log(agec)

