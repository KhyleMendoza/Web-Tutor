let btn = document.getElementsByTagName('button');
let container = document.getElementById('card-container');

btn[0].addEventListener('click', function() {
    Name = document.getElementById('Name').value;
    if (Name) {
        let card = document.createElement('div');
        card.classList.add('card');
        container.append(card);
        let p = document.createElement('p');
        let btn2 = document.createElement('button');
        let btn3 = document.createElement('button');
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
        let card = e.target.closest('.card');
        let namel = card.querySelector('.name');

        newName = prompt("Enter New Name!");
        if (newName) {
            namel.innerText = newName;
        } else {
            alert("New name can't be empty")
        }
    }
})