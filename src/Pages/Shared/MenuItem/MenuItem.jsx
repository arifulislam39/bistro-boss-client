import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[104px]" src={image} alt="" />
      <div>
        <h2 className="uppercase">{name}-----------------</h2>
        <p> {recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
