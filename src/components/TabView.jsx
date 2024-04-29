"use client";
import { useState, useRef, useEffect } from "react";
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
  // State to track if the screen is small
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effect to focus on the first tab when component mounts
  useEffect(() => {
    if (tabListRef.current) {
      tabListRef.current.focus();
    }
    // Add event listener to check for screen size changes
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    // Call handleResize to set initial screen size state
    handleResize();
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List
          className="flex space-x-1 rounded-xl bg-blue-900/20 p-1"
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
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full flex justify-center items-center gap-5 rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {/* Render the div only if it's not a small screen */}
              {!isSmallScreen && (
                <div className=" pt-2 w-9 h-9 aspect-square rounded-full bg-cColor">
                  <p className="">{categories[category].length}</p>
                </div>
              )}
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-secondarycolor ring-offset-2 ring-offset-secondarycolor focus:outline-none focus:ring-2"
              )}
            >
              <section>
                <div className={baskerville.className}>
                  <p className="normal-size text-center pt-7 pb-6">
                    These results indicate what elements failed the axe-core
                    rules
                  </p>
                </div>
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
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
