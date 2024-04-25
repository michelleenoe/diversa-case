import { baskerville } from "./fonts";

export default function Home() {
  return (
    <div className="flex flex-col items-center leading-5 pt-10">
      <div className="large-size pb-5">
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
      <form className="flex flex-col items-center gap-6" action="/report">
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
