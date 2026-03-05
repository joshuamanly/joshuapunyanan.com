import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="navbar-logo">
                            <span className="accent">&lt;</span>
                            Joshua
                            <span className="accent">/&gt;</span>
                        </Link>
                        <p className="footer-brand-desc">
                            Game Programmer specializing in multiplayer systems, real-time
                            networking, and performant gameplay.
                        </p>
                    </div>

                    {/* Nav */}
                    <div>
                        <h4 className="footer-heading">Navigation</h4>
                        <div className="footer-links">
                            <Link to="/" className="footer-link">Home</Link>
                            <Link to="/portfolio" className="footer-link">Projects</Link>
                            <Link to="/experience" className="footer-link">Experience</Link>
                            <Link to="/education" className="footer-link">Education</Link>
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="footer-heading">Connect</h4>
                        <div className="footer-links">
                            <a href="https://github.com/joshuamanly" target="_blank" rel="noopener noreferrer" className="footer-link">
                                GitHub ↗
                            </a>
                            <a href="https://linkedin.com/in/joshuamanly" target="_blank" rel="noopener noreferrer" className="footer-link">
                                LinkedIn ↗
                            </a>
                            <a href="mailto:joshuapunyanan@gmail.com" className="footer-link">
                                joshuapunyanan@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright" style={{ fontWeight: 700 }}>
                        <span style={{ color: "#000" }}>© {new Date().getFullYear()} Joshua Manly Punyanan.</span> <span style={{ color: "var(--accent)" }}>All rights reserved.</span> <span style={{ color: "#ff4444" }}>All wrongs reversed.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
