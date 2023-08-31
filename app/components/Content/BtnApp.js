"use client";
import { useState } from "react";
import BtnSupportVTB from "./BtnSupportVTB";
import BtnAndroid from "./BtnAndroid";
import BtnISO from "./BtnISO";

function BtnApp() {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className="flex items-center justify-center ">
      <div className="button-container">
        <BtnAndroid activeButton={activeButton} setActiveButton={setActiveButton}
        />
        <BtnISO activeButton={activeButton} setActiveButton={setActiveButton} />
        <div
          className={`border-highlight  rounded-[8px] ${
            activeButton === 2 ? "right" : "left"
          }`}
        />
      </div>
      <BtnSupportVTB />

      
    </div>
  );
}
export default BtnApp;
