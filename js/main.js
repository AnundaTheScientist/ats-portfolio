/*=========================================
 ATS PORTFOLIO
 Main JavaScript
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
    INITIALIZE AOS
    ==============================*/

    AOS.init({

        duration: 900,
        once: true,
        offset: 80

    });

    /*==============================
    LOADER
    ==============================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("loader-hidden");

        }, 800);

    });

    /*==============================
    BACK TO TOP
    ==============================*/

    const backTop = document.getElementById("backTop");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 500){

            backTop.classList.add("show");

        }

        else{

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*==============================
    ACTIVE NAVIGATION
    ==============================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

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

    /*==============================
    SMOOTH SCROLL
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({

                behavior:"smooth"

            });

        });

    });

});

/*============================
Animated Statistics
=============================*/

const counters = document.querySelectorAll(".hero-stats h3");

const animateCounter = (counter) => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 60;

    const update = () => {

        if(count < target){

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    };

    update();

};

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            counters.forEach(animateCounter);

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".hero-stats"));