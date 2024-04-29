import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className=" pt-20">
        <div className="flex justify-between border-t py-4 px-16">
          <div>
            <p className="font-bold">Multimediedesign </p>
            <p>Frontend Design 2024</p>
            <p>Charlie Tango - Diversacase</p>
          </div>
          <div>
            <p className="font-bold">Github:</p>
            <Link target="_blank" href="https://github.com/michelleenoe/diversa-case" prefetch={false}>
              <p className="  hover:underline "> Gå til repo</p>
            </Link>
          </div>
          <div>
            <p className="font-bold">Gruppe:</p>
            <p>Andrea Damgaard Hegner</p>
            <p>Andrea Jean Hauberg</p>
            <p>Michelle Enøe</p>
          </div>
        </div>
      </footer>
    </>
  );
}
