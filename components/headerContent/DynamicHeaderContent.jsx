import React from "react";

export default function DynamicHeaderContent({ children }) {
  return (
    <>
      <div className="header_container">
        {children.map((child, index) => (
          <div key={index} className="header_items">
            {child || null}
          </div>
        ))}
      </div>
    </>
  );
}
