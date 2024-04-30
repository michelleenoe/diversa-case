"use client";
import { baskerville } from "../fonts";
import Link from "next/link";

export default function Rapportfejl() {
  return (
    <div className="pt-10 grid grid-cols-gridContent">
      <div className="pt-10 mb-20 col-start-3">
        <div className="large-size pb-6 max-w-2xl">
          <h1 className={baskerville.className}>
            Fejl ved generering af rapport
          </h1>
        </div>
        <p className="pb-8 small-size max-w-2xl">
          Der opstod en fejl under genereringen af rapporten. Prøv venligst
          igen.
        </p>
        <Link
          className="bg-primarycolor02 hover:bg-primarycolorvariant03 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondarycolor"
          href={"/"}
          prefetch={false}
        >
          Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
}
