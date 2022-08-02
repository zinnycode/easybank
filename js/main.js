const openMenu = document.querySelector(".navOpen")
const closeMenu = document.querySelector(".navClose")
const navMenu = document.querySelector(".navlinks")

openMenu.addEventListener("click", function(){
    navMenu.style.top = "25%"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})

closeMenu.addEventListener("click", function(){
    navMenu.style.top = "-25%"
    closeMenu.style.display = "none"
    openMenu.style.display = "block"
})