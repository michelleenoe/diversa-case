import Image from "next/image";
import TabView from "@/components/TabView";
export const revalidate = 1800;

const beregnScore = (data) => {
    const antalProblemer = data.violations.length + data.inapplicable.length + data.incomplete.length;
    return Math.round(100 - (antalProblemer / 58) * 100);
};

const SamletScoreBogstav = (score) => (score <= 33 ? "C" : score <= 66 ? "B" : "A");

export default async function Side({ searchParams }) {
    const params = new URLSearchParams(searchParams);
    const respons = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
    const data = await respons.json();

    const score = beregnScore(data);

    return (
        <main>
            <section className="grid grid-cols-2">
                <article className="grid  justify-center  p-8 gap-6">
                    <h1 className="text-xl">Rapport for {data.url}</h1>
                    <div className="grid justify-items-center">
                        <h2 className="text-2xl">Din score er {score}%</h2>
                        <div className=" bg-secondarycolor aspect-square flex items-center justify-center rounded-full p-6">
                            <p className="text-2xl font-bold">{SamletScoreBogstav(score)}</p>
                        </div>
                    </div>
                    <p className=" text-center">Antal problemer fundet: {data.violations.length + data.inapplicable.length + data.incomplete.length}</p>
                </article>
                {/* <div className="">
          <hr className="rotate-90" />
        </div> */}
                <figure className="grid justify-items-center p-8">
                    <Image className="w-3/4" alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
                </figure>
            </section>
            <section className="">
                <TabView data={data} />
            </section>
        </main>
    );
}
