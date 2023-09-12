import React from "react";
import myImage from "../public/images/myimage.png";
import Image from "next/image";
const Zeepay = () => {
  return (
    <>
      <div>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 class="title-font text-3xl text-gray-500 tracking-widest">
                  Payout partner in Australia
                </h1>
                <p class="text-gray-900 title-font font-medium mb-4">
                  TangoPay mobile money partner in lovary coast
                </p>
              </div>
              <img
                src="/images/myimage.png"
                alt="zeepay"
                width="350px"
                height="300px"
                class="lg:w-1/2 w-[100%] lg:h-auto h-64 object-cover object-center rounded h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Zeepay;
