import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <ul className="flex gap-2 ">
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
