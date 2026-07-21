import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Productos",
    link: "/service",
  },
  {
    id: 2,
    name: "Sobre Nosotros",
    link: "/about",
  },
  {
    id: 3,
    name: "Contacto",
    link: "/contact",
  },
];

export default function Header() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between">
          {/* logo */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Licoreria
            </a>
          </div>
          {/* navbar derecho */}
          <div className="flex justify-between items-center gap-4">
            {/* Menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Modo Oscuro */}
            <div className="relative group hidden sm:block">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
