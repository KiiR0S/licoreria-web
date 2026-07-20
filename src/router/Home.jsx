import Hero from "../components/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Services from "../components/Services/Services";
import Products from "../components/Products/Products";
import Banner from "../components/Banner/Banner";
import imagen from "../assets/images/Image1.webp"

const BannerData={
  discount: "40% OFF",
  title: "PILSEN CERVEZA",
  date: "28 de Julio",
  image: imagen,
  title2: "PROMOCIÓN ESPECIAL",
  title3: "Llévate tu bebida favorita al mejor precio",
  title4: "Válido hasta agotar stock",
  bgColor: "#f42c37"
}

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
    </div>
  );
}
