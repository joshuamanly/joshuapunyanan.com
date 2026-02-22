import Section from "../components/Section";
import Timeline from "../components/Timeline";
import { educationData } from "../data/portfolio";
import type { TimelineItem } from "../components/Timeline";

export default function Education() {
    const items: TimelineItem[] = educationData.map((edu) => ({
        title: edu.institution,
        subtitle: edu.major,
        period: edu.year,
        details: edu.highlights,
    }));

    return (
        <div className="page">
            <Section title="Education" subtitle="// cat ~/education/history.log">
                <div className="timeline">
                    <Timeline items={items} />
                </div>
            </Section>
        </div>
    );
}
