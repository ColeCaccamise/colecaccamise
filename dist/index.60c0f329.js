!function(){"use strict";const a=document.querySelector(".navbar");window.onscroll=()=>{window.pageYOffset>30?a.classList.add("box-shadow"):a.classList.remove("box-shadow")};let e=`\n<div class="line"></div>\n      \n      <div class='footer__content'>\n      \n          <div>\n              <p class='copyright'>&copy; <span id="year">${(new Date).getFullYear()}</span> <a href="/"><span class="footer-name">Cole Caccamise</span></a></p>\n          </div>\n          <div>\n              <a href="https://youtube.com/c/colecaccamise" class="footer__icon">\n                  <i class="fab fa-youtube"></i>\n                </a>\n  \n                <a href="https://twitter.com/colecaccamise" class="footer__icon">\n                  <i class="fab fa-twitter"></i>\n                </a>\n\n                <a href="https://instagram.com/cole.caccamise" class="footer__icon">\n                  <i class="fab fa-instagram"></i>\n                </a>\n\n                <a href="https://twitch.tv/colecaccamise" class="footer__icon">\n                  <i class="fab fa-twitch"></i>\n                </a>\n          </div>\n      </div>\n`;document.querySelector(".footer__container").innerHTML=e;const c=document.querySelector(".hamburger"),n=document.querySelector(".navbar__menu");c&&c.addEventListener("click",(function(){n.classList.toggle("flex")}))}();
//# sourceMappingURL=index.60c0f329.js.map
