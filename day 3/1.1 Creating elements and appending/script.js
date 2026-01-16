btn = document.getElementsByTagName('button');
container = document.getElementById('card-container');

btn[0].addEventListener('click', function() {
    Name = document.getElementById('Name').value;
    if (Name) {
        card = document.createElement('div');
        card.classList.add('card');
        container.append(card);
        p = document.createElement('p');
        btn2 = document.createElement('button');
        btn3 = document.createElement('button');
        btn2.classList.add("delete");
        btn2.innerText = "Delete";
        btn3.classList.add("edit");
        btn3.innerText = "Edit";
        p.classList.add('name')
        p.innerText = Name;
        card.append(p, btn2, btn3);
    } else {
        alert("Please Enter a name!")
    }
})

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.closest('.card').remove();
    }
})

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('edit')) {
        card = e.target.closest('.card');
        namel = card.querySelector('.name');

        newName = prompt("Enter New Name!");
        namel.innerText = newName;
    }
})