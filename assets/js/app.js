const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".nav-link.active").classList.remove("active");
        item.classList.add("active");
    });
});

const open_bar = document.querySelector('.menu-bar');
const mobil_list = document.querySelector('.listMobil');

open_bar.addEventListener('click', () => {
    open_bar.classList.toggle('bx-x')
    mobil_list.classList.toggle('active')
    Body.classList.toggle('active')
})


let Body = document.querySelector('#body');