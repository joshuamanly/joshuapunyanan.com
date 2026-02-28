import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolio";

export default function PortfolioDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.id === slug);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const goPrev = () =>
        setLightboxIndex((prev) =>
            prev !== null ? (prev - 1 + project.gallery.length) % project.gallery.length : null
        );
    const goNext = () =>
        setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % project.gallery.length : null
        );

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

                {/* Hero Image */}
                <div className="detail-hero-image">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="detail-hero-image-img"
                    />
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
                            <h3 className="detail-sidebar-title">Role</h3>
                            <p className="detail-sidebar-text">
                                {project.role}
                            </p>
                        </div>

                        <div className="detail-card">
                            <h3 className="detail-sidebar-title">Timeline</h3>
                            <p className="detail-sidebar-text">
                                <span className="accent">📅</span> {project.date}
                            </p>
                        </div>

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
                        {project.gallery.map((item, i) => (
                            <div
                                key={i}
                                className="gallery-item gallery-item-clickable"
                                onClick={() => openLightbox(i)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="gallery-item-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back */}
                <Link to="/portfolio" className="brutal-btn">← All Projects</Link>
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>✕</button>

                        <div className="lightbox-image-wrapper">
                            {project.gallery.length > 1 && (
                                <button className="lightbox-nav lightbox-nav-prev" onClick={goPrev}>
                                    ‹
                                </button>
                            )}
                            <img
                                src={project.gallery[lightboxIndex].src}
                                alt={project.gallery[lightboxIndex].caption}
                                className="lightbox-image"
                            />
                            {project.gallery.length > 1 && (
                                <button className="lightbox-nav lightbox-nav-next" onClick={goNext}>
                                    ›
                                </button>
                            )}
                        </div>

                        <div className="lightbox-caption">
                            <p>{project.gallery[lightboxIndex].caption}</p>
                            <span className="lightbox-counter">
                                {lightboxIndex + 1} / {project.gallery.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
