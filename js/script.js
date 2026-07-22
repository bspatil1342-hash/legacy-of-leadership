// ===========================
// Scroll Progress Bar
// ===========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});

// ===========================
// Back To Top Button
// ===========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===========================
// Gallery Lightbox
// ===========================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", (e)=>{

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});

// ===========================
// Scroll Reveal
// ===========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ===========================
// Loading Screen
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },1800);

});

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// Navbar Background on Scroll

const navbar = document.querySelector("nav");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 100){

        navbar.style.background = "rgba(8,16,29,.95)";

    }else{

        navbar.style.background = "rgba(15,23,42,.75)";

    }

});

/*=========================
   ACHIEVEMENT HOVER EFFECT
=========================*/

const achievementCards = document.querySelectorAll(".achievement-card");
const achievementTitle = document.getElementById("achievement-title");
const achievementText = document.getElementById("achievement-text");

achievementCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        achievementTitle.style.opacity = "0";
        achievementText.style.opacity = "0";

        setTimeout(() => {

            achievementTitle.textContent = card.dataset.title;
            achievementText.textContent = card.dataset.text;

            achievementTitle.style.opacity = "1";
            achievementText.style.opacity = "1";

        }, 150);

    });

});
