import React from "react";
import { FaLocationArrow, FaMobileAlt, FaInstagram } from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "Home", link: "/#" },
  { title: "Home", link: "/#" },
  { title: "Home", link: "/#" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 py-16">
          {/* Company */}
          <div>
            <a
              href="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Licorería
            </a>

            <p className="mt-4 text-gray-600 dark:text-gray-400 lg:pr-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus obcaecati voluptate quasi, voluptatem cumque rem
              laborum.
            </p>

            <p className="mt-4 text-gray-500 dark:text-gray-500">
              Made with ❤️ by Alonso
            </p>

            <a
              href="https://www.youtube.com/watch?v=4sc6BhgS_Co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 duration-300"
            >
              Visita nuestro canal
            </a>
          </div>

          {/* Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div>
              <h2 className="text-xl font-bold mb-4">
                Enlaces
              </h2>

              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">
                Productos
              </h2>

              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="col-span-2 sm:col-auto">
              <h2 className="text-xl font-bold mb-4">
                Contacto
              </h2>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-primary" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Lima, Peru
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaMobileAlt className="text-primary" />
                  <p className="text-gray-700 dark:text-gray-300">
                    +51 916 194 019
                  </p>
                </div>

                <div className="flex gap-4 pt-2">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary transition-colors duration-300" />
                  </a>

                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary transition-colors duration-300" />
                  </a>

                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;