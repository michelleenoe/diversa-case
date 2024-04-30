"use client";
import rulesData from "../rulesData.json";
import { baskerville } from "@/app/fonts";
import Link from "next/link";

export default function RuleDetail({ params }) {
  const { id } = params;

  const rule =
    rulesData.find((rule) => rule.id === id) ||
    rulesData.find((rule) => rule.id === "Lorem ipsum");

  return (
    <>
      <div className="grid grid-cols-gridContent">
        <section className="col-start-3">
          <div className={baskerville.className}>
            <h1 className=" pt-10 pb-5 large-size max-w-2xl">{rule.header}</h1>
          </div>
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 space-y-4">
              <p className="small-size pb-4 max-w-xl">{rule.descriptionlong}</p>
              <div>
                <p className="normal-size">
                  Sådan fikser du det:
                  <br />
                  <p className="small-size max-w-xl pt-1">{rule.howtofix}</p>
                </p>
                <p className="normal-size pt-4">
                  Hvordan påvirker problemet <br /> tilgængeligheden?
                  <br />
                  <p className="small-size max-w-xl pt-1">
                    {rule.whyitmatters}
                  </p>
                </p>
                <p className="flex justify-end small-size pt-3">
                  <Link
                    className="bg-primarycolor01  hover:bg-primarycolorvariant01 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondarycolor px-5 py-3 rounded-full"
                    href={`/${rule.id}`}
                    prefetch={false}
                  >
                    Gå til regelsæt
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
