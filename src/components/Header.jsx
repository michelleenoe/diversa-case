import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between  px-8">
        <div>
          <Link href={"/"}>
            <img
              src="images/diversa-logo.svg"
              alt="Diversa Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <ul className="flex items-center medium-size">
          <li>
            <Link href={"/rules"} prefetch={false}>
              <Button title="Regelsæt" backgroundColor="#69e3fc" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
