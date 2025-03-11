import React from "react";

export default function HeaderNameBox({ name, text }) {
  return (
    <>
      <div className="header_name_box">
        <div className="header_name">{name}</div>
        <h1 className="header_text">{text}</h1>
      </div>
    </>
  );
}
