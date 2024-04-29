import rulesData from "../rulesData.json";
import { baskerville } from "@/app/fonts";
import Link from "next/link";

export default function RuleDetail({ params }) {
  const { id } = params;
  const firstRule = rulesData[0];
  const secondRule = rulesData[1];
  const thirdRule = rulesData[2];
  const loremRule = rulesData[3];
  const rule =
    rulesData.find((rule) => rule.id === id) ||
    rulesData.find((rule) => rule.id === "Lorem ipsum");



  return (
    <>
      <div className="custom-grid max-w-3xl">
        <section className="max-w-[var(--content-width)] mx-auto bg-white rounded-[var(--card-border-radius)] shadow-lg overflow-hidden">
          <div className="p-6 space-y-4">
            <div className={baskerville.className}>
              <h1 className="large-size max-w-2xl">{rule.header}</h1>
            </div>
            <p className="small-size pb-4">{rule.descriptionlong}</p>
            <div>
              <p className="normal-size">
                Sådan fikser du det:
                <br />
                <p className="small-size">{rule.howtofix}</p>
              </p>
              <p className="normal-size pt-4 max-w-sm ">
                Hvilken betydning har problemet for tilgængeligheden?
                <br />
                <p className="small-size">{rule.whyitmatters}</p>
              </p>
              <p className="small-size pt-3">

                <Link className="border py-2 px-4 rounded-full bg-primarycolor02 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primarycolorvariant03" href={`/${rule.id}`} prefetch={false}>
                  Gå til regelsæt
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
