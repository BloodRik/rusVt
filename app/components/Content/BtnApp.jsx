'use client'
import { useState } from "react";
import TitleInfoAndroid from "./TitleInfoAndroid";
import TitleInfoISO from "./TitleInfoISO";
import TitleInfoRuSdesk from "./TitleInfoRuSdesk";

function BtnApp() {
  const [activeButton, setActiveButton] = useState(null);
  const [showComponent, setShowComponent] = useState(true);
  const [showComponentSupport, setShowComponentSupport] = useState(false);
  const [showComponentANDROED, setShowComponentANDROED] = useState(false);

  const handleAddComponent = () => {
    setActiveButton(1);
    setShowComponent(true);
    setShowComponentANDROED(false);
    setShowComponentSupport(false);
  };

  const handleAddComponentTWO = () => {
    setActiveButton(2);
    setShowComponentANDROED(true);
    setShowComponent(false);
    setShowComponentSupport(false);
  };

  const handleAddComponentTre = () => {
    setActiveButton(3);
    setShowComponentSupport(true);
    setShowComponent(false);
    setShowComponentANDROED(false);
  };

  return (
    <div className="mt-[-55px]">
      <div className="flex button-container flex-row">
        <button
          className={`md:w-[104px] md:h-[46px] md:mr-[10px] border-[1px] border-[#d4d7df] text-[#606981] p-3 hover:text-btnVtb rounded-[8px] w-[120px] h-[59px] transition-all duration-300 
          active:bg-violet-700 focus:outline-none focus:ring focus:ring-border_blue focus:bg-white
          ${
            activeButton === 1 ? "border-blue-500 bg-[#ffffff] text-[#30498f]" : "border-transparent"
          }`}
          onClick={handleAddComponent}
        >
          Android
        </button>
        <button
          className={`md:w-[70px] md:h-[43px] md:p-1 md:mt-[2px] border-[1px] border-[#d4d7df] text-[#606981] p-3
           hover:text-btnVtb rounded-[8px] w-[120px] h-[59px] transition-all duration-300
           active:bg-violet-700 focus:outline-none focus:ring focus:ring-border_blue focus:bg-white 
           ${
            activeButton === 2 ? "border-blue-500 bg-[#ffffff] text-[#30498f]" : "border-transparent "
          }`}
          onClick={handleAddComponentTWO}
        >
          IOS
        </button>
      <button
        onClick={handleAddComponentTre}
        className={`border md:mt-[2px] md:ml-[10px] 
        md:w-[140px] md:h-[43px] mt-4 
        lg:mt-0 text-[#606981] border-[#d4d7df]
         hover:text-btnVtb rounded-[8px] w-[120px] 
         h-[59px] active:bg-violet-700 focus:outline-none focus:ring focus:ring-border_blue focus:bg-white`}
      >
        Поддержка ВТБ
      </button>
      </div>

      <div className="mt-4 lg:mt-0">
        {showComponent && <TitleInfoAndroid />}
        {showComponentANDROED && <TitleInfoISO />}
        {showComponentSupport && <TitleInfoRuSdesk />}
      </div>
    </div>
  );
}

export default BtnApp;
