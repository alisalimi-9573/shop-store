import React from "react";

export default function CategoryItems({ item, index }) {
  return (
    <>
      <div key={index} className="list_categories_items">
        <div className="list_categories_items_img">
          <img
            className="list_categories_items_img_svg"
            src={item.img}
            alt="cell-phone"
          />
        </div>
        <p>{item.text}</p>
      </div>
    </>
  );
}
