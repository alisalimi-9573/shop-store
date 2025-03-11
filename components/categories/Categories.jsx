import React from "react";
import CategoryItems from "./CategoryItems";

export default function Categories() {
  const categoryImg = [
    { img: "./smartphone.svg", text: "Electronics", link: "" },
    { img: "./men-suit.svg", text: "Men's Clothes", link: "" },
    { img: "./dress (1).svg", text: "Women's Clothes", link: "" },
    { img: "./diamond-ring-jewelry.svg", text: "Jewerly", link: "" },
  ];

  return (
    <>
      <div className="list_categories">
        {categoryImg.map((item, index) => (
          <>
            <CategoryItems item={item} index={index} />
          </>
        ))}
      </div>
    </>
  );
}
