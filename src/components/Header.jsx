import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between px-8">
        <div>
          <Link href={"/"}>
            <img
              src="../images/diversa-logo.svg"
              alt="Diversa Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <ul className="normal-size pt-4">
          <li className=" bg-primarycolor01 hover:bg-primarycolorvariant01 px-5 py-3 rounded-full">
            <Link href={"/rules"} prefetch={false}>
              Regelsæt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
