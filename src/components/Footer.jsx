import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="pt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-t mx-4 lg:mx-16 py-4 lg:px-16">
          <div className="p-4">
            <p className="font-bold">Multimediedesign </p>
            <p>Frontend Design 2024</p>
            <p>Charlie Tango - Diversacase</p>
          </div>
          <div className="p-4">
            <p className="font-bold">Github:</p>
            <Link target="_blank" href="https://github.com/michelleenoe/diversa-case" prefetch={false}>
              <p className="  hover:underline ">Se git-repository</p>
            </Link>
          </div>
          <div className="p-4">
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
