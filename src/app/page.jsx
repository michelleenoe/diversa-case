import { baskerville } from "./fonts";
import Button from "@/components/Button";
import React from "react";

export default function Home() {
  return (
    <div className="custom-grid pt-10">
      <div className="flex flex-col items-center">
        <div className="large-size pb-5 max-w-2xl">
          <h1 className={baskerville.className}>
            Velkommen til vores værktøj til tilgængelighedsrapportering
          </h1>
        </div>
        <p className="pb-8 small-size max-w-2xl">
          Vores tilgængelighedsrapportværktøj viser forbedringsområder og
          overholdelse af standarder for dit webindhold. Sikre tilgængelighed
          for et bredt publikum og en inkluderende onlineoplevelse. Start
          forbedringen i dag!
        </p>
        <form className="flex flex-col items-center gap-6" action="/report">
          <div className="flex flex-col ">
            <label htmlFor="url" className="small-size pb-2">
              Indtast venligst URL
            </label>
            <div className="flex flex-wrap gap-3">
              <input
                className="bg-inputfieldcolor rounded-full px-3 py-2 mr-3"
                type="text"
                id="url"
                name="url"
                required
              />
              {/* <button
                type="submit"
                className="bg-primarycolor02 hover:bg-primarycolorvariant03 text-white px-6 py-3 rounded-full"
              >
                Få report
              </button> */}
              <Button title="Få Report" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
