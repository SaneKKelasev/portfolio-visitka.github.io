let btnSkills = document.querySelector(".skills-btn");
let wrapperSection = document.querySelector(".wrapper-section");
let itemsDisabled = document.querySelectorAll(".item-disabled");

btnSkills.addEventListener("click", showSkills);

function showSkills() {
    if (window.getComputedStyle(wrapperSection).display === "none") {
        wrapperSection.style.display = "grid";
    } else if (window.getComputedStyle(wrapperSection).display ==="grid") {
        wrapperSection.style.display = "none";
    }
}