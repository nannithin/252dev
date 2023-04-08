import React from "react"

const Card2=({codelogo})=>{
    return(
        <div className="bg-white w-[250px] md:my-0 my-3 p-4 rounded-md  mx-[3vw] hover:shadow-lg">
                        <img className="md:w-12 w-10 mx-auto py-4" src={codelogo} alt="" />
                        <h1 className="text-[#2f1793] text-xl font-semibold text-center">Web development</h1>
                        <p className="pt-3 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque libero nobis dolore repudiandae voluptatibus tempora modi at!</p>
                    </div>
    )
}

export default Card2;