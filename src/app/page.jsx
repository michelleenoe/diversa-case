import { baskerville } from "./fonts";

export default function Home() {
  return (
    <div className="flex flex-col pt-10 items-center">
      <div className="large-size pb-5 max-w-2xl ">
        <h1 className={baskerville.className}>
          Velkommen til vores Værktøj til Tilgængelighedsrapportering
        </h1>
      </div>
      <p className="pb-10 small-size max-w-2xl">
        Vores Tilgængelighedsrapportværktøj viser forbedringsområder og
        overholdelse af standarder for dit webindhold. Sikre tilgængelighed for
        et bredt publikum og en inkluderende onlineoplevelse. Start forbedringen
        i dag!
      </p>
      <form className="flex flex-col items-end gap-6" action="/report">
        <div className="flex flex-col">
          <label htmlFor="url" className="small-size pb-2 pl-1">
            Indtast venligst URL
          </label>
          <div className="flex">
            <input
              className="bg-inputfieldcolor rounded-full px-3 py-2 mr-10 "
              type="text"
              id="url"
              name="url"
              required
            />
            <button
              type="submit"
              className="bg-primarycolor02 hover:bg-primarycolorvariant03 text-white px-6 py-3 rounded-full"
            >
              Få report
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
