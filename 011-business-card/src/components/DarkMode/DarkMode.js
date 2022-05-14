import React from "react";


import "./DarkMode.css";

function DarkMode() {
    return (
        <button className="switch-btn" onClick={changeTheme}>
            <span>
                <i className="bi bi-brightness-high-fill"></i>
            </span>
            <span>
                <i className="bi bi-moon-fill"></i>
            </span>
            <span className="switch"></span>
        </button>
    );
}

function changeTheme() {
    const switchBtn = document.querySelector(".switch");
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");
    const centralizer = document.querySelector(".centralizer");


    switchBtn.classList.toggle("on");

    if(switchBtn.classList.contains("on")) {
        footer.classList.remove("light-mode");
        footer.classList.add("dark-mode");

        sections.forEach((section) => {
            section.classList.remove("light-mode");
            section.classList.add("dark-mode");
        });

        centralizer.classList.add("dark-mode");
        centralizer.classList.remove("light-mode");

    }

    else {
        footer.classList.remove("dark-mode");
        footer.classList.add("light-mode");

        sections.forEach((section) => {
            section.classList.remove("dark-mode");
            section.classList.add("light-mode");
        });

        centralizer.classList.remove("dark-mode");
        centralizer.classList.add("light-mode");
    }
}

export default DarkMode;