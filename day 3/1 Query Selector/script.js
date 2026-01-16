let allcard = document.querySelectorAll('.card');

for (let i = 0; i < allcard.length; i++) {
    allcard[i].style.backgroundColor = 'green';
    allcard[i].querySelector('p').style.color = 'white';
}

let firstcard = document.querySelector('.card').style.backgroundColor = 'Blue';

let firstp = document.querySelector('.card p').style.color = 'red';

let firsth1 = document.querySelector('.card h1').style.color = 'yellow';

let thirdcard = allcard[2];

thirdcard.style.backgroundColor = 'red'

thirdcard.querySelector('p').innerText = "Hello World";