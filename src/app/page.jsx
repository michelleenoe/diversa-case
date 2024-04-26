import { baskerville } from "./fonts";
import Button from "@/components/Button";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center leading-5 ">
      <div className="large-size leading-5 pb-5">
        <h1 className={baskerville.className}>
          Welcome to our Accessibility Report Tool
        </h1>
      </div>
      <p className="leading-6 pb-10 small-size">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        voluptatum facere eaque voluptates aliquid amet ex architecto! Aperiam
        quas, assumenda dolorem quibusdam, quisquam ducimus quia, culpa non
        dolor eos exercitationem!
      </p>
      <form className="flex items-center gap-6" action="/report">
        <div className="flex flex-col">
          <label htmlFor="url" className="small-size text-gray-700">
            Enter Url
          </label>
          <input
            className=" bg-inputfieldcolor rounded-full px-3 py-2"
            type="text"
            id="url"
            name="url"
            required
          />
        </div>
        <Button title="Click me" backgroundColor="" />
      </form>
    </div>
  );
}
