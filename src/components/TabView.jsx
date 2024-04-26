"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabView({ data }) {
  let [categories] = useState({
    Violations: data.violations,
    Inapplicable: data.inapplicable,
    Incomplete: data.incomplete,
  });
  //console.log("violations", data.violations.length);

  return (
    <div className="w-full max-w-mdx px-2 py-16 sm:px-0 m-4">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab key={category} className={({ selected }) => classNames(" rounded-t-2xl py-3 px-10", selected ? "flex items-center justify-center gap-6 bg-tabbgcolor text-blue-700 " : "flex bg-tabtopnotactive items-center justify-center gap-6 text-blue-100 hover:bg-primarycolor02 ] hover:text-white")}>
              <div className="p-2 w-10 h-10 aspect-square rounded-full bg-secondarycolor">
                <p className="">{categories[category].length}</p>
              </div>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=" bg-tabbgcolor w-max">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames("rounded-xl bg-white p-3", "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2")}>
              <section>
                <div className="pl-4 py-6">
                  <h1 className=" text-2xl ">These results indicate what elements failed the axe-core rules</h1>
                </div>
                <ul className="px-16">
                  {posts.map((post) => (
                    <li key={post.id} className="flex justify-between items-center py-8 pl-6 pr-20 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                      <div className="flex ">
                        <div className="p-2 w-4 h-4 aspect-square rounded-full bg-secondarycolor"></div>
                      </div>
                      <div className="w-2/5">
                        <h2>{post.description}</h2>
                        <h3>{post.help}</h3>
                      </div>
                      <div className=" text-center ">
                        <p>Impact:</p>
                        <p>{post.impact}</p>
                      </div>
                      <div>
                        <Link className="border py-2 px-8 rounded-full bg-primarycolor02 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primarycolorvariant03" href={`/rules/${post.id}`} prefetch={false}>
                          Læs mere
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
