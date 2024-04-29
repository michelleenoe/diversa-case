"use client";
import { useState, useRef } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { baskerville } from "@/app/fonts";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabView({ data }) {
  let [categories] = useState({
    Funktionsfejl: data.violations,
    "Ikke anvendelig": data.inapplicable,
    Ufuldendt: data.incomplete,
  });

  // Ref for tab navigation
  const tabListRef = useRef(null);

  const filteredCategories = Object.keys(categories).filter(
    (category) => categories[category].length > 0
  );

  return (
    <div className="px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List
          className="flex space-x-1 rounded-xl p-1 items-center "
          ref={tabListRef}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              tabListRef.current?.children[
                (e.target.tabIndex + 1) % Object.keys(categories).length
              ]?.focus();
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              tabListRef.current?.children[
                (e.target.tabIndex - 1 + Object.keys(categories).length) %
                  Object.keys(categories).length
              ]?.focus();
            }
          }}
          tabIndex={0}
        >
          {filteredCategories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-10 flex justify-center items-center gap-5 rounded-lg py-2.5 small-size font-medium leading-5 outline-none ",
                  selected
                    ? "bg-tabbgcolor text-secondarycolor-700 shadow"
                    : "bg-tabtopnotactive text-secondarycolor-100",
                  selected ? "" : "outline-none"
                )
              }
            >
              <div className="hidden md:block pt-2 w-9 h-9 aspect-square small-size rounded-full bg-cColor">
                <p>{categories[category].length}</p>
              </div>

              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="bg-tabbgcolor mt-2 max-w-4xl">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-offset-2 ring-offset-secondarycolor "
              )}
            >
              <section>
                <div className={baskerville.className}>
                  <p className="normal-size text-center pt-7 pb-6">
                    These results indicate what elements failed the axe-core
                    rules
                  </p>
                </div>
                <ul className="small-size md:px-8">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="flex flex-wrap items-center py-4 md:px-8 md:py-8 border-b border-y-tabbordercolor first:border-y last:border-0"
                    >
                      <div className="hidden md:block flex-shrink-0 mr-4">
                        <div className="p-2 w-4 h-4 aspect-square rounded-full bg-cColor"></div>
                      </div>
                      <div className="flex-grow md:flex-grow-0 md:pl-4 max-w-md">
                        <h2 className="small-size mb-1 max-w-md md:mb-0">
                          {post.description}
                        </h2>
                        <h3 className="hidden md:block small-size max-w-md ">
                          {post.help}
                        </h3>
                      </div>
                      <div className="ml-auto py-4">
                        <Link
                          className="bg-primarycolor02 hover:bg-primarycolorvariant03 small-size px-4 md:px-5 py-2 md:py-3 rounded-full"
                          href={`/rules/${post.id}`}
                          prefetch={false}
                        >
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
