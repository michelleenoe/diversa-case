import { baskerville } from "../fonts";
import Image from "next/image";
import TabView from "@/components/TabView";
export const revalidate = 1800;

const SCORE_COLORS = {
  A: "#6ED669",
  B: "#FFD166",
  C: "#FF6B6B",
};

const beregnScore = (data) => {
  const antalProblemer = data.violations.length + data.inapplicable.length + data.incomplete.length;
  return Math.round(100 - (antalProblemer / 58) * 100);
  {
    /*https://dequeuniversity.com/rules/axe/html/4.9 der er 58 på hjemmesiden*/
  }
};

const SamletScoreBogstav = (score) => {
  if (score <= 33) return { letter: "C", color: SCORE_COLORS.C };
  if (score <= 66) return { letter: "B", color: SCORE_COLORS.B };
  return { letter: "A", color: SCORE_COLORS.A };
};

export default async function Side({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  const score = beregnScore(data);
  const { letter, color } = SamletScoreBogstav(score);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 pt-10">
        <article className="grid justify-center">
          <div className="medium-size">
            <h1 className={baskerville.className}>Rapport for {data.url}</h1>
          </div>
          <div className="grid justify-items-center">
            <h2 className="medium-size">Din score er {score}%</h2>
            <div className="aspect-square flex items-center justify-center px-5 py-1 rounded-full" style={{ backgroundColor: color }}>
              <p className="text-2xl font-bold">{letter}</p>
            </div>
          </div>
          <p className="small-size pt-3 text-center">Antal problemer fundet: {data.violations.length + data.inapplicable.length + data.incomplete.length}</p>
        </article>
        <figure className="grid justify-items-center p-8">
          <Image className="w-3/4" alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
        </figure>
      </section>
      <section className="">
        <TabView data={data} />
      </section>
    </>
  );
}
