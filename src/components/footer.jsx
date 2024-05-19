import { memo, React } from 'react';
import "./css/footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-columns">
                    <section className="footer-logo">
                        <img src="/BinIT-logo.svg" alt="BinIT-Logo" />
                        <h3 style={{marginBottom: 0}}>Don't See It, Just BinIT</h3>
                    </section>
                    <section className="footer-right">
                        <h3>Information</h3>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Your Reports</a>
                            </li>
                            <li>
                                <a href="#">News</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-right">
                        <h3>Content</h3>
                        <ul>
                            <li>
                                <a href="#">Community</a>
                            </li>
                            <li>
                                <a href="#">Create Event</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-right">
                        <h3>Help Center</h3>
                        <ul>
                            <li>
                                <a href="#">Complains</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-right">
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="#">Cookies Police</a>
                            </li>
                            <li>
                                <a href="#">Copyright</a>
                            </li>
                            <li>
                                <a href="#">Term Of Use</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="footer-bottom">
                    <small>Copyright &copy;<span id="year"> 2024 </span>BINiT. All rights reserved</small>
                    <span className='social-links'>
                        <a href="#" title="Youtube">
                            <img src="/youtube.svg" alt='YouTube' />
                        </a>
                        <a href="#" title="Instagram">
                            <img src="/instagram.svg" alt='Instagram' />
                        </a>
                        <a href="#" title="Twitter">
                            <img src="/twitter.svg" alt='Twitter' />
                        </a>
                        <a href="#" title="GitHub">
                            <img src="/facebook.svg" alt='Facebook' />
                        </a>
                        <a href="#" title="Linkedin">
                            <img src="/linkedin.svg" alt='Linkedin' />
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default memo(Footer);