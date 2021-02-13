const hamburger = document.getElementById("hamburger")
const navList = document.getElementById("navList")
var hamburgerOpen = false

hamburger.onclick = () => {
  hamburgerOpen = !hamburgerOpen
  navList.classList.toggle("nav-shown")
  hamburger.src = `img/icons/${hamburgerOpen ? `close.svg` : `hamburger.svg`}`
}