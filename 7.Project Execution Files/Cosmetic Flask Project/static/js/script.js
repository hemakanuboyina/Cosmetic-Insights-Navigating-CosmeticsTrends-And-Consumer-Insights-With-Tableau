// script.js - Custom JavaScript for Cosmetic Insights Website

document.addEventListener("DOMContentLoaded", function() {
    console.log("Cosmetic Insights Website Loaded Successfully!");

    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Example: Button Click Event
    document.querySelector(".btn-light").addEventListener("click", function() {
        alert("Exploring Beauty Trends & Consumer Insights!");
    });
});
