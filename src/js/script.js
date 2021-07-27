"use strict";


// don't have to reload page
if(module.hot) {
    module.hot.accept()
}

const navbar = document.querySelector(".navbar");

// add shadow to navbar
window.onscroll = () => {
  if (window.pageYOffset > 30) {
    navbar.classList.add("box-shadow");
  } else {
    navbar.classList.remove("box-shadow");
  }
};


let dynamicYear = new Date().getFullYear();

let footer = `
<div class="line"></div>
      
      <div class='footer__content'>
      
          <div>
              <p class='copyright'>&copy; <span id="year">${dynamicYear}</span> <a href="/"><span class="footer-name">Cole Caccamise</span></a></p>
          </div>
          <div>
              <a href="https://youtube.com/c/colecaccamise" class="footer__icon">
                  <i class="fab fa-youtube"></i>
                </a>
  
                <a href="https://twitter.com/colecaccamise" class="footer__icon">
                  <i class="fab fa-twitter"></i>
                </a>

                <a href="https://instagram.com/cole.caccamise" class="footer__icon">
                  <i class="fab fa-instagram"></i>
                </a>

                <a href="https://twitch.tv/colecaccamise" class="footer__icon">
                  <i class="fab fa-twitch"></i>
                </a>
          </div>
      </div>
`

document.querySelector('.footer__container').innerHTML = footer;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__menu');

function toggleMenu() {
    
    navMenu.classList.toggle('flex')
        
}

if(hamburger) hamburger.addEventListener('click', toggleMenu);