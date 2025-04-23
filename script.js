document.querySelector('.whatsapp-icon').addEventListener('click', function(event) {
    event.stopPropagation();
});
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function () {
  let navbarToggler = document.querySelector(".navbar-toggler");
  let navbarCollapse = document.querySelector(".navbar-collapse");

  // Sabhi links par event listener lagao
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      link.addEventListener("click", () => {
          // Agar navbar toggler visible hai (mobile view mein)
          if (window.innerWidth <= 992) {
              navbarToggler.click(); // Toggle ko band karne ke liye click simulate karein
          }
      });
  });
});



const loginPopup = document.getElementById("loginPopup");

function openPopup() {
    loginPopup.style.display = "flex"; 
    setTimeout(() => {
        loginPopup.style.opacity = "1";
        loginPopup.querySelector(".popup-content").style.transform = "scale(1)";
    }, 10);
}

function closePopup() {
    loginPopup.style.opacity = "0";
    loginPopup.querySelector(".popup-content").style.transform = "scale(0.8)";
    setTimeout(() => {
        loginPopup.style.display = "none";
    }, 300);
}

let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let pandaFace = document.querySelector(".panda-face");
let mouth = document.querySelector(".mouth");

// Function to reset eyes
let normalEyeStyle = () => {
  eyeL.style.cssText = `left: 0.6em; top: 0.6em; transform: none;`;
  eyeR.style.cssText = `right: 0.6em; top: 0.6em; transform: none;`;
};

// Function to reset hands
let normalHandStyle = () => {
  handL.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    left: 7.5em;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
  `;
  handR.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    right: 7.5em;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
  `;
};

// **Eyes Follow Cursor Smoothly**
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth) * 2 - 1;
  let y = (e.clientY / window.innerHeight) * 2 - 1;

  eyeL.style.transform = `translate(${x * 4}px, ${y * 4}px)`;
  eyeR.style.transform = `translate(${x * 4}px, ${y * 4}px)`;
});

// **Blinking Animation**
setInterval(() => {
  eyeL.style.height = "0.5em";
  eyeR.style.height = "0.5em";
  setTimeout(() => {
    eyeL.style.height = "0.9em";
    eyeR.style.height = "0.9em";
  }, 200);
}, 1000); // Blinks every 3 seconds

// **Focus on username (Panda watches closely)**
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `left: 0.75em; top: 1.12em; transform: none;`;
  eyeR.style.cssText = `right: 0.75em; top: 1.12em; transform: none;`;
  normalHandStyle();
});

// **Focus on password (Panda Covers Eyes)**
passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
    height: 6.56em;
    top: -5em !important;
    left: 7em !important;
    transform: rotate(-155deg);
    transition: 0.5s ease-in-out;
  `;
  handR.style.cssText = `
    height: 6.56em;
    top: -5em !important;
    right: 7em !important;
    transform: rotate(155deg);
    transition: 0.5s ease-in-out;
  `;
  normalEyeStyle();
});

// **Smooth Head Tilt & Smile on Click**
pandaFace.addEventListener("click", () => {
  // Smooth head tilt
  pandaFace.style.transition = "transform 0.3s ease-in-out";
  pandaFace.style.transform = "rotate(10deg)";
  
  // Make panda smile
  mouth.style.cssText = `
    height: 1em;
    width: 1.2em;
    border-radius: 50%;
    box-shadow: 0 0.3em #3f3554;
    transition: all 0.3s ease-in-out;
  `;

  // Back to normal after delay
  setTimeout(() => {
    pandaFace.style.transform = "rotate(-10deg)";
  }, 300);

  setTimeout(() => {
    pandaFace.style.transform = "rotate(0deg)";
    mouth.style.cssText = `
      height: 0.75em;
      width: 0.93em;
      border-radius: 50%;
      box-shadow: 0 0.18em #3f3554;
    `;
  }, 600);
});

// **Reset Panda on Click Outside Inputs**
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});

// Change this in script.js (line 165):
document.querySelector(".login-btn").addEventListener("click", function () { // Changed #login-btn to .login-btn
  document.querySelector(".popup").classList.add("active");
  document.body.classList.add("noscroll");
});

// And this (line 170):
document.querySelector(".close-btn").addEventListener("click", function () { // Changed .close-popup to .close-btn
  document.querySelector(".popup").classList.remove("active");
  document.body.classList.remove("noscroll");
});

