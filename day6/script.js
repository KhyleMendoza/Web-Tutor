// document.getElementById("money")
// console.log(document.getElementById("money"))

//const can't be change value
// const water = "blue";
// water = "green"

//value can be change
// let water = "blue"
// water = "green"

// console.log(water)

// function namez() {
//     let namezz = "Khyle";
//     console.log("function called")
// }

// const button = document.getElementById("btn") //get element with id btn
// console.log(button)
// const button = document.getElementsByClassName("btn") // get all element with classname btn
// console.log(button[0])//class index get
// const button = document.getElementsByTagName("button") // get all element with tagname button
// console.log(button[1])
// const button = document.querySelector("button") //selects the 1st element with tagname button
// const button = document.querySelector(".btn") //selects the 1st element with classname btn
// const button = document.querySelector("#btn") // selects the 1st element with id btn

// const button = document.querySelectorAll("button") //select all element with tagname button
// const button = document.querySelectorAll(".btn") //select all element with classname btn
// const button = document.querySelectorAll("#button") //select all element with selectorAll

// console.log(button[0])

function arianne() {

    let auth = true

    if (!auth) {
        console.log("not authorize")
        return; // end function
    }
    



    let money = 20

    if (money >= 20) { // for condition statements
        console.log("rich")
    } else if (money >= 10) {
        console.log("balance")
    } else {
        console.log("no money")
    }

    let life = 1

    if (life == 1) {
        console.log("life")
    } else {
        console.log("no life")
    }
}

// arianne()


// const button = document.getElementById("btn") 
// const button = document.getElementsByTagName("button")
// console.log(button[0]);

// button[0].addEventListener("click", function() {
//     console.log("kkk")
//     arianne()
// })

// button[0].addEventListener("click", function () {
//     console.log("tiktok")
//     arianne()
// })

// button[0].addEventListener("click", function() {
//     console.log("kkk")
//     arianne()
// })
    
// button[0].addEventListener("click", function(){
//     console.log("give me money")
//     arianne()
// })

// button[0].addEventListener("click", function(){
//     console.log("excellent")
//     arianne()
// })

// const button = document.getElementsByTagName("button") 
// button[0].addEventListener("click", function() {
//     console.log("button")
//     arianne()
// })

// const button = document.getElementsByTagName("button")

// button[0].addEventListener("click", function() {
//     console.log("STUDYING JAVASCRIPT")
//     arianne()
// })


// const button = document.getElementsByClassName("btn")
// button[0].addEventListener("click", function(){
//     console.log("Accurate")
//     arianne()
// })


// const button =document.querySelector("button")
// button.addEventListener("click", function(){
//     console.log("GRATEFUL")
//     arianne()
// })


// const button = document.querySelectorAll("button")
// button[0].addEventListener("click", function(){
//     console.log("HOPE")
//     arianne()
// })

// const button =document.querySelectorAll("button")
// button[1].addEventListener("click", function () {
//     console.log("SUCCESSFULLY")
//     arianne()
// })



function kingkong () {

    let auth = true

    if (!auth) {
        console.log("not authorize")
        return;
    }
    console.log("congrats") 
}

const button=document.getElementById("btn")
button.addEventListener("click", function(){
    console.log("PROUD")
    kingkong ()
})