/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sectionCollection = document.querySelectorAll("section");
const getNav = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const nav_items = sectionCollection.forEach(function (navItem) {
  console.log(navItem.dataset.nav);
  navLi = document.createElement("li");
  navLi.className = "navLi";
  navA = document.createElement("a");
  linkText = document.createTextNode(navItem.dataset.nav);
  navA.appendChild(linkText);
  navA.href = `#${navItem.id}`;
  navLi.appendChild(navA);
  getNav.appendChild(navLi);
});

// Add class 'active' to section when near top of viewport
// make section active

function makeActive() {
  for (let i = 0; i < sectionCollection.length; i++) {
    let getNavLi = document.getElementsByClassName("navLi");
    let box = sectionCollection[i].getBoundingClientRect();

    if (box.top <= 100 && box.bottom >= 100) {
      getNavLi[i].classList.add("active");
      sectionCollection[i].classList.add("your-active-class");
    } else {
      getNavLi[i].classList.remove("active");
      sectionCollection[i].classList.remove("your-active-class");
    }
  }
}

// Scroll to anchor ID using scrollTO event - smooth scroll setup in HTML for the entire doc
document.addEventListener("scroll", function () {
  makeActive();
  console.log("t");
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// DONE -Build menu

// DONE - Scroll to section on link click

// Set sections as active
