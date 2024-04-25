import Image from "next/image";
import TabView from "@/components/TabView";
export const revalidate = 1800;

export default async function Page({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  return (
    <main>
      <section className="grid grid-cols-2">
        <article className="grid	justify-center	p-8	">
          <h1 className="text-xl">Report for {data.url}</h1>
          <div className="grid justify-items-center">
            <h2 className="text-2xl">Din score er</h2>
            <div className="p-8 w-fit h-fit rounded-full bg-secondarycolor">
              <p className="text-xl font-bold">{100 - data.violations.length - data.inapplicable.length - (data.incomplete.length / 53) * 100}%</p>
            </div>
          </div>
          <p className=" text-center ">
            Number of issues found: {data.violations.length} + {data.inapplicable.length} + {data.incomplete.length}
          </p>
        </article>
        {/* <div className="">
          <hr className="rotate-90" />
        </div> */}
        <figure className="grid justify-items-center p-8">
          <Image className="w-3/4" alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
        </figure>
      </section>

      <TabView data={data} />
    </main>
  );
}
