import { Link } from "react-router-dom";

export default function NotFound() {
    const text = "404 · NOT FOUND · 404 · NOT FOUND · ";
    const chars = text.split("");

    return (
        <div className="notfound-page">
            <div className="notfound-circle-wrapper">
                <div className="notfound-circle-text">
                    {chars.map((char, i) => (
                        <span
                            key={i}
                            className="notfound-char"
                            style={{
                                transform: `rotate(${(360 / chars.length) * i}deg)`,
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
                <div className="notfound-center">
                    <span className="notfound-glitch">?</span>
                </div>
            </div>

            <p className="notfound-subtitle">// page_not_found.err</p>
            <Link to="/" className="brutal-btn brutal-btn-primary">
                ← Back to Home
            </Link>
        </div>
    );
}
