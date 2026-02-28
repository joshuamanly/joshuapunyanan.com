import { useState } from "react";
import Section from "../components/Section";
import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../data/portfolio";

const categories = ["All", "Unity", "Construct", "Others"] as const;
type Category = (typeof categories)[number];

export default function Portfolio() {
    const [active, setActive] = useState<Category>("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <div className="page">
            <Section title="Projects" subtitle="// ls -la ~/projects">
                <div className="portfolio-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`portfolio-filter-btn${active === cat ? " portfolio-filter-btn-active" : ""}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid" key={active}>
                    {filtered.map((project, i) => (
                        <div
                            key={project.id}
                            className="portfolio-card-animate"
                            style={{ animationDelay: `${i * 0.07}s` }}
                        >
                            <PortfolioCard project={project} />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
