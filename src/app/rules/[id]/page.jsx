import rulesData from '../rulesData.json';

export default function RuleDetail({ params }) {
    const { id } = params;
    const rule = rulesData.find((rule) => rule.id === id) || rulesData.find((rule) => rule.id === "Lorem ipsum");

    return (
        <main className="min-h-screen bg-[var(--background-color)] py-8">
            <div className="custom-grid">
                <section className="max-w-[var(--content-width)] mx-auto bg-white rounded-[var(--card-border-radius)] shadow-lg overflow-hidden">
                    <div className="p-6 space-y-4">
                        <h1 className="large-size">{rule.header}</h1>
                        <p className="small-size">{rule.descriptionlong}</p>
                        <div className="space-y-2">
                            <p className="normal-size">Impact: <span className="small-size">{rule.impact}</span></p>
                            <p className="normal-size">How to fix: <span className="small-size">{rule.howtofix}</span></p>
                            <p className="normal-size">Why it matters: <span className="small-size">{rule.whyitmatters}</span></p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
