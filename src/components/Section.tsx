import type { ReactNode } from "react";

interface SectionProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ title, subtitle, children, className = "", id }: SectionProps) {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="section-inner">
                {title && (
                    <div className="section-header">
                        <h2 className="section-heading">
                            <span className="accent">//</span> {title}
                        </h2>
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                        <div className="section-underline" />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
