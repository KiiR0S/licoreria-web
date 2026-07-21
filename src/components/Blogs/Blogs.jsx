import React from "react";
import Heading from "../Shared/Heading";
import image from "../../assets/images/Image1.webp";

const BlogData = [
  {
    title: "fasf da s fdasfdsafas",
    subtitle:
      "midsmadmasidmaisdmaisdians oismdiam idmsaoi dmas diamso dmsao dmaso mdaso mdasdasm",
    published: "enero 20 marzo 2026",
    image: image,
    aosDelay: "0",
  },
  {
    title: "sdfas dfas dfsa fsa dfa ",
    subtitle:
      "midsmadmasidmaisdmaisdians oismdiam idmsaoi dmas diamso dmsao dmaso mdaso mdasdasm",
    published: "enero 20 marzo 2026",
    image: image,
    aosDelay: "200",
  },
  {
    title: "asfsda asd fas fsafasdfas ",
    subtitle:
      "midsmadmasidmaisdmaisdians oismdiam idmsaoi dmas diamso dmsao dmaso mdaso mdasdasm",
    published: "enero 20 marzo 2026",
    image: image,
    aosDelay: "300",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header seccion */}
        <Heading title="Nuevos" subtitle={"Explora Nuestro Blogs"} />

        {/* Blog seccion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card*/}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* image seccion */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* contenido seccion */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
