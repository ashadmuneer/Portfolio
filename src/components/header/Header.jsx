import React, { useState, useEffect } from 'react';
import "./header.css";

// =============== Toggle Menu =================
const Header = () => {
    const [Toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        const toggle = document.querySelector('.toggle-inner');

        if (darkMode === true) {
            body.classList.add('dark-mode');
            toggle.classList.add('toggle-active');
        } else {
            body.classList.remove('dark-mode');
            toggle.classList.remove('toggle-active');
        }
    }, [darkMode]);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">&lt;/Ashad.&gt;</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skill
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#project" className="nav__link">
                                <i className="uil uil-briefcase nav__icon"></i>
                                Project
                            </a>
                        </li> */}
                        {/* Qualification link added here */}
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>
                                Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => setToggle(!Toggle)}></i>
                </div>
                <div className="themechange nav__logo">
                    <div id="toggle" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
                        <div className="toggle-inner" />
                    </div>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
                    <i className="uil uil-apps nav__close"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
