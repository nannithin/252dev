import React, { useState } from "react";
import logo from './assets/square-terminal.svg';
import menu from './assets/menu-burger.png';
import wrong from './assets/rectangle-xmark.png';
import {FiSun,FiMenu} from 'react-icons/Fi';
import {AiOutlineClose,AiFillCode} from 'react-icons/Ai';

const Nav = () =>{
    const [open,setOpen] = useState(false);
    return(
        <div>
            <nav className="bg-[#2f1793] flex justify-between py-5 z-[-100]">
                <h1 className="flex gap-1 font-bold font-poppins text-xl mx-5 text-white">
                    <span className="mt-[3px]"><AiFillCode /></span> 252
                </h1>
                <ul className={`md:flex md:static absolute ${!open ? `top-[-100%]` : `top-[75px]`} md:bg-transparent md:shadow-none shadow-lg md:gap-[4vw] w-full p-4 md:p-0 md:w-fit md:text-white duration-300 z-[1] bg-white`}>
                    <a href=""><li className="pb-3 md:pb-0 hover:text-gray-400 duration-300 cursor-pointer">home</li></a>
                    <a href="#why"><li className="pb-3 md:pb-0 hover:text-gray-400 duration-300 cursor-pointer">Our Bots</li></a>
                    <a href=""><li className=" pb-3 md:pb-0 hover:text-gray-400 duration-300 cursor-pointer">About</li></a>
                    <a href=""><li className="mr-[30px] pb-3 md:pb-0 hover:text-gray-400 duration-300 cursor-pointer">Dev</li></a>
                    
                </ul>
                <div className="flex mx-5 gap-2">
                    <button className="text-2xl text-white">
                        <FiSun />
                    </button>
                <button className="font-semibold capitalize px-4 mx-7 text-white md:text-xl text-[15px] border-[1px] rounded-full hover:bg-white duration-500 hover:text-[#2f1793] hidden sm:block ">JOIN</button>
                <div onClick={()=>setOpen(!open)} className="text-3xl text-white md:hidden cursor-pointer">
                    {!open ? <FiMenu /> : <AiOutlineClose />}
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;