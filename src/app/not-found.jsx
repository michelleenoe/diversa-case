import Link from "next/link";
import { baskerville } from "./fonts";

export default function NotFound() {
  return (
    <section className="grid grid-cols-gridContent">
      <div className="pt-10 mb-20 col-start-3">
        <div className="large-size pb-6 max-w-2xl">
          <h1 className={baskerville.className}>Siden findes ikke</h1>
        </div>
        <p className="pb-8 small-size max-w-2xl">Siden du prøver at finde, findes desværre ikke. </p>
        <Link className="bg-primarycolor02 hover:bg-primarycolorvariant03 bordercolor  px-5 py-3 rounded-full" href={"/"} prefetch={false}>
          Tilbage til forsiden
        </Link>
      </div>
    </section>
  );
}
