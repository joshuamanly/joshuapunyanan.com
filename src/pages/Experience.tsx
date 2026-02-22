import Section from "../components/Section";
import Timeline from "../components/Timeline";
import { experienceData } from "../data/portfolio";
import type { TimelineItem } from "../components/Timeline";

export default function Experience() {
    const items: TimelineItem[] = experienceData.map((exp) => ({
        title: exp.company,
        subtitle: exp.role,
        period: exp.duration,
        details: exp.responsibilities,
        tags: exp.tech,
    }));

    return (
        <div className="page">
            <Section title="Experience" subtitle="// cat ~/career/changelog.md">
                <div className="timeline">
                    <Timeline items={items} />
                </div>
            </Section>
        </div>
    );
}
