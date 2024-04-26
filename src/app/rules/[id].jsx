import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import rules from '@/data/rules.json';

export default function RuleDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [ruleData, setRuleData] = useState();

    useEffect(() => {
        const rule = rules.find((r) => r.id === id);
        setRuleData(rule);
    }, [id]);

    return (
        <main>
            <h1>{ruleData.header}</h1>
            <p>{ruleData.descriptionlong}</p>
            <p>Impact: {ruleData.impact}</p>
            <p>How to fix: {ruleData.howtofix}</p>
            <p>Why it matters: {ruleData.whyitmatters}</p>
        </main>
    );
}
