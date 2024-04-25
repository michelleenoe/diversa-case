import Image from "next/image";

export const revalidate = 1800;

export default async function Page({ searchParams }) {
    const params = new URLSearchParams(searchParams);
    const response = await fetch(
        `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
    );
    const data = await response.json();

    return (
        <main>
            <h1>Report for {data.url}</h1>
            <p>Found {data.violations.length} issues</p>

            <div>
                <p>Number of issues found: {data.violations.length} + {data.inapplicable.length} + {data.incomplete.length}</p>
                <p>Din score er {100 - data.violations.length - data.inapplicable.length - data.incomplete.length / 53 * 100}%</p>
                {data.violations.map((violation, index) => (
                    <div key={index}>
                        <h2>{violation.description}</h2>
                        <p>Impact: {violation.impact}</p>
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
