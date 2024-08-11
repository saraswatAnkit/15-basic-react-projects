import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="flex flex-wrap mt-16 gap-7 justify-center max-sm:mt-8">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article
            key={id}
            className="bg-gray-500 rounded-md flex flex-col w-[24rem]"
          >
            <img
              src={img}
              alt={title}
              className="h-[15rem] w-[24rem] object-cover rounded-md"
            />
            <div className="flex flex-col justify-center mx-2">
              <div className="flex justify-between mx-2 my-4 items-center">
                <h4 className="capitalize font-semibold text-[1.4rem] text-white">
                  {title}
                </h4>
                <h4 className="bg-blue-300 py-1 px-2 rounded-md text-white font-semibold">
                  Rs {price}.00
                </h4>
              </div>
              <p className="text-gray-100 text-[1rem] my-2 text-center leading-8">
                {desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
