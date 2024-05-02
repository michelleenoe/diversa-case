"use client";

import Link from "next/link";
import { baskerville } from "../fonts";
import { Disclosure } from "@headlessui/react";
import rulesData from "../rules/rulesData.json";
import { useState } from "react";



// Reusable RuleItem Component
function RuleItem({ rule }) {
  return (
    <li className="grid lg:flex lg:justify-between lg:items-center py-8 border-b border-y-tabbordercolor first:border-1 last:border-b-0">
      <div>
        <h2 className="tab-size">{rule.id}</h2>
        <p className="pt-3 small-size">{rule.description}</p>
        <div className="pt-3 flex gap-2 whitespace-nowrap">
          <p className="tab-size whitespace-nowrap">Fejl type:</p>
          <p className="normal-size ">{Array.isArray(rule.issuetype) ? rule.issuetype.join(", ") : rule.issuetype}</p>
        </div>
      </div>
      <div className="lg:w-1/5 flex justify-end">
        <Link className="bg-primarycolor02 hover:bg-primarycolorvariant03 bordercolor  small-size px-4 md:px-5 py-2 md:py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondarycolor" href={`/rules/${rule.id}`} prefetch={false}>
          Læs mere
        </Link>
      </div>
    </li>
  );
}

// Function to handle dynamic styles
function getDisclosureButtonClasses(open) {
  return `
  ${open ? "bg-tabbgcolor hover:bg-tabtopnotactive" : "bg-tabtopnotactive"}
  shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondarycolor 
  py-3 md:px-8 px-4 flex gap-3 md:gap-8 text-left tab-size bordercolor `;
}

export default function RulesPage({ params }) {
  const { id } = params;

  return (
    <>
      <section className="grid grid-cols-gridContent">
        <div className="py-16 col-start-3">
          <h1 className={`${baskerville.className} large-size pb-6 max-w-2xl`}>Komplet guide til WCAG: Forstå alle tilgængelighedsregler</h1>
          <article>
            <div className="pb-6 max-w-2xl">
              <p className="mb-4 small-size">Web Content Accessibility Guidelines, bedre kendt som WCAG, er standarder fastsat for at gøre internetindhold tilgængeligt for alle, inklusiv personer med forskellige typer af handicap. WCAG 2.0, som er den anden udgave af disse retningslinjer, er opdelt i tre tilgængelighedsniveauer: Level A, Level AA og Level AAA.</p>
              <p className="small-size">Overholdelse af WCAG 2.0 Level A og AA er ikke blot en juridisk forpligtelse i mange jurisdiktioner for at undgå diskrimination af handicappede; det er også et skridt mod at skabe en mere inkluderende og universelt tilgængelig weboplevelse.</p>
            </div>
          </article>
          {["2.0", "2.1", "2.2"].map((version, index) => (
            <Disclosure key={version} defaultOpen={index === 0}>
              {({ open }) => (
                <>
                  <div className={`my-4`}>
                    <Disclosure.Button className={getDisclosureButtonClasses(open)}>
                      <h2 className=" whitespace-nowrap">WCAG {version} Level A & AA regler</h2>
                      <div className={`${open ? "rotate-180 transform" : ""} h-5 w-5 flex items-center`}>
                        <svg className="w-7" xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                        </svg>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`bg-tabbgcolor shadow-lg 

                      rounded-xl px-10  mt-3 bordercolor `}
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
