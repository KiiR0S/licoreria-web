import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="flex flex-col p-2 shadow-[0px_0px_5px_-1px_black]">
        <section className="flex justify-between items-center">
          <figure>
            <Link to="/">
              <img
                className="border-2 w-[20dvw] h-[5dvh] align-top"
                src=""
                alt=""
              />
            </Link>
          </figure>
          <nav className="flex gap-2">
            <Link className="text-sm" to="/service">
              Services
            </Link>
            <Link className="text-sm" to="/about">
              About
            </Link>
            <Link className="text-sm" to="/contact">
              Contact
            </Link>
          </nav>
        </section>
      </header>
    </>
  );
}
