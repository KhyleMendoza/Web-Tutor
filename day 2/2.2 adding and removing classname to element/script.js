let btn = document.getElementById('btn');
let btnRemove = document.getElementById('btnRemove');
let box = document.getElementById('box');

btn.addEventListener('click', function() {
    box.classList.add('box');
})

btnRemove.addEventListener('click', function() {
    box.classList.remove('box')
})