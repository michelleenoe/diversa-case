"use client";
import { Tab } from "@headlessui/react";

export default function TabView({ data }) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab>
            <h2>Inapplicable</h2>
            <p>{data.violations.length}</p>
          </Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <section>
              {data.violations.map((violation, index) => (
                <div key={index}>
                  <h2>{violation.description}</h2>
                  <p>Impact: {violation.impact}</p>
                </div>
              ))}
            </section>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
