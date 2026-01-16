// let btn = document.getElementById('submitBtn');

// btn.addEventListener('click', function() {
//     let Name = prompt("What is your name?")
//     alert(Name)
//     //alert("Hello")
// })

// let Name = "Khyle"
// let Age = 22

// console.log(Name)
// console.log(Age)

// Name = "Khyle2"
// Age = 23

// console.log("Hello" + Name)
// console.log("Your age is", Age)
// console.log("Hello " + Name + ", Your age is " + Age)
// console.log(`Hello ${Name} Your age is ${Age}`)

// const pi = 3.14
// console.log(pi)

// pi = 4.3

// console.log(pi)

// var color = "Blue"

// console.log(color)

// color = "red"

// console.log(color)

let colors = ["Blue", "Green", "Red"]
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])

colors[1] = "Pink"
console.log(`The colors are: ${colors[0]}, ${colors[1]}, ${colors[2]}`)

let p = document.getElementById('paragraph');
p.innerText = `The colors are: ${colors[0]}, ${colors[1]}, ${colors[2]}`

let btn = document.getElementById('submitBtn');

btn.addEventListener('click', function() {
    // alert("lol")
    colors[1] = "green"
    p.innerText = `The colors are: ${colors[0]}, ${colors[1]}, ${colors[2]}`
    p.style.color = "green"

    let box = document.getElementsByClassName('box');

    box[0].style.backgroundColor = colors[0];
    box[1].style.backgroundColor =  colors[1];
    box[2].style.backgroundColor = colors[2];

    console.log(box)
})
