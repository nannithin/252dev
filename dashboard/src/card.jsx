import React from "react";
import botlogo from './assets/code.png';

const Card = ({name})=>{
    return(
        <div className="w-[225px] mx-5 text my-5 shadow-md p-4 rounded-md">
           <img className="md:w-12 w-10" src={botlogo} alt="" /> 
           <div>
            <h1 className="text-[#2f1793] font-bold text-xl my-3">{name}</h1>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim dolor quibusdam earum ea.</p>
            <a className="bg-[#2f1793] text-white rounded-md py-1 px-4" href="">Invite</a>
           </div>
        </div>
    );
}

export default Card;
