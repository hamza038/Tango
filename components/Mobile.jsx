import React from "react";
const Mobile = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5  justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            src="./images/LOGO-01.png"
            alt="hero"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
              Mobile Money
            </h1>
            <p className="mb-8 leading-relaxed">
              Send Money to lvorycoastvia mobile money transfers and enjoy a
              quick and convenint way to tansfer funds .our mobile transfer
              service provide a seamless experience,allowing you to send money
              to your beneficiary Mobile Moneywit just a few taps on your phone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
