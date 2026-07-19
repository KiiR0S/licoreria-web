import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import imagen from "../../assets/images/Image1.webp";

import "swiper/css";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: imagen,
    subtitle: "Bebida",
    title: "Cerveza",
    title2: "Corona",
    description: "lorem omreaomfdoasmofadmosfmosfmoasdfoas",
  },
  {
    id: 2,
    img: imagen,
    subtitle: "Bebida",
    title: "Cerveza",
    title2: "Corona",
    description: "lorem omreaomfdoasmofadmosfmosfmoasdfoas",
  },
  {
    id: 3,
    img: imagen,
    subtitle: "Bebida",
    title: "Cerveza",
    title2: "Corona",
    description: "lorem omreaomfdoasmofadmosfmosfmoasdfoas",
  },
  {
    id: 4,
    img: imagen,
    subtitle: "Bebida",
    title: "Cerveza",
    title2: "Corona",
    description: "lorem omreaomfdoasmofadmosfmosfmoasdfoas",
  },
];

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero section */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            speed={800}
            loop={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
          >
            {HeroData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* seccion texto */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-10 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:oder-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
                    <div>
                      <Button text="Comprar Ahora"
                      bgColor="bg-red-500"
                      textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* seccion img */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[300px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0 4)]relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
