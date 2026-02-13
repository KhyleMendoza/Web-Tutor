addbtn = document.getElementById("add");
modal = document.querySelector(".modal");
modalclose = document.querySelectorAll(".close");
modalconfirm = document.querySelector(".confirm");

addbtn.addEventListener("click", function() {
    modal.classList.toggle("active");
})

modalclose.forEach(function(btn) {
    btn.addEventListener("click", function() {
        modal.classList.remove("active");
    })
})

modalconfirm.addEventListener("click", function() {
    modal.classList.remove("active");
    alert("Thank you for purchasing!");
})
