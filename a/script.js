// let name = "Khyle"
// let balance = 200
// let age = 10

// age = 20
// balance = 300
// name = "Arianne"
// alert(`${name} ${balance} ${age}`)

let school = "Mcc"
let Program = "BSIT"
let Year = 2
let Section = "B"

Year+=2

// let schoollabel = document.querySelector("#lol")
let Educationlabel = document.getElementById("lol")
let schoollabel = document.getElementsByClassName("ew")
let schoolspan = document.getElementsByClassName("aw")

// let name=prompt("What is your Name?")
// let namelabel = document.getElementById("head")
// namelabel.innerText = name.toUpperCase()



schoollabel[0].style.backgroundColor="blue"
schoolspan[0].innerText = school.toUpperCase()

schoollabel[1].style.fontSize="50px"
schoolspan[1].innerText = Program

schoollabel[2].style.backgroundColor="black"
schoolspan[2].innerText = Year
schoollabel[2].style.color="pink"

// schoollabel[3].style.display="none"

schoollabel[4].style.border="solid 2px pink"
schoolspan[4].innerText = Section
Educationlabel.innerText =`${name.toUpperCase()}_${school.toUpperCase()}-${Program} ${Year}-${Section}`

// alert(`${school.toUpperCase()}-${Program} ${Year}-${Section}`)

// let balance = 30

// let balancelabel = document.querySelector("h1")


// balancelabel.innerText = balance

clickBtn = document.getElementById("clickbtn")

clickBtn.addEventListener("click", function() {
    // schoollabel[3].style.display="block"
    schoollabel[3].classList.toggle("active")
})
