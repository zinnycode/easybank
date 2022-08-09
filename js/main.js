const openMenu = document.querySelector(".navOpen")
const closeMenu = document.querySelector(".navClose")
const navMenu = document.querySelector(".navLinks")
const html = document.querySelector("html")
const navs = document.querySelectorAll(".navLinks")

openMenu.addEventListener("click", function(){
    navMenu.style.top ="30%"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
    html.style.overflowY = "hidden"
})

closeMenu.addEventListener("click" , function(){
    navMenu.style.top = "-50%"
    closeMenu.style.display = "none"
    openMenu.style.display = "block"
})

navs.forEach(item => {
    item.addEventListener("click", function(){
        html.style.overflowY = "scroll"
        navMenu.style.top = "-50%"
        closeMenu.style.display = "none"
        openMenu.style.display = "block"
    })
})












AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});








// here we selected the classes from the html and stored them in variables
// the ones with dots(.) are the same class names coming from the html
// while the without dots(.) are variables we created in the js
// const openMenu = document.querySelector(".navOpen")
// const closeMenu = document.querySelector(".navClose")
// const navMenu = document.querySelector(".navlinks")

// // so here we added event liteners on the open menu
// openMenu.addEventListener("click", function(){
//     // here we changed the top value of the navlinks to 30%
//     navMenu.style.top = "30%"
//     openMenu.style.display = "none"
//     closeMenu.style.display = "block"
// })

// // so here we added event liteners on the close menu
// closeMenu.addEventListener("click", function(){
//     // here we changed the top value of the navlinks to -50%
//     navMenu.style.top = "-50%"
//     closeMenu.style.display = "none"
//     openMenu.style.display = "block"

// })




const scrollTopBtn = document.querySelector('#scrollToTop')
window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollTopBtn.style.display = "block"
        // console.log(document.body.scrollTop)
    }else{
        scrollTopBtn.style.display = "block"
        // console.log(document.body.scrollTop)
    }
}

scrollTopBtn.addEventListener('click', function(){
    window.scrollTo(0, 0)
    }
)