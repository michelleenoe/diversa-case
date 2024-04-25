import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex pl-5 pt-1">
        <div className="pt-4">
          <Link href={"/"}>
            <img
              src="images/diversa-logo.svg"
              alt="Diversa Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <ul className="flex pl-10 gap-6 medium-size">
          <li>
            <Link href={"/"} prefetch={false}>
              Hjem
            </Link>
          </li>
          <li>
            <Link href={"/rules"} prefetch={false}>
              Regler
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
