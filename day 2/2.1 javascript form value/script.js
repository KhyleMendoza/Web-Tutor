let Submit = document.getElementById('Submit');
let paragraph = document.getElementsByClassName('paragraph');

// paragraph[0].style.display = 'none'

for(let p of paragraph) {
    p.style.display = 'none';
}

Submit.addEventListener('click', function() {
    let Name = document.getElementById('Name').value;
    let Age = document.getElementById('Age').value;
    // alert(Name);
    if (!Name && !Age) {
        alert("Please input valid name and age")
    } else {
        for(let p of paragraph) {
            p.style.display = 'block';
        }

        let namel = document.getElementById('namel');
        let agel = document.getElementById('agel');
        agel.innerText = Age
        namel.innerText = Name.toUpperCase();
        // namel.innerText = Name.toLowerCase();
    }
})
