import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <span className="accent">&lt;</span>
                    Joshua
                    <span className="accent">/&gt;</span>
                </Link>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`hamburger ${isOpen ? "open" : ""}`}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </div>

            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`mobile-nav-link ${location.pathname === link.to ? "active" : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
