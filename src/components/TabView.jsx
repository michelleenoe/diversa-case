"use client";
import { Tab } from "@headlessui/react";

export default function TabView({ data }) {
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <Tab>
            <p>Found {data.violations.length} issues</p>
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
