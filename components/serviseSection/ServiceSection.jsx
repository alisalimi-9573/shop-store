import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function ServisceSection() {
  const serviseItems = [
    {
      img: (
        <DeliveryDiningIcon
          sx={{
            fontSize: 100,
          }}
        />
      ),
      text: "FREE AND FAST DELIVERY",
    },
    {
      img: (
        <HeadsetMicIcon
          sx={{
            fontSize: 100,
          }}
        />
      ),
      text: "24/7 CUSTOMER SERVICE",
    },
    {
      img: (
        <VerifiedUserIcon
          sx={{
            fontSize: 100,
          }}
        />
      ),
      text: "MONEY BACK GUARANTEE",
    },
  ];

  return (
    <>
      <div className="service_section">
        {serviseItems.map((items, index) => (
          <>
            <div key={index} className="service_section_items">
              <div className="service_section_items_img">{items.img}</div>
              <p className="service_section_items_text">{items.text}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
