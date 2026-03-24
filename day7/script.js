// let money = 0
// console.log(money)

// for (let i = 1; i<=5; i++) {
//     money++
//     console.log(`Money: ${money} loop: ${i}`)
// }

// *
// **
// ***
// ****
// *****
// ******


// 1st loop:
// i=0
// true
// let stars = ""
// x = 0
// 0 <= 0
// true
// stars = "*"
// *
// x = 1
// 1 <= 0
// false

// 2nd loop
// i=1
// stars = "*"
// stars = ""
// x = 1
// x = 0
// 0<=1
// true
// stars = "*"
// x = 1
// 1<=1
// true
// stars = "**"
// x = 2
// 2 <= 1
// false
// **

// 3rd loop:
// i = 2
// 2 <= 5
// true
// stars = "**"
// stars = ""
// x = 2
// x = 0
// 0 <= 2
// true
// stars = "*"
// x = 1
// 1 <= 2
// true
// stars = "**"
// x = 2
// 2 <= 2
// true
// stars = "***"
// x = 3
// 3 <= 2
// false
// ***

// 4th loop
// i = 3
// 3 <= 5
// true
// stars = "***"
// stars = ""
// x = 3
// x = 0
// 0 <= 3
// true
// stars = "*"
// x = 1
// 1 <= 3
// true
// stars = "**"





for (let i = 0; i<=5; i++) {
    let stars = ""
    for (let x = 0; x<=i; x++) {
        stars += "*a"
    }
    console.log(stars)
}


// let star = ""
// console.log(star)
// star += "*"
// console.log(star)
// star += "*"
// console.log(star)
// star += "*"
// console.log(star)
// star += "*"
// console.log(star)
