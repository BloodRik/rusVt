import React from 'react'
import Logo from './Logo'
import NavOne from './NavOne'
import ButtonVTB from './ButtonVTB'
import FonColorDarkLight from './FonColorDarkLight'
import NavTwo from './NavTwo'

export default function Header() {
  return (
    <section className='w-full  bg-white fixed z-10'>
    <div className='flex md:w-[848px] md:h-[60px] sm:w-[848px] sm:h-[60px] w-[1535px] h-[101px] ml-[-11px]'>
      <div className="p-7 md:p-4  sm:p-4 ml-6">
      <Logo/>
      </div>
      
      <div className="flex space-x-[60px] p-6">
      <NavOne/>
      <div className=" lg:flex space-x-4 m-[-15px] absolute right-[34px]">
      <ButtonVTB/>
      <FonColorDarkLight/>
      </div>
      </div>
      <div className="border-b-[1px] lg:flex md:hidden sm:hidden absolute w-[1345px]  left-[126px] m-12 text-lineVtb ">
        <span className='text-[#4a6ff3] lg:flex absolute w-[97px] md:hidden left-[-11px] border-b-[3px] mt-[-1px]  rounded '></span>
      </div>
      </div>
        <div className=" left-[176px] top-[60px]">
        <NavTwo/>
      </div>
      <div className="border-b-[1px] absolute w-[100%] text-lineVtb "></div>
      </section>
  )
}
