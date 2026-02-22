import { Link } from "react-router-dom";
import Section from "../components/Section";

const techStack = [
    { name: "Unity", icon: "🎮" },
    { name: "C#", icon: "⚙️" },
    { name: "Multiplayer", icon: "🌐" },
    { name: "WebSocket", icon: "🔌" },
    { name: "Backend", icon: "🖥️" },
    { name: "React", icon: "⚛️" },
];

const stats = [
    { value: "5+", label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Shipped Games" },
    { value: "∞", label: "Coffee Cups" },
];

export default function Home() {
    return (
        <div>
            {/* ── Hero ──────────────────────────────── */}
            <section className="hero">
                <div className="hero-inner">
                    {/* Left */}
                    <div>
                        <p className="hero-label">{">"} Game Programmer</p>
                        <h1 className="hero-title">
                            Joshua
                            <br />
                            <span className="accent">Punyanan</span>
                        </h1>
                        <p className="hero-desc">
                            Building{" "}
                            <span className="highlight">scalable multiplayer systems</span>{" "}
                            &amp; performant gameplay experiences. Passionate about real-time
                            networking, game architecture, and pushing the boundaries of
                            interactive entertainment.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/portfolio" className="brutal-btn brutal-btn-primary">
                                View Portfolio <span>→</span>
                            </Link>
                            <a href="mailto:joshua@punyanan.com" className="brutal-btn brutal-btn-secondary">
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right — Code block */}
                    <div className="hero-code">
                        <div className="code-block">
                            <div className="dim">
                                <span className="keyword">class</span>{" "}
                                <span className="classname">GameProgrammer</span>{" "}
                                {"{"}
                            </div>
                            <div className="indent">
                                <span className="dim">name</span> = <span className="string">"Joshua Punyanan"</span>;
                            </div>
                            <div className="indent">
                                <span className="dim">role</span> = <span className="string">"Game Programmer"</span>;
                            </div>
                            <div className="indent">
                                <span className="dim">engine</span> = <span className="string">"Unity"</span>;
                            </div>
                            <div className="indent">
                                <span className="dim">languages</span> = [
                                <span className="string-secondary">"C#"</span>,{" "}
                                <span className="string-secondary">"TypeScript"</span>,{" "}
                                <span className="string-secondary">"Go"</span>];
                            </div>
                            <br />
                            <div className="indent">
                                <span className="keyword">function</span>{" "}
                                <span>buildGame</span>() {"{"}
                            </div>
                            <div className="indent-2 muted">
                                <span className="keyword">return</span>{" "}
                                <span className="string-secondary">"something amazing"</span>;
                            </div>
                            <div className="indent">{"}"}</div>
                            <div className="dim">{"}"}</div>
                            <div className="cursor-blink">▌</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── About ─────────────────────────────── */}
            <Section title="About Me" subtitle="// who_am_i.exe">
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I'm a <span className="bold">Game Programmer</span> with a deep
                            passion for creating immersive interactive experiences. Specializing
                            in <span className="accent-bold">real-time multiplayer systems</span>,
                            I build the invisible architecture that makes online games feel
                            seamless and responsive.
                        </p>
                        <p>
                            With years of experience in <span className="bold">Unity</span> and{" "}
                            <span className="bold">C#</span>, I've shipped games ranging from
                            competitive multiplayer racers to cooperative dungeon crawlers. My
                            approach combines clean architecture, performance optimization, and
                            deep understanding of networking to deliver polished game experiences.
                        </p>
                        <p>
                            Beyond game development, I have strong full-stack skills in{" "}
                            <span className="bold">TypeScript</span>,{" "}
                            <span className="bold">Node.js</span>, and{" "}
                            <span className="bold">Go</span>, enabling me to build complete game
                            ecosystems — from client to server to analytics dashboard.
                        </p>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat) => (
                            <div key={stat.label} className="stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ── Tech Stack ────────────────────────── */}
            <Section title="Tech Stack" subtitle="// tools_of_the_trade.dll">
                <div className="tech-grid">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="tech-card">
                            <div className="tech-card-icon">{tech.icon}</div>
                            <div className="tech-card-name">{tech.name}</div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ── CTA ───────────────────────────────── */}
            <section className="cta-section">
                <div className="cta-banner">
                    <div>
                        <h3 className="cta-title">Interested in working together?</h3>
                        <p className="cta-subtitle">
                            Let's build something <span className="accent">amazing</span> together.
                        </p>
                    </div>
                    <a href="mailto:joshua@punyanan.com" className="brutal-btn brutal-btn-primary">
                        Get in Touch →
                    </a>
                </div>
            </section>
        </div>
    );
}
