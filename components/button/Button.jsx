import React from "react";

export default function Button({ btnText, type, position, width, onClick }) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`btn ${position} ${width}`}
      >
        {btnText}
      </button>
    </>
  );
}
