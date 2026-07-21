import React from "react";
import imagen from "../../assets/images/Image1.webp";
import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* primera col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray/100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">🔥 NUEVO</p>
                <p className="text-2xl font-semibold mb-[2px]">cerveza</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  PILSEN
                </p>
                <Button
                  text="Comprar"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={imagen}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* segunda col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brand-green/90 to-brand-green/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">🔥 NUEVO</p>
                <p className="text-2xl font-semibold mb-[2px]">cerveza</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  PILSEN
                </p>
                <Button
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-brand-green"}
                />
              </div>
            </div>
            <img
              src={imagen}
              alt=""
              className="w-[320px] absolute -right-4"
            />
          </div>
          {/* tercera col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brand-blue to-blue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">🔥 NUEVO</p>
                <p className="text-2xl font-semibold mb-[2px]">cerveza</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  PILSEN
                </p>
                <Button
                  text="Comprar"
                  bgColor={"bg-white"}
                  textColor={"text-brand-blue"}
                />
              </div>
            </div>
            <img src={imagen} alt="" className="w-[200px] absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
