import Image from "next/image";
import TabView from "@/components/TabView";
import TabViewCopy from "@/components/TabViewCopy";
export const revalidate = 1800;

const beregnScore = (data) => {
  const antalProblemer = data.violations.length + data.inapplicable.length + data.incomplete.length;
  return Math.round(100 - (antalProblemer / 53) * 100);
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
        <article className="grid  justify-center  p-8 ">
          <h1 className="text-xl">Rapport for {data.url}</h1>
          <div className="grid justify-items-center">
            <h2 className="text-2xl">Din score er {score}%</h2>
            <div className=" flex items-center p-10 w-2 h-2 aspect-square rounded-full bg-secondarycolor ">
              <p className="text-xl font-bold">{SamletScoreBogstav(score)}</p>
            </div>
          </div>
          <p className=" text-center ">Antal problemer fundet: {data.violations.length + data.inapplicable.length + data.incomplete.length}</p>
        </article>
        {/* <div className="">
          <hr className="rotate-90" />
        </div> */}
        <figure className="grid justify-items-center p-8">
          <Image className="w-3/4" alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
        </figure>
      </section>
      <section className="gir">
        <TabView data={data} />

        <TabViewCopy data={data} />
      </section>
    </main>
  );
}
