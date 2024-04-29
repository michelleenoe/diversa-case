import { baskerville } from "./fonts";
import Button from "@/components/Button";
import React from "react";

export const metadata = {
  //det der normalt står i vores header skriver vi ind her
  title: "tilgængelighedsrapportering",
  description: "Tilgængelighedsrapporteringsværktøj - Opgave med Charlie Tango for Diversa. Multimediedesign Frontend 2024",
};

export default function Home() {
  return (
    <div className="pt-10 mb-20">
      <div>
        <div className="large-size pb-6 max-w-2xl">
          <h1 className={baskerville.className}>Velkommen til vores værktøj til tilgængelighedsrapportering</h1>
        </div>
        <p className="pb-8 small-size max-w-2xl">Vores tilgængelighedsrapportværktøj viser forbedringsområder og overholdelse af standarder for dit webindhold. Sikre tilgængelighed for et bredt publikum og en inkluderende onlineoplevelse. Start forbedringen i dag!</p>
        <form action="/report">
          <div className="flex flex-col ">
            <label htmlFor="url" className="small-size pb-2">
              Indtast venligst URL
            </label>
            <div className="flex flex-wrap gap-3">
              <input className="bg-inputfieldcolor rounded-full px-3 py-2 mr-3 w-2/3" type="text" id="url" name="url" required />
              <Button className="w-1/3" title="Få Report" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
