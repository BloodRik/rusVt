"use client"
import Link from "next/link";
import { useState } from "react";
import CardInfoProc from './Modals/CardInfoProc'

export default function NavTwo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav>
        <ul className="flex flex-wrap md:hidden sm:hidden ml-[-13px]">
          <li
            className="transition hover:transition-all text-[15px] hover:text-btnVtb cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Кредиты
          </li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">
            Карты
          </li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Ипотека</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Автокредиты</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Вклады и счета</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Инвестиции</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Онлайн-сервисы</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Платежи и переводы</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Другие услуги</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Привилегия</li>
          <li className="transition hover:transition-all ml-2 md:ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">
            <Link href='https://private.vtb.ru/'>
              Private Banking
            </Link>
          </li>
        </ul>
      </nav>

      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-50 bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Кредиты</h3>
              <button
                className="text-black opacity-50 hover:opacity-100"
                onClick={() => setShowModal(false)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.293 5.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.293z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <ul className="text-sm text-gray-700">
                <li>КРЕДИТНЫЕ ПРОДУКТЫ</li>
                <li>Кредит наличными</li>
                <li>Экспресс-кредит</li>
                <li>Рефинансирование</li>
                <li>Кредит под залог недвижимости</li>
              </ul>
              <ul className="text-sm text-gray-700 mt-4">
                <li>ВАМ МОЖЕТ БЫТЬ ИНТЕРЕСНО</li>
                <li>Информация для заемщиков</li>
                <li>Калькулятор кредита</li>
              </ul>
              <CardInfoProc />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-800 mr-4"
                onClick={() => setShowModal(false)}
              >
                Закрыть
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => setShowModal(false)}
              >
                Сохранить изменения
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
