import React from "react";
import DynamicHeaderContent from "./DynamicHeaderContent";
import HeaderNameBox from "./HeaderNameBox";
import Button from "../button/Button";

export default function SectionHeader({ name, text, btnText }) {
  return (
    <div>
      <DynamicHeaderContent>
        <HeaderNameBox name={name} text={text} />
        <div>{null}</div>
        {btnText && (
          <div>
            <Button btnText={btnText} position="btn_position" />
          </div>
        )}
      </DynamicHeaderContent>
    </div>
  );
}
