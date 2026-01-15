let Submit = document.getElementById('Submit');
let paragraph = document.getElementsByClassName('paragraph');

// paragraph[0].style.display = 'none'

for(let p of paragraph) {
    p.style.display = 'none';
}

Submit.addEventListener('click', function() {
    let Name = document.getElementById('Name').value;
    let Age = document.getElementById('Age').value;
    let Gender = document.getElementById('Gender').value;
    let Student = document.getElementById('student');

    // alert(Name);
    if (!Name && !Age) {
        alert("Please input valid name and age")
    } else {
        for(let p of paragraph) {
            p.style.display = 'block';
        }

        let namel = document.getElementById('namel');
        let agel = document.getElementById('agel');
        let genderl = document.getElementById('genderl');
        let studentl = document.getElementById('studentl')
        agel.innerText = Age;
        namel.innerText = Name.toUpperCase();
        // namel.innerText = Name.toLowerCase();
        genderl.innerText = Gender;
        if (Student.checked) {
            studentl.innerText = "You are a student!";
        } else {
            studentl.innerText = "You are not a student!";
        }
        
        document.getElementById('Name').value = '';
        let AgeInput = document.getElementById('Age');
        AgeInput.value = '';
    }
})
