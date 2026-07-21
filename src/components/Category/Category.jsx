import React from "react";
import imagen from "../../assets/images/Image1.webp";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* primera col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">🔥 NUEVO</p>
                <p className="text-2xl font-semibold mb-[2px]">cerveza</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  PILSEN
                </p>
                <Button
                  text="Comprar"
                  bgColor={"bg-red-500"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={imagen} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* segunda col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brand-yellow to-brand-yellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">🔥 NUEVO</p>
                <p className="text-2xl font-semibold mb-[2px]">cerveza</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  PILSEN
                </p>
                <Button
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-brand-yellow"}
                />
              </div>
            </div>
            <img
              src={imagen}
              alt=""
              className="w-[320px] absolute -right-4 lg:top-[40px]"
            />
          </div>
          {/* tercera col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">🔥 NUEVO</p>
                <p className="text-2xl font-semibold mb-[2px]">cerveza</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  PILSEN
                </p>
                <Button
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={imagen}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
