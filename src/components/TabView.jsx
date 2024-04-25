"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";

export default function TabView({ data }) {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0 m-4">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl">
          <Tab className="border border-b-0	 border-black rounded-t-2xl py-3 px-10 ">
            <div className="flex items-center justify-center gap-6">
              <div className="p-2 w-10 h-10 aspect-square rounded-full bg-secondarycolor">
                <p className="">{data.violations.length}</p>
              </div>
              <div>
                <p className="">Funktionsfejl</p>
              </div>
            </div>
          </Tab>
          <Tab className="border border-b-0	 border-black rounded-t-2xl py-3 px-10 ">
            <div className="flex items-center justify-center gap-6">
              <div className="p-2 w-10 h-10 aspect-square rounded-full bg-secondarycolor">
                <p className="">{data.inapplicable.length}</p>
              </div>
              <div>
                <p className="">Ikke anvendelig</p>
              </div>
            </div>
          </Tab>
          <Tab className="border border-b-0	 border-black rounded-t-2xl py-3 px-10 ">
            <div className="flex items-center justify-center gap-6">
              <div className="p-2 w-10 h-10 aspect-square rounded-full bg-secondarycolor">
                <p className="">{data.incomplete.length}</p>
              </div>
              <div>
                <p className="">Ufuldendt</p>
              </div>
            </div>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="border border-black w-max">
            <section>
              <div className="pl-4 py-6">
                <h1 className=" text-2xl ">These results indicate what elements failed the axe-core rules</h1>
              </div>
              <article className="px-16">
                {data.violations.map((violation, index) => (
                  <div key={index} className="flex justify-between items-center py-8 pl-6 pr-20 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                    <div className="flex ">
                      <div className="p-2 w-4 h-4 aspect-square rounded-full bg-secondarycolor"></div>
                    </div>
                    <div className="w-2/5">
                      <h2>{violation.description}</h2>
                      <h3>{violation.help}</h3>
                    </div>
                    <div className=" text-center ">
                      <p>Impact:</p>
                      <p>{violation.impact}</p>
                    </div>
                    <div>
                      <button className="border py-2 px-8 rounded-full bg-primarycolorvariant03 transition-transform duration-300 ease-in-out hover:scale-105	">
                        <Link href={"/"} prefetch={false}>
                          Læs mere
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </article>
            </section>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
