import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <>
      <nav className="flex items-center justify-between pt-4 px-10">
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
          <li className=" ">
            <Link
              className="bg-primarycolor01  hover:bg-primarycolorvariant01 transition-colors duration-100 ease-in-out px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondarycolor bordercolor "
              href={"/rules"}
              prefetch={false}
            >
              Regelsæt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
