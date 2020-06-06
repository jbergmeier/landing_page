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
const sectionCollection = document.querySelectorAll("section");
const getNav = document.getElementById("navbar__list");

const nav_items = sectionCollection.forEach(function (userItem) {
  console.log(userItem.dataset.nav);
  navLi = document.createElement("li");
  navLi.className = "navLi active";
  navA = document.createElement("a");
  linkText = document.createTextNode(userItem.dataset.nav);
  navA.appendChild(linkText);
  navA.href = `#${userItem.id}`;
  navLi.appendChild(navA);
  getNav.appendChild(navLi);
});

function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      console.log("Active");
    } else {
      // Your logic to remove active classes
      console.log("passive");
    }
  }
}

function isElementInViewport(el) {
  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
