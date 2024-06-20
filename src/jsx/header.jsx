// import React, { memo, useState } from 'react';
// import './css/header.css'

// function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <>
//             <header>
//                 <div className="logo">
//                     <div className="logo-text">
//                         <h1>BinIt</h1>
//                         <h2>Don't See It,Just BinIT</h2>
//                     </div>
//                     <img src="/BinIT-logo.svg" alt="BinIT-Logo" />
//                 </div>
//                 <div className="burger" onClick={toggleMobileMenu}>
//                     <div className="line1"></div>
//                     <div className="line2"></div>
//                     <div className="line3"></div>
//                 </div>
//                 <nav className={isMobileMenuOpen ? 'nav-active' : ''}>
//                     <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
//                         <li><a href="">Home</a></li>
//                         <li><a href="#">About Us</a></li>
//                         <li className="dropdown">
//                             <a href="#">Report</a>
//                             <div className="dropdown-content">
//                                 <a href="#">Reports on Map</a>
//                                 <a href="#">Image Analysis</a>
//                             </div>
//                         </li>
//                         <li className="dropdown">
//                             <a href="#">Community</a>
//                             <div className="dropdown-content">
//                                 <a href="#">Feed</a>
//                                 <a href="#">Group</a>
//                                 <a href="#">Events</a>
//                             </div>
//                         </li>
//                         <li><a href="#">News</a></li>
//                         <li><a href="#"><button>Login</button></a></li>
//                     </ul>
//                 </nav>
//             </header>
//         </>
//     );
// };

// export default memo(Header);


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header>
                <div className="logo">
                    <div className="logo-text">
                        <h1>BinIt</h1>
                        <h2>Don't See It, Just BinIT</h2>
                    </div>
                    <img src="/BinIT-logo.png" alt="BinIT-Logo" />
                </div>
                <div className="burger" onClick={toggleMobileMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <nav className={isMobileMenuOpen ? 'nav-active' : ''}>
                    <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li className="dropdown">
                            <Link to="#">Report</Link>
                            <div className="dropdown-content">
                                <li><Link to="#">Reports on Map</Link></li>
                                <li><Link to="#">Image Analysis</Link></li>
                            </div>
                        </li>
                        <li className="dropdown">
                            <Link to="#">Community</Link>
                            <div className="dropdown-content">
                                <li><Link to="#">Feed</Link></li>
                                <li><Link to="#">Group</Link></li>
                                <li><Link to="#">Events</Link></li>
                            </div>
                        </li>
                        <li><Link to="#">News</Link></li>
                        <div className="user-register-btn">
                            <li><Link to="/login"><button className='login-button'>Login</button></Link></li>
                            <li><Link to='/signup'><button className='signup-button'>SignUp</button></Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;