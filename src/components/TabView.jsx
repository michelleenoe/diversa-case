"use client";
import { useState, useEffect, useRef } from "react";
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

  const tabListRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const updateArrows = () => {
      if (tabListRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabListRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };


    updateArrows();
    window.addEventListener('resize', updateArrows);


    return () => {
      window.removeEventListener('resize', updateArrows);
    };
  }, []);


  const filteredCategories = Object.keys(categories).filter(
    category => categories[category].length > 0
  );

  return (
    <div className="px-2 py-16 sm:px-0 m-4 relative">
      <Tab.Group>
        <div className="flex items-center relative">
          <Tab.List className="flex space-x-1 rounded-xl" ref={tabListRef}>
            {showLeftArrow && (
              <span className="absolute left-0 z-10 mx-2 text-2xl" aria-hidden="true">
                &lsaquo;
              </span>
            )}
            {filteredCategories.map((category) => (
              <Tab key={category} className={({ selected }) =>
                classNames(
                  "rounded-t-2xl py-3 px-10 small-size",
                  selected
                    ? "bg-tabbgcolor text-blue-700 "
                    : "bg-tabtopnotactive text-blue-100 hover:bg-primarycolor02 hover:text-white"
                )}
              >
                <div className="p-2 w-10 h-10 aspect-square rounded-full bg-cColor">
                  <p className="">{categories[category].length}</p>
                </div>
                {category}
              </Tab>
            ))}
            {showRightArrow && (
              <span className="absolute right-0 z-10 mx-2 text-2xl" aria-hidden="true">
                &rsaquo;
              </span>
            )}
          </Tab.List>
        </div>
        <Tab.Panels className="bg-tabbgcolor col-span-4">
          {Object.values(categories)
            .filter(posts => posts.length > 0)
            .map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <section>
                  <div className={baskerville.className}>
                    <p className="normal-size text-center pt-7 pb-6">
                      These results indicate what elements failed the axe-core rules
                    </p>
                  </div>
                  <ul className="px-4 md:px-16">
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-y-tabbordercolor"
                      >
                        <div className="flex-shrink-0 md:mr-4">
                          <div className="p-2 w-4 h-4 aspect-square rounded-full bg-cColor"></div>
                        </div>
                        <div className="flex-grow md:max-w-md">
                          <h2 className="small-size">{post.description}</h2>
                          <h3 className="small-size">{post.help}</h3>
                        </div>
                        <div>
                          <Link
                            className="bg-primarycolor02 hover:bg-primarycolorvariant03 px-5 py-3 rounded-full"
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
