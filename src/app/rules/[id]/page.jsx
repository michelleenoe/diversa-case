import rulesData from '../rulesData.json';


export default function RuleDetail({ params }) {
    const { id } = params;
    const rule = rulesData.find(rule => rule.id === id) || rulesData.find(rule => rule.id === "Lorem ipsum");

    return (
        <main>
            <h1>{rule.header}</h1>
            <p>{rule.descriptionlong}</p>
            <p>Impact: {rule.impact}</p>
            <p>How to fix: {rule.howtofix}</p>
            <p>Why it matters: {rule.whyitmatters}</p>
        </main>
    );
}
