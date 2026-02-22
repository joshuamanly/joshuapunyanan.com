import { Link } from "react-router-dom";
import type { Project } from "../data/portfolio";

interface PortfolioCardProps {
    project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
    return (
        <Link to={`/portfolio/${project.id}`} className="portfolio-card">
            <div className="portfolio-card-thumb">
                <div className="portfolio-card-thumb-inner">
                    <div className="portfolio-card-thumb-icon">🎮</div>
                    <div className="portfolio-card-thumb-label">{project.tech[0]}</div>
                </div>
            </div>

            <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>

                <div className="portfolio-card-tags">
                    {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="tech-tag tech-tag-secondary">+{project.tech.length - 4}</span>
                    )}
                </div>
            </div>
        </Link>
    );
}
