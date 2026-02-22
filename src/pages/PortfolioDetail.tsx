import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolio";

export default function PortfolioDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        return (
            <div className="not-found">
                <div>
                    <h1 className="not-found-code">404</h1>
                    <p className="not-found-msg">// project_not_found.err</p>
                    <Link to="/portfolio" className="brutal-btn brutal-btn-primary">
                        ← Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="detail-page">
            <div className="detail-container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/portfolio">portfolio</Link>
                    <span className="sep">/</span>
                    <span className="current">{project.id}</span>
                </div>

                {/* Title */}
                <h1 className="detail-title">{project.title}</h1>
                <p className="detail-role">{">"} {project.role}</p>

                {/* Hero Image */}
                <div className="detail-hero-image">
                    <div className="detail-hero-image-inner">
                        <div className="detail-hero-image-icon">🎮</div>
                        <p className="detail-hero-image-label">{project.title} — Cover Image</p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="detail-content-grid">
                    {/* Main Content */}
                    <div>
                        <div className="detail-card" style={{ marginBottom: "2rem" }}>
                            <h2 className="detail-card-title">
                                <span className="accent">//</span> Description
                            </h2>
                            <p>{project.fullDescription}</p>
                        </div>

                        <div className="detail-card detail-card-accent">
                            <h2 className="detail-card-title">
                                <span className="accent">//</span> Problem &amp; Solution
                            </h2>
                            <p>{project.problemSolution}</p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="detail-sidebar">
                        <div className="detail-card">
                            <h3 className="detail-sidebar-title">Tech Stack</h3>
                            <div className="detail-tags">
                                {project.tech.map((t) => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="detail-card">
                            <h3 className="detail-sidebar-title">Links</h3>
                            <div className="detail-links">
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="brutal-btn brutal-btn-sm brutal-btn-full"
                                    >
                                        🎮 Live Demo ↗
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="brutal-btn brutal-btn-sm brutal-btn-full"
                                    >
                                        📦 GitHub ↗
                                    </a>
                                )}
                                {!project.demoLink && !project.githubLink && (
                                    <p className="detail-no-links">// no_public_links.txt</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div>
                    <h2 className="gallery-title">
                        <span className="accent">//</span> Gallery
                    </h2>
                    <div className="gallery-grid">
                        {project.gallery.map((_, i) => (
                            <div key={i} className="gallery-item">
                                <div className="gallery-item-inner">
                                    <div className="gallery-item-icon">📸</div>
                                    <p className="gallery-item-label">screenshot_{i + 1}.png</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back */}
                <Link to="/portfolio" className="brutal-btn">← All Projects</Link>
            </div>
        </div>
    );
}
