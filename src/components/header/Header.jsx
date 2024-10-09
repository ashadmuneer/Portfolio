import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        const toggleElement = document.querySelector('.toggle-inner');

        if (darkMode) {
            body.classList.add('dark-mode');
            toggleElement.classList.add('toggle-active');
        } else {
            body.classList.remove('dark-mode');
            toggleElement.classList.remove('toggle-active');
        }
    }, [darkMode]);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">&lt;/Ashad.&gt;</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">Skill</a>
                        </li>
                        <li className="nav__item">
                            <a href="#Projects" className="nav__link">Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">Qualification</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contact</a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="themechange nav__logo">
                    <div id="toggle" onClick={() => setDarkMode(!darkMode)}>
                        <div className="toggle-inner" />
                    </div>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps nav__close"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
