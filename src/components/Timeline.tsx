interface TimelineItem {
    title: string;
    subtitle: string;
    period: string;
    details: string[];
    tags?: string[];
}

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="timeline">
            {items.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-card">
                        <span className="timeline-period">{item.period}</span>
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-subtitle">{item.subtitle}</p>

                        <div className="timeline-details">
                            {item.details.map((detail, i) => (
                                <div key={i} className="timeline-detail">
                                    <span className="timeline-detail-arrow">▸</span>
                                    <span>{detail}</span>
                                </div>
                            ))}
                        </div>

                        {item.tags && item.tags.length > 0 && (
                            <div className="timeline-tags">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export type { TimelineItem };
