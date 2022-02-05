         

        document.addEventListener("DOMContentLoaded", () => {
            const nav = document.querySelector(".nav");

            document.querySelector("#btnNav").onclick = () => {
                nav.classList.add("nav--open");
            };

            document.querySelector(".nav__overlay").onclick = () => {
                nav.classList.remove("nav--open");
            };

            var btn2 = document.getElementById('btn2');
        btn2.onclick = () => {
            nav.classList.remove("nav--open");
        }
        });



