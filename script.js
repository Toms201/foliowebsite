// JS File Author: Tom Sargent
// Author email: tom.sargent@student.curtin.edu.au
// Date: 18/04/2023

// I Learnt the JS for how to build a hamburger menu for mobile view from https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci
// When I didn't understand something, i then asked ChatGPT for help to explain https://chat.openai.com/

// Select the element with the class "menu-btn" and assign it to the variable "menuBtn"
const menuBtn = document.querySelector('.menu-btn');

// Select the element with the class "nav-links" and assign it to the variable "navLinks"
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the "menuBtn" element that responds on "click"
menuBtn.addEventListener('click', () => {
  // Toggle the "show" class on the "navLinks" element when the "menuBtn" is clicked
  navLinks.classList.toggle('show');
});

// I learn the JS for how to make a Scroll Button at https://w3collective.com/scroll-to-top-button-javascript/ and https://stackoverflow.com/questions/71853528/how-to-scroll-to-the-bottom-of-the-selected-divwith the assistance of ChatGPT https://chat.openai.com/ where I didn't understand something
// Select the element with the ID "scrollBtn" and assign it to the variable "scrollBtn"
const scrollBtn = document.querySelector("#scrollBtn");

// Select the element with the ID "about" and assign it to the variable "aboutSection"
const aboutSection = document.querySelector("#about");

// Add an event listener to the "scrollBtn" element
scrollBtn.addEventListener("click", function(e) {
  // Prevent the default behavior of scrolling to top of page
  e.preventDefault();
  // Scroll smoothly to the "aboutSection"
  aboutSection.scrollIntoView({ behavior: "smooth" });
});