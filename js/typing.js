/*=========================================
 ATS PORTFOLIO
 Typing Animation
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    new Typed("#typing", {

        strings: [

            "Data Scientist",

            "Machine Learning Engineer",

            "Analytics Engineer",

            "Business Intelligence Analyst",

            "Python Developer",

            "AI Solutions Developer"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1800,

        startDelay: 500,

        loop: true,

        smartBackspace: true,

        showCursor: true,

        cursorChar: "|"

    });

});