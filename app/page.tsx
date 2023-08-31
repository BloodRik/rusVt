import Image from "next/image";
import './globals.css'
import BtnApp from "./components/Content/BtnApp";
import { useState } from "react";


export default function Home() {

  return (
    <main className="min-h-screen p-24 bg-[#f3f7fa]">
      <div className="m-[-36px] ml-[76px]">
        <p className="text-[12.5px] text-[#2e4598] cursor-pointer hover:text-btnVtb ">/&nbsp; Онлайн-Сервисы &nbsp;/&nbsp;  
        <span className="text-[13px] 
        text-[rgba(10,40,150,0.4)]"> Мобильное приложение ВТБ Онлайн</span></p>

<div className=" ">
        <h1 className="text-[50px] mt-[50px] ml-[-6.5px] tracking-[-3px] text-[#2F3441]">Приложение ВТБ Онлайн</h1>
        <p className="text-[17.3px] ml-[-6.5px]">Финансовая суперсила твоего смартфона</p>
      
      <div className="">
<BtnApp/>
     </div>
      
      </div>
      </div>
      
    </main>
  );
}
