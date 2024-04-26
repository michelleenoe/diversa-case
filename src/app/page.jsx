import { baskerville } from "./fonts";
import Button from "@/components/Button";
import React from "react";

export default function Home() {
  return (
    <div className="custom-grid pt-10">
      <div className="flex flex-col items-center">
        <div className="large-size pb-5 max-w-2xl">
          <h1 className={baskerville.className}>
            Velkommen til vores Værktøj til Tilgængelighedsrapportering
          </h1>
        </div>
        <p className="pb-8 small-size max-w-2xl">
          Vores Tilgængelighedsrapportværktøj viser forbedringsområder og
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
              <Button title="Få Report" backgroundColor="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
