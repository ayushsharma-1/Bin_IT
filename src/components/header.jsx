import React, { memo, useState } from 'react';
import "./css/header.css";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header>
                <div className="logo">
                    <h2>Don't See It,<br />Just BinIT</h2>
                    <img src="/BinIT-logo.svg" alt="BinIT-Logo" />
                </div>
                <div className="burger" onClick={toggleMobileMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <nav className={isMobileMenuOpen ? 'nav-active' : ''}>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                        <li><a href="">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li className="dropdown">
                            <a href="#">Report</a>
                            <div className="dropdown-content">
                                <a href="#">Reports on Map</a>
                                <a href="#">Image Analysis</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a href="#">Community</a>
                            <div className="dropdown-content">
                                <a href="#">Feed</a>
                                <a href="#">Group</a>
                                <a href="#">Events</a>
                            </div>
                        </li>
                        <li><a href="#">News</a></li>
                        <li><a href="#"><button>Login</button></a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default memo(Header);