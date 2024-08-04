import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="bg-white flex flex-col rounded-md lg:w-[45vw]">
      <img src={image} alt={name} className="rounded-md w-full h-[15rem] object-cover" />
      <footer>
        <div className="flex justify-between my-4 mx-4 tour-info">
          <h4 className="font-bold text-[1.2rem] max-sm:text-[1rem]">{name}</h4>
          <h4 className="bg-blue-300 rounded-md px-2 py-1 text-blue-700 tour-price">
            ${price}
          </h4>
        </div>
        <p className="max-sm:text-[.8rem] px-2">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className={
              readMore
                ? "text-green-900 bg-green-100 mx-4"
                : "text-blue-400 mx-4"
            }
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="border-red-800 border-2 px-4 py-1 m-2 font-semibold capitalize text-red-600 hover:bg-red-700 hover:text-white ease-in duration-200"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
