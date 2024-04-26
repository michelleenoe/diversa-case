"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabView({ data }) {
  let [categories] = useState({
    Violations: [
      {
        description: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Inapplicable: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
    Incomplete: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
  });
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1">
          {Object.keys(categories).map((category) => (
            <Tab key={category} className={({ selected }) => classNames(" border border-b-0	 border-black rounded-t-2xl py-3 px-10", selected ? "flex items-center justify-center gap-6 bg-secondarycolor text-blue-700 shadow" : "flex items-center justify-center gap-6 text-blue-100 hover:bg-primarycolor02 ] hover:text-white")}>
              {category}
              <div className="p-2 w-10 h-10 aspect-square rounded-full bg-secondarycolor">
                <p className="">{data.incomplete.length}</p>
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className={classNames("rounded-xl bg-white p-3", "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2")}>
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md p-3 hover:bg-gray-100">
                    <h3 className="text-sm font-medium leading-5">{post.title}</h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a href="#" className={classNames("absolute inset-0 rounded-md", "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2")} />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
