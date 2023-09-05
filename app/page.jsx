import Image from "next/image";
import './globals.css'
import BtnApp from "./components/Content/BtnApp";
import ContentFooter from "./components/Footer/ContentFooter";
import ContentFooterTwo from "./components/Footer/ContentFooterTwo";
import ContentFooterThree from "./components/Footer/ContentFooterThree";
import Link from "next/link";

export default function Home() {

  return (
    <>
    <main className="min-h-screen md:ml-[-60px] p-24 lg:w-auto  h-[1000px] bg-[#f3f7fa]">
      <div className="mt-[60px] ">
        <p className="md:mt-[-60px] text-[12.5px] text-[#2e4598] cursor-pointer 
        hover:text-btnVtb ">
          <Link href='https://www.vtb.ru/personal/online-servisy/'>
          /&nbsp; Онлайн-Сервисы &nbsp;/&nbsp;  
          </Link>
        <span className="text-[13px] md:hidden
        text-[rgba(10,40,150,0.4)]"> Мобильное приложение ВТБ Онлайн</span></p>

<div className="md:min-w-full">
        <h1 className="lg:text-[50px] md:mt-[34px]  md:text-[33px] sm:text-[32px]  mt-[50px] ml-[-6.5px] lg:tracking-[-3px] text-[#2F3441]">Приложение ВТБ Онлайн</h1>
        <p className="text-[17.3px] ml-[-6.5px] md:text-[14px] sm:text-[14px]">Финансовая суперсила твоего смартфона</p>
      <div className="">
<BtnApp/>
     </div>
      </div>
      </div>
    </main>
      <footer className="bg-white">
        <ContentFooter/>
        <ContentFooterTwo/>
        <div className="border-b-[1px] w-[1245px] ml-[180px] text-lineVtb "></div>
        <ContentFooterThree/>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </footer>
      </>
  );
}
