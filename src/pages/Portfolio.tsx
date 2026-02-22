import Section from "../components/Section";
import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../data/portfolio";

export default function Portfolio() {
    return (
        <div className="page">
            <Section title="Portfolio" subtitle="// ls -la ~/projects">
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
            </Section>
        </div>
    );
}
