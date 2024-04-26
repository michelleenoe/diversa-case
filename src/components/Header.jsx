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
            <Button
              href={"/rules"}
              title="Regelsæt"
              backgroundColor="#69e3fc"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
