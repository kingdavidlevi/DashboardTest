import { FaArrowLeft, FaCopy, FaWallet } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Rocket from "./images/—Pngtree—rocket launch in 3d rendering_3710025.jpg"



 
function GenerateWalletId(){
    const [hide,sethide] = useState(false)
    const navigate = useNavigate()
    const back = () => {
      navigate('/CreateWalletTag')
    }
    const showhide = () => {
     sethide(prevstate => !prevstate)
    }

    const continuefunction = () =>{
      navigate('/FundWallet')
    }
    return(
        <>
     
      
      {hide ? (

<div>
        <section className="pl-72 z-40 absolute  top-16">
      <FaArrowLeft className=" cursor-pointer " onClick={back}/>
      </section>
      
        <section className="w-full grid place-items-center">
       <div className="xl:w-270 w-260 "><p className="text-lg font-medium text-black">Create New Wallet</p></div>
      <div className=" xl:w-270 w-260 mt-8 flex justify-between ">
        <section className="flex items-center gap-2">
          <div className="w-5 grid place-items-center h-5 rounded-full green"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className="text-black text-lg font-medium">Create Wallet Tag</p></div>
        </section>
        <section className="flex items-center gap-2">
          <div className="w-5 grid place-items-center h-5 rounded-full  green"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className="text-black text-lg font-medium">Generate Wallet ID</p></div>
        </section>
        <section className="flex items-center gap-2">
          <div className="w-5 grid place-items-center h-5 rounded-full  greenfade"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className=" text-gray-300 text-lg font-medium">Fund Wallet</p></div>
        </section>
      </div>
 
      <button className="text-white mt-8 py-3 xl:w-270 w-260 green text-sm font-medium rounded-md "onClick={showhide} >Click to Generate New ID</button>

        </section>
       
 
      </div>
):


 <div>
        <section className="pl-72 z-40 absolute  top-16">
      <FaArrowLeft className=" cursor-pointer " onClick={showhide}/>
      </section>
      
        <section className="w-full grid place-items-center">
       <div className="xl:w-270 w-260 "><p className="text-lg font-medium text-black">Create New Wallet</p></div>
      <div className=" xl:w-270 w-260 mt-8 flex justify-between ">
        <section className="flex items-center gap-2">
          <div className="w-5 grid place-items-center h-5 rounded-full green"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className="text-black text-lg font-medium">Create Wallet Tag</p></div>
        </section>
        <section className="flex items-center gap-2">
          <div className="w-5 grid place-items-center h-5 rounded-full  green"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className="text-black text-lg font-medium">Generate Wallet ID</p></div>
        </section>
        <section className="flex items-center gap-2">
          <div className="w-5 grid place-items-center h-5 rounded-full  greenfade"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className=" text-gray-300 text-lg font-medium">Fund Wallet</p></div>
        </section>
      </div>
      <section className=" xl:w-270  w-260 mt-14">
<div className="flex justify-between">
    <section className="flex justify-center gap-4 items-center bg-gray-300 xl:w-98 w-90 py-3 rounded-md">
        <FaWallet/>
        <p className="text-black text-base font-normal">Successfully Generated Wallet ID</p>
    </section>
    <section className="fullgreen rounded-md justify-center flex gap-4 xl:w-56 w-52 py-2.5 items-center">
        <FaCopy className="greentext"/>
        <p>Copy Wallet ID</p>
    </section>
</div>
      </section>

      <section className="mt-8"><img src={Rocket} className="xl:w-270 rounded-md h-60 w-260"/></section>
      <button className="text-white mt-8 py-3 xl:w-270 w-260 green text-base font-medium rounded-md " onClick={continuefunction}>Continue</button>

        </section>
      

      </div>
}
    

       
        </>
    )
}

export default GenerateWalletId;