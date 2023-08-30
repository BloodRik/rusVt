import React from 'react'
import Logo from './Logo'
import NavOne from './NavOne'
import ButtonVTB from './ButtonVTB'
import FonColorDarkLight from './FonColorDarkLight'
import NavTwo from './NavTwo'

export default function Header() {
  return (
    <>
    <div className='flex  w-[1519px] h-[101px]'>
      <div className="p-7 ml-6">
      <Logo/>
      </div>
      
      <div className="flex space-x-[600px] p-4">
      <NavOne/>
      <div className=" flex space-x-3 m-[-8px]">
      <ButtonVTB/>
      </div>
      </div>
      <FonColorDarkLight/>
      <div className="border-b-[1px] absolute w-[100%]  left-[126px] m-12 text-lineVtb ">
        <span className='text-[#4a6ff3] absolute w-[87px] left-[1px] border-b-[3px] mt-[-1px]  rounded '></span>
      </div>
      </div>
        <div className="absolute left-[176px] top-[60px]">
        <NavTwo/>
      </div>
      <div className="border-b-[1px] absolute w-[100%]   text-lineVtb "></div>
      </>
  )
}
