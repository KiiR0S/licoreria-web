import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import imagen from "../../assets/images/Image1.webp";
import Button from "../Shared/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "0",
  },
  {
    id: 2,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "200",
  },
  {
    id: 3,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "400",
  },
  {
    id: 4,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "0",
  },
  {
    id: 2,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "200",
  },
  {
    id: 3,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "400",
  },
  {
    id: 4,
    img: imagen,
    title: "Cerveza Pilsen",
    price: "30",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading
          title="Nuestros Productos"
          subtitle={"Explora Nuestros Productos"}
        />
        {/* Body Section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
        <div className="flex justify-center mt-10" data-aos="fade-up">
          <Link to="/service">
            <button className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full cursor-pointer shadow-lg hover:bg-red-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              Ver todo el catálogo
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
