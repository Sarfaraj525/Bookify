import React from "react";

const BookReviews = () => {
  return (
    <div className="px-8 lg:px-24 container mx-auto lg:my-6 lg:mb-[60px] md:mb-[150px]">
      <h2 className="md:text-4xl text-2xl font-bold text-center md:my-8 my-3 text-indigo-700">
        Famous Book Review
      </h2>

      <div className="grid grid-cols-12 lg:gap-4 gap-2 lg:h-[600px] p-6">

        {/* CARD 1 */}
        <div
          className="relative flex flex-col justify-center items-center gap-2 col-span-12 md:col-span-4 lg:col-span-3 row-span-2 md:row-span-4 rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co.com/0nVjsBg/grid1.png')" }}
        >
          <div className="absolute inset-0 bg-white/80 rounded-2xl"></div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <img
              className="w-[70px] md:w-[90px] rounded-full border-2 border-indigo-200"
              src="https://i.ibb.co.com/Phh62Pn/unnamed.jpg"
              alt=""
            />

            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">Moby-Dick</h2>
              <p className="text-sm text-gray-600">Ajhar Ahmed</p>
              <p className="text-sm text-indigo-600 cursor-pointer">more</p>
            </div>

            <StarRating />
          </div>
        </div>

        {/* CARD 2 */}
        <ReviewCard
          bg="https://i.ibb.co.com/zHkPZyH/grid2.png"
          col="col-span-12 md:col-span-8 lg:col-span-9"
          name="Little Women"
          author="Asfar Khan"
          img="https://i.ibb.co.com/0Jy4KyL/afsar.jpg"
        />

        {/* CARD 3 */}
        <ReviewCard
          bg="https://i.ibb.co.com/5cnVGn2/grid3.png"
          col="col-span-12 md:col-span-8 lg:col-span-6"
          name="Anna Karenina"
          author="Shumon Patwari"
          img="https://i.ibb.co.com/3vFK1ny/Screenshot-2024-10-04-021540.png"
        />

        {/* CARD 4 */}
        <ReviewCard
          bg="https://i.ibb.co.com/S3L166t/grid4.png"
          col="col-span-12 md:col-span-6 lg:col-span-3"
          name="Moby-Dick"
          author="MD Emon"
          img="https://i.ibb.co.com/WxLW580/Ellipse-3.png"
        />

        {/* CARD 5 */}
        <ReviewCard
          bg="https://i.ibb.co.com/FK5V7GL/grid5.png"
          col="col-span-12 md:col-span-6 lg:col-span-6"
          name="Moby-Dick"
          author="Ajhar Ahmed"
          img="https://i.ibb.co.com/WxLW580/Ellipse-3.png"
        />

        {/* CARD 6 */}
        <ReviewCard
          bg="https://i.ibb.co.com/KWx0wcw/grid6.png"
          col="col-span-12 lg:col-span-6"
          name="Moby-Dick"
          author="Ajhar Ahmed"
          img="https://i.ibb.co.com/WxLW580/Ellipse-3.png"
        />
      </div>
    </div>
  );
};

export default BookReviews;

/* ---------- Reusable Components ---------- */

const ReviewCard = ({ bg, col, name, author, img }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row justify-center md:justify-between items-center px-10 rounded-2xl bg-cover bg-center ${col}`}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="absolute inset-0 bg-white/80 rounded-2xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
        <img
          className="w-[70px] md:w-[90px] rounded-full border-2 border-indigo-200"
          src={img}
          alt=""
        />

        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{author}</p>
          <p className="text-sm text-indigo-600 cursor-pointer">more</p>
        </div>
      </div>

      <div className="relative z-10 mt-2 md:mt-0">
        <StarRating />
      </div>
    </div>
  );
};

const StarRating = () => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
      <svg
        className="w-4 h-4 text-gray-300"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
};
