// here we selected the classes from the html and stored them in variables
// the ones with dots(.) are the same class names coming from the html
// while the without dots(.) are variables we created in the js
const openMenu = document.querySelector(".navOpen")
const closeMenu = document.querySelector(".navClose")
const navMenu = document.querySelector(".navlinks")

// so here we added event liteners on the open menu
openMenu.addEventListener("click", function(){
    // here we changed the top value of the navlinks to 30%
    navMenu.style.top = "30%"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})

// so here we added event liteners on the close menu
closeMenu.addEventListener("click", function(){
    // here we changed the top value of the navlinks to -50%
    navMenu.style.top = "-50%"
    closeMenu.style.display = "none"
    openMenu.style.display = "block"

})