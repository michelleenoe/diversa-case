"use client"
import React from "react";
import { baskerville } from "@/app/fonts";
import Link from "next/link";

export default function RapportFejl() {
  return (
    <div className="flex items-center justify-center h-screen bg-bgcolor">
      <div className="text-center">
        <h1 className={`${baskerville.className} text-4xl font-bold mb-4`}>Fejl ved generering af rapport</h1>
        <p className="text-lg text-primarytextcolor mb-8">
          Der opstod en fejl under genereringen af rapporten. Prøv venligst igen.
        </p>
        <Link href="/" prefetch={false}>
          <a className="text-primarycolor02 hover:text-primarycolorvariant03">
            Tilbage til forsiden
          </a>
        </Link>
      </div>
    </div>
  );
}
