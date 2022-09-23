
const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))

let typed = new Typed(".auto-type", {
    strings: ["Salomon Solomon", "a Web-Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
 })
