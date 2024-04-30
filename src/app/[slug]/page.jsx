"use client";

import Link from "next/link";
import { baskerville } from "../fonts";
import { Disclosure } from "@headlessui/react";
import rulesData from "../rules/rulesData.json";
import { useState } from "react";

// Reusable RuleItem Component
function RuleItem({ rule }) {
  return (
    <li className="grid lg:flex lg:justify-between lg:items-center py-8 gap-8 first:border-y last:border-0 border-b border-y-tabbordercolor">
      <div>
        <h2 className="tab-size">{rule.id}</h2>
        <p className="pt-2 small-size">{rule.description}</p>
        <div className="pt-2 flex gap-2">
          <p className="tab-size">Fejl type:</p>
          <p>
            {Array.isArray(rule.issuetype)
              ? rule.issuetype.join(", ")
              : rule.issuetype}
          </p>
        </div>
      </div>
      <div className="lg:w-1/5">
        <Link
          className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
          href={`/rules/${rule.id}`}
          prefetch={false}
        >
          Læs mere
        </Link>
      </div>
    </li>
  );
}

// Function to handle dynamic styles
function getDisclosureButtonClasses(open) {
  return `${
    open
      ? "bg-tabbgcolor shadow-lg  hover:bg-tabtopnotactive"
      : "bg-tabtopnotactive shadow-lg  rounded-b-2xl"
  } rounded-t-2xl py-3 px-10 flex gap-8 text-left text-2xl p-2`;
}

export default function RulesPage({ params }) {
  const { id } = params;

  return (
    <>
      <section className="grid grid-cols-gridContent">
        <div className="pt-10 col-start-3">
          <h1 className={`${baskerville.className} large-size pb-6 max-w-2xl`}>
            Komplet guide til WCAG: Forstå alle tilgængelighedsregler
          </h1>
          <article>
            <div className="pb-6 max-w-2xl">
              <p className="mb-4 small-size">
                Web Content Accessibility Guidelines, bedre kendt som WCAG, er
                standarder fastsat for at gøre internetindhold tilgængeligt for
                alle, inklusiv personer med forskellige typer af handicap. WCAG
                2.0, som er den anden udgave af disse retningslinjer, er opdelt
                i tre tilgængelighedsniveauer: Level A, Level AA og Level AAA.
              </p>
              <p className="small-size">
                Overholdelse af WCAG 2.0 Level A og AA er ikke blot en juridisk
                forpligtelse i mange jurisdiktioner for at undgå diskrimination
                af handicappede; det er også et skridt mod at skabe en mere
                inkluderende og universelt tilgængelig weboplevelse.
              </p>
            </div>
          </article>
          {["2.0", "2.1"].map((version, index) => (
            <Disclosure key={version} defaultOpen={index === 0}>
              {({ open }) => (
                <>
                  <div className={`mb-${index === 0 ? "4" : "0"}`}>
                    <Disclosure.Button
                      className={getDisclosureButtonClasses(open)}
                    >
                      <h2 className="tab-size">
                        WCAG {version} Level A & AA regler
                      </h2>
                      <div
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 flex items-center`}
                      >
                        <svg
                          className="w-7"
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="6"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                        </svg>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className="bg-tabbgcolor shadow-lg 

rounded-br-lg

rounded-bl-lg rounded-tr-lg p-10 "
                    >
                      <ul>
                        {rulesData.map((rule, ruleIndex) => (
                          <RuleItem key={ruleIndex} rule={rule} />
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </section>
    </>
  );
}
