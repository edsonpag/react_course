import React, { useEffect, useState } from "react";

import "./Navbar.css";

function Navbar() {

    const [ showMenu, setShowMenu ] = useState(false);
    const [ colorTheme, setColorTheme ] = useState(localStorage.getItem("colorTheme") || "dark");
    const [ fixedNavBar, setFixedNavBar ] = useState(false);

    function toggleMenu() {
        if(window.innerWidth <= 768) {
            setShowMenu(prevShowMenu => !prevShowMenu);
        }
    }

    function showMenuEffect() {
        const styles = {
            animation: "showMenu 300ms ease 0s 1 normal"
        };

        return styles;
    }

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            if(window.scrollY > 15) {
                setFixedNavBar(true);
            } else {
                setFixedNavBar(false);
            }
        });
    }, []);

    useEffect(() => {
        function handleScreenSize() {
            if(window.innerWidth >= 768) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        }

        handleScreenSize();
        window.addEventListener("resize", handleScreenSize);

    }, []);

    useEffect(() => {
        const navbarItems = document.querySelectorAll(".navbar-items");

        navbarItems.forEach((item, index) => {
            item.style.animation = `showMenu 1s ease ${(60 + index) / 2}ms 1 normal`;
        })

    }, [showMenu]);

    useEffect(() => {
        const body = document.body;

        if(colorTheme === "dark") {
            localStorage.setItem("colorTheme", "dark");
            body.classList.add("darkmode");
        } else {
            localStorage.setItem("colorTheme", "light");
            body.classList.remove("darkmode");
        }

    }, [colorTheme]);
    
    function toggleColorTheme() {
        setColorTheme(prevColorTheme => prevColorTheme === "light" ? "dark" : "light");
    }

    return (
        <nav className={`navbar-container ${fixedNavBar && "fixed"}`}>
            <img 
            src="images/my_photo.jpg" 
            alt="Edson Pagani"
            title="Foto de Edson Pagani"
            width="64" height="64"
            className="my-photo"
            />

            <div className="menu">
                <div 
                className={`burger-menu ${showMenu && "close-menu"}`}
                onClick={toggleMenu}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>

                { showMenu && 
                <ul 
                className="navbar"
                style={showMenu && showMenuEffect()}>
                    <li className="navbar-items">
                        <a href="#home" className="navbar-links" onClick={toggleMenu}>Início</a>
                    </li>

                    <li className="navbar-items">
                        <a href="#projects" className="navbar-links" onClick={toggleMenu}>Projetos</a>
                    </li>
                    <li className="navbar-items">
                        <a href="#contact" className="navbar-links" onClick={toggleMenu}>Contato</a>
                    </li>

                    <div className="color-theme-container" onClick={toggleColorTheme}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                        </svg>

                        <div className="switch-btn"></div>
                    </div>
                </ul>
                }
            </div>

        </nav>
    );
}


export default Navbar;