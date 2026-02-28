import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import PortfolioCard from "../components/PortfolioCard";
import { experienceData, projects } from "../data/portfolio";
import type { TimelineItem } from "../components/Timeline";

const featuredTech = [
    { name: "Unity", icon: "/images/tech/unity-logo.png" },
    { name: "Construct 3", icon: "/images/tech/construct3-logo.png" },
];

const otherTech = [
    { name: "C#", icon: "/images/tech/csharp.png" },
    { name: "HTML", icon: "/images/tech/html.png" },
    { name: "CSS", icon: "/images/tech/css.png" },
    { name: "JavaScript", icon: "/images/tech/js.png" },
    { name: "TypeScript", icon: "/images/tech/ts.png" },
    { name: "Node", icon: "/images/tech/node.png" },
    { name: "Express", icon: "/images/tech/express.png" },
    { name: "React", icon: "/images/tech/react.png" },
    { name: "Go", icon: "/images/tech/go.png" },
    { name: "Gin", icon: "/images/tech/gin.png" },
    { name: "MySQL", icon: "/images/tech/mysql.png" },
    { name: "PostgreSQL", icon: "/images/tech/postgresql.png" },
    { name: "MongoDB", icon: "/images/tech/mongodb.png" },
    { name: "Redis", icon: "/images/tech/redis.png" },
    { name: "Docker", icon: "/images/tech/docker.png" },
    { name: "Postman", icon: "/images/tech/postman.png" },
    { name: "Git", icon: "/images/tech/git.png" },
];

const stats = [
    { value: "5+", label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "3+", label: "Shipped Games" },
    { value: "∞", label: "Coffee Cups" },
];

export default function Home() {
    const expItems: TimelineItem[] = experienceData.map((exp) => ({
        title: exp.company,
        subtitle: exp.role,
        period: exp.duration,
        details: exp.responsibilities,
        tags: exp.tech,
    }));

    const previewProjects = projects.slice(0, 3);

    // Marquee drag-to-scroll
    const marqueeRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = useCallback((e: React.MouseEvent) => {
        isDragging.current = true;
        const el = marqueeRef.current!;
        el.classList.add("dragging");
        startX.current = e.pageX - el.offsetLeft;
        scrollLeft.current = el.scrollLeft;
    }, []);

    const onMouseUp = useCallback(() => {
        isDragging.current = false;
        marqueeRef.current?.classList.remove("dragging");
    }, []);

    const onMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const el = marqueeRef.current!;
        const x = e.pageX - el.offsetLeft;
        el.scrollLeft = scrollLeft.current - (x - startX.current);
    }, []);

    // Auto-scroll
    useEffect(() => {
        const el = marqueeRef.current;
        if (!el) return;
        let animId: number;
        let paused = false;

        const step = () => {
            if (!paused && el) {
                el.scrollLeft += 0.5;
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                }
            }
            animId = requestAnimationFrame(step);
        };
        animId = requestAnimationFrame(step);

        const pause = () => { paused = true; };
        const resume = () => { paused = false; };
        el.addEventListener("mouseenter", pause);
        el.addEventListener("mouseleave", resume);
        el.addEventListener("touchstart", pause);
        el.addEventListener("touchend", resume);

        return () => {
            cancelAnimationFrame(animId);
            el.removeEventListener("mouseenter", pause);
            el.removeEventListener("mouseleave", resume);
            el.removeEventListener("touchstart", pause);
            el.removeEventListener("touchend", resume);
        };
    }, []);

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
                            {/* <a href="mailto:joshua@punyanan.com" className="brutal-btn brutal-btn-secondary">
                                Contact Me
                            </a> */}
                        </div>
                    </div>

                    {/* Right — Profile Picture */}
                    <div className="hero-code">
                        <div className="hero-profile">
                            <div className="hero-profile-ring">
                                <img
                                    src="/images/Profile Picture.jpg"
                                    alt="Joshua Punyanan"
                                    className="hero-profile-img"
                                />
                            </div>
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

            {/* ── Experience ──────────────────────────── */}
            <Section title="Experience" subtitle="// cat ~/career/changelog.md">
                <div className="timeline">
                    <Timeline items={expItems} />
                </div>
            </Section>

            {/* ── Portfolio Preview ───────────────────── */}
            <Section title="Projects" subtitle="// ls -la ~/projects">
                <div className="portfolio-grid portfolio-grid-3">
                    {previewProjects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
                <div className="home-see-more">
                    <Link to="/portfolio" className="brutal-btn brutal-btn-secondary">
                        See More →
                    </Link>
                </div>
            </Section>

            {/* ── Tech Stack ────────────────────────── */}
            <Section title="Tech Stack" subtitle="// tools_of_the_trade.dll">
                {/* Featured — Unity & Construct 3 */}
                <div className="tech-featured">
                    {featuredTech.map((tech) => (
                        <div key={tech.name} className="tech-featured-card">
                            <img src={tech.icon} alt={tech.name} className="tech-featured-icon" />
                            <div className="tech-featured-name">{tech.name}</div>
                        </div>
                    ))}
                </div>

                {/* Marquee — Other Tech */}
                <div
                    className="tech-marquee"
                    ref={marqueeRef}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    <div className="tech-marquee-track">
                        {[...otherTech, ...otherTech].map((tech, i) => (
                            <div key={`${tech.name}-${i}`} className="tech-marquee-item">
                                <img src={tech.icon} alt={tech.name} className="tech-marquee-icon" />
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
