import { baskerville } from "../fonts";
import Image from "next/image";
import TabView from "@/components/TabView";
export const revalidate = 1800;

export async function generateMetadata({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
  );
  const data = await response.json();

  return {
    title: `Rapport for ${data.url}`,
    description: `Din score er ${beregnScore(data)}%`,
    openGraph: {
      title: `Rapport for ${data.url}`,
      description: `Din score er ${beregnScore(data)}%`,
    },
  };
}

const SCORE_COLORS = {
  A: "#6ED669",
  B: "#FFD166",
  C: "#FF6B6B",
};

const beregnScore = (data) => {
  const antalProblemer =
    data.violations.length + data.inapplicable.length + data.incomplete.length;
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
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
  );
  const data = await response.json();

  console.log(data.violations.length);

  const score = beregnScore(data);
  const { letter, color } = SamletScoreBogstav(score);

  return (
    <>
      <div className=" grid grid-cols-gridContent px-2 py-16 sm:px-0 ">
        <div className=" col-start-3 col-end-4">
          <div className=" col-start-3 large-size pb-0 md:pb-8 max-w-2xl">
            <h1 className={baskerville.className}>Rapport for {data.url}</h1>
          </div>
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-5">
              <section className="grid grid-cols-1 sm:grid-cols-2 sm:pt-1">
                <article className="grid justify-center">
                  <div className="grid justify-items-center">
                    <h2 className="medium-size">Din score er {score}%</h2>
                    <div
                      className="aspect-square flex items-center justify-center px-5 py-1 rounded-full"
                      style={{ backgroundColor: color }}
                    >
                      <p className="text-2xl font-bold">{letter}</p>
                    </div>
                  </div>
                  <p className="small-size pt-3 text-center">
                    Antal problemer fundet:{" "}
                    {data.violations.length +
                      data.inapplicable.length +
                      data.incomplete.length}
                  </p>
                  <div className="grid grid-cols-3 items-center py-3 gap-4">
                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <span className=" w-5 h-5 aspect-square  rounded-full bg-aColor"></span>
                      <span className=" text-sm small-size">Fungerende</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 ">
                      <span className=" w-5 h-5 aspect-square rounded-full bg-bColor"></span>
                      <span className=" text-sm small-size">Advarsel</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 ">
                      <span className=" w-5 h-5 aspect-square rounded-full bg-cColor"></span>
                      <span className=" text-sm small-size">Fejl</span>
                    </div>
                  </div>
                </article>

                <figure className="grid justify-items-center p-8">
                  <Image
                    alt={data.url}
                    src={data.screenshot.url}
                    width={data.screenshot.width}
                    height={data.screenshot.height}
                  />
                </figure>
              </section>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-5">
          <section className="">
            <TabView data={data} />
          </section>
        </div>
      </div>
    </>
  );
}
