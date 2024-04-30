"use client";
import Link from "next/link";
import { baskerville } from "../fonts";
import { Disclosure } from "@headlessui/react";
import rulesData from "../rules/rulesData.json";
import { useState } from "react";

export default function RulesPage({ params }) {
  const { id } = params;

  const firstRule = rulesData[0];
  const secondRule = rulesData[1];
  const thirdRule = rulesData[2];
  const loremRule = rulesData[3];

  return (
    <>
      <section className="grid grid-cols-gridContent">
        <div className=" pt-10 col-start-3 ">
          <h1 className={`${baskerville.className} large-size pb-6 max-w-2xl`}>
            Komplet guide til WCAG: Forstå alle tilgængelighedsregler
          </h1>
          <article className="">
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

          <div className="pt-5">
            <Disclosure defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? " bg-tabbgcolor hover:bg-tabtopnotactive"
                        : "bg-tabtopnotactive rounded-b-2xl"
                    } rounded-t-2xl py-3 px-10 flex gap-8 text-left text-2xl p-2`}
                  >
                    <h2 className="tab-size">WCAG 2.0 Level A & AA regler</h2>
                    <div
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 flex items-start`}
                    >
                      <svg
                        className="w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-chevron-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-tabbgcolor">
                    <ul className="">
                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{firstRule.id}</h2>
                          <p className="pt-2">{firstRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p className="  ">{firstRule.issuetype}</p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className=" py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${firstRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>

                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{secondRule.id}</h2>
                          <p className="pt-2">{secondRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p>
                              {Array.isArray(secondRule.issuetype)
                                ? secondRule.issuetype.join(", ")
                                : secondRule.issuetype}
                            </p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${secondRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>

                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{thirdRule.id}</h2>
                          <p className="pt-2">{thirdRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p className="  ">{thirdRule.issuetype}</p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${thirdRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>
                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{loremRule.id}</h2>
                          <p className="pt-2">{loremRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p className="  ">{loremRule.issuetype}</p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${loremRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-5">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open
                        ? " bg-tabbgcolor hover:bg-tabtopnotactive"
                        : "bg-tabtopnotactive rounded-b-2xl"
                    } rounded-t-2xl py-3 px-10 flex gap-8 text-left text-2xl p-2`}
                  >
                    <h2 className="tab-size">WCAG 2.1 Level A & AA Rules</h2>
                    <div
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 flex items-start`}
                    >
                      <svg
                        className="w-7"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-chevron-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-tabbgcolor">
                    <ul className="">
                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{firstRule.id}</h2>
                          <p className="pt-2">{firstRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p className="  ">{firstRule.issuetype}</p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${firstRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>

                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{secondRule.id}</h2>
                          <p className="pt-2">{secondRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p>
                              {Array.isArray(secondRule.issuetype)
                                ? secondRule.issuetype.join(", ")
                                : secondRule.issuetype}
                            </p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${secondRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>

                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{thirdRule.id}</h2>
                          <p className="pt-2">{thirdRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p className="  ">{thirdRule.issuetype}</p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${thirdRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>
                      <li className="grid lg:flex lg:justify-between lg:items-center py-8 pl-6 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                        <div className="lg:w-4/5">
                          <h2 className=" font-bold ">{loremRule.id}</h2>
                          <p className="pt-2">{loremRule.description} </p>
                          <div className="pt-2 flex gap-2 ">
                            <p className=" font-bold ">Fejl type:</p>
                            <p className="  ">{loremRule.issuetype}</p>
                          </div>
                        </div>
                        <div className="lg:w-1/5">
                          <Link
                            className="py-2 px-4 rounded-full bg-primarycolor02 transition-colors duration-100 ease-in-out hover:bg-primarycolorvariant03"
                            href={`/rules/${loremRule.id}`}
                            prefetch={false}
                          >
                            Læs mere
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          {/* 
   
        <Disclosure>
          <Disclosure.Button className=" text-left ">
            <h1 className="text-2xl">WCAG 2.2 Level A & AA Rules</h1>
            <p>These rules are disabled by default, until WCAG 2.2 is more widely adopted and required.</p>
          </Disclosure.Button>
          <Disclosure.Panel>
            <h2>hej</h2>
          </Disclosure.Panel>
        </Disclosure> */}

          {/* <div className="pl-4 py-6">
          <h1 className=" text-2xl ">Best Practices Rules</h1>
          <p>Rules that do not necessarily conform to WCAG success criterion but are industry accepted practices that improve the user experience.</p>
        </div>
        <div className="pl-4 py-6">
          <h1 className=" text-2xl ">WCAG 2.x level AAA rules</h1>
          <p>Rules that check for conformance to WCAG AAA success criteria that can be fully automated. These are disabled by default in axe-core.</p>
        </div>
        <div className="pl-4 py-6">
          <h1 className=" text-2xl ">Experimental Rules</h1>
          <p>Rules we are still testing and developing. They are disabled by default in axe-core, but are enabled for the axe browser extensions.</p>
        </div>
        <div className="pl-4 py-6">
          <h1 className=" text-2xl ">Deprecated Rules</h1>
          <p>Deprecated rules are disabled by default and will be removed in the next major release.</p>
        </div>
        <div className="pl-4 py-6">
          <h1 className=" text-2xl ">Best Practices Rules</h1>
        </div> */}
        </div>
      </section>
    </>
  );
}
