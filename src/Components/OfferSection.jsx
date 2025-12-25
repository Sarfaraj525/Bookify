import React from "react";
import { FaShippingFast, FaTag } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const offers = [
  {
    title: "Free Shipping",
    subtitle: "Order over $100",
    icon: FaShippingFast,
  },
  {
    title: "Secure Payment",
    subtitle: "100% secure payment",
    icon: RiSecurePaymentLine,
  },
  {
    title: "Best Prices",
    subtitle: "Guaranteed price",
    icon: FaTag,
  },
];

const OfferSection = () => {
  return (
    <section className="bg-[#eeebe4] dark:bg-gray-900 py-8">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
        {offers.map(({ title, subtitle, icon: Icon }) => (
          <div
            key={title}
            className="group flex items-center gap-4 rounded-lg bg-white dark:bg-gray-800 p-5 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <div className="flex items-center justify-center rounded-full bg-[#eeebe4] dark:bg-gray-700 p-3 text-3xl text-[#374956] transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
              <Icon />
            </div>

            <div>
              <p className="text-lg font-semibold uppercase text-gray-900 dark:text-white">
                {title}
              </p>
              <p className="capitalize text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
