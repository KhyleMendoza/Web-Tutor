let btn = document.getElementById('submitBtn');

let Balance = 1000

btn.addEventListener('click', function() {
    let Name = document.getElementById('Name').value;
    let Age = document.getElementById('Age').value;
    
    if (!Name || !Age) {
        alert("Please enter a valid name and age")
    } else {
        let form = document.getElementById('form');
        let store = document.getElementById('store');
        let Namel = document.getElementById('Namel')
        let Agel = document.getElementById('Agel')
        let Balancel = document.getElementById('Balancel')
        Namel.innerText = Name
        Agel.innerText = Age
        Balancel.innerText = Balance
        store.style.display='block';
        form.style.display='none';
    }
})

buyBtn = document.getElementsByClassName('buy');

buyBtn[0].addEventListener('click', function() {
    if (Balance >= 200) {
        let Balancel = document.getElementById('Balancel')
        Balance -= 200
        Balancel.innerText = Balance
        Purchase()
    } else{
        alert("Your balance is not enough")
    }
})

buyBtn[1].addEventListener('click', function() {
    if (Balance >= 200) {
        let Balancel = document.getElementById('Balancel')
        Balance -= 200
        Balancel.innerText = Balance
    } else{
        alert("Your balance is not enough")
    }
})

buyBtn[2].addEventListener('click', function() {
    if (Balance >= 200) {
        let Balancel = document.getElementById('Balancel')
        Balance -= 200
        Balancel.innerText = Balance
    } else{
        alert("Your balance is not enough")
    }
})

function Purchase() {
    purchase = document.getElementById('purchase');
    purchase.style.display='block';
    setTimeout(function() {
        purchase.style.display='none';
    }, 3000);

}




// console.log(Name, Age, Balance)


// =
// 5 > 10 //false
// 5 < 3 //false
// 15 >= 20 //true
// 1 <= 1  //true
// 15 == "15" //true
// 15 === "15" //false
// !Age
// Age

// if (!Age || !Name) {
//     console.log("You are adult!");
// } else if (Age >= 15) {
//     console.log("You are a minor!");
// } else {
//     console.log("you are a kid")
// }