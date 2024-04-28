import rulesData from '../rulesData.json';
import { baskerville } from "../../fonts";

export default function RuleDetail({ params }) {
    const { id } = params;
    const rule = rulesData.find((rule) => rule.id === id) || rulesData.find((rule) => rule.id === "Lorem ipsum");

    return (
        <main>
            <div className="custom-grid">
                <section className="max-w-[var(--content-width)] mx-auto  shadow-lg overflow-hidden">
                    <div className="p-6 space-y-4 large-size max-w-2xl">
                        <h1 className={baskerville.className}>{rule.header}</h1>
                        <p className="small-size">{rule.descriptionlong}</p>
                        <div className="space-y-2">
                            <p className="normal-size">
                                Sådan fikser du det:<br />
                                <span className="small-size">{rule.howtofix}</span>
                            </p>
                            <p className="normal-size">
                                Hvilken betydning har problemet for tilgængeligheden?<br />
                                <span className="small-size">{rule.whyitmatters}</span>
                            </p>
                            <p className="small-size">
                                Læs mere her: <a className="link" href={rule.url} target="_blank" rel="noopener noreferrer">{rule.url}</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

