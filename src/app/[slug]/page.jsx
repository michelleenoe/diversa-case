"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function RulesPage() {
  return (
    <>
      <section className="">
        <article>
          <h1>Her kan du se en komplet liste af alle regler der bliver testet på, samt læse nærmere om dem.</h1>
        </article>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="rounded-t-2xl py-3 px-10 bg-tabbgcolor flex justify-between text-left text-2xl p-2">
                <h1 className="">WCAG 2.0 Level A & AA regler</h1>
                <div className={`${open ? "rotate-180 transform" : ""} h-5 w-5 flex items-start justify-center `}>
                  <svg className="w-7" xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                  </svg>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="bg-tabbgcolor">
                <ul className="">
                  <li className="flex justify-between items-center py-8 pl-6 pr-20 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                    <div className="flex ">
                      <div className="p-2 w-4 h-4 aspect-square rounded-full bg-secondarycolor"></div>
                    </div>
                    <div className="w-2/5">
                      <h2 className=" font-bold ">area-alt</h2>
                      <p>Ensures area elements of image maps have alternate text </p>
                      <p className=" pt-2 ">Issue Type: Failure, needs review</p>
                    </div>
                    <div className=" text-center ">
                      <p>Impact:</p>
                      <p>Kritisk</p>
                    </div>
                    <div>
                      <Link className="border py-2 px-8 rounded-full bg-primarycolor02 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primarycolorvariant03" href={`/`} prefetch={false}>
                        Læs mere
                      </Link>
                    </div>
                  </li>
                  <li className="flex justify-between items-center py-8 pl-6 pr-20 gap-8 first:border-y border-b border-y-primarytextcolor">
                    <div className="flex ">
                      <div className="p-2 w-4 h-4 aspect-square rounded-full bg-secondarycolor"></div>
                    </div>
                    <div className="w-2/5">
                      <h2 className=" font-bold ">area-alt</h2>
                      <p>Ensures area elements of image maps have alternate text </p>
                      <p className=" pt-2 ">Issue Type: Failure, needs review</p>
                    </div>
                    <div className=" text-center ">
                      <p>Impact:</p>
                      <p>Kritisk</p>
                    </div>
                    <div>
                      <Link className="border py-2 px-8 rounded-full bg-primarycolor02 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primarycolorvariant03" href={`/`} prefetch={false}>
                        Læs mere
                      </Link>
                    </div>
                  </li>
                  <li className="flex justify-between items-center py-8 pl-6 pr-20 gap-8 first:border-y last:border-0 border-b border-y-primarytextcolor">
                    <div className="flex ">
                      <div className="p-2 w-4 h-4 aspect-square rounded-full bg-secondarycolor"></div>
                    </div>
                    <div className="w-2/5">
                      <h2 className=" font-bold ">area-alt</h2>
                      <p>Ensures area elements of image maps have alternate text </p>
                      <p className=" pt-2 ">Issue Type: Failure, needs review</p>
                    </div>
                    <div className=" text-center ">
                      <p>Impact:</p>
                      <p>Kritisk</p>
                    </div>
                    <div>
                      <Link className="border py-2 px-8 rounded-full bg-primarycolor02 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primarycolorvariant03" href={`/`} prefetch={false}>
                        Læs mere
                      </Link>
                    </div>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* 
        <Disclosure>
          <Disclosure.Button className=" text-left text-2xl">
            <h1 className="">WCAG 2.1 Level A & AA Rules</h1>
          </Disclosure.Button>
          <Disclosure.Panel>
            <h2>hej</h2>
          </Disclosure.Panel>
        </Disclosure>
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
      </section>
    </>
  );
}
