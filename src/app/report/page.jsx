import Image from "next/image";

export const revalidate = 1800;

const beregnScore = (data) => {
    const antalProblemer = data.violations.length + data.inapplicable.length + data.incomplete.length;
    return Math.round(100 - antalProblemer / 53 * 100);
};


const SamletScoreBogstav = (score) => (
    score <= 33 ? 'C' :
        score <= 66 ? 'B' :
            'A'
);

export default async function Side({ searchParams }) {
    const params = new URLSearchParams(searchParams);
    const respons = await fetch(
        `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
    );
    const data = await respons.json();


    const score = beregnScore(data);

    return (
        <main>
            <h1>Rapport for {data.url}</h1>

            <div>
                <p>Antal problemer fundet: {data.violations.length + data.inapplicable.length + data.incomplete.length}</p>
                <p>Din score er {score}%</p>
                <p>Karakter: {SamletScoreBogstav(score)}</p>

                <h2>Violations:</h2>
                {data.violations.map((violation, index) => (
                    <div key={index}>
                        <p>{violation.description}</p>
                        <p>{violation.impact}</p>
                        {/* {violation.nodes.map(node => <p>{node.message}</p>)} */}
                    </div>
                ))}


                <h2>Inapplicable:</h2>
                {data.inapplicable.map((inapplicable, index) => (
                    <div key={index}>
                        <p>{inapplicable.description}</p>

                    </div>
                ))}

                <h2>Incomplete:</h2>
                {data.incomplete.map((incomplete, index) => (
                    <div key={index}>
                        <p>{incomplete.description}</p>

                    </div>
                ))}
            </div>

            <Image
                alt={data.url}
                src={data.screenshot.url}
                width={data.screenshot.width}
                height={data.screenshot.height}
            />
        </main>
    );
}