const navButtons = document.querySelectorAll(".navbtn");
    const brand = document.querySelector(".brand");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            navButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    brand.addEventListener("click", function() {
        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });
    });

   