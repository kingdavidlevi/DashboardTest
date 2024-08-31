import { FaPaperPlane } from "react-icons/fa";
import { FaArrowLeft, FaCopy, FaWallet } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function FundingCard (){
  const navigate = useNavigate()
  const back = () => {
   navigate(-1)
  }

  const Next =  () => {
    navigate("/ConfirmTransaction")
  }
    
    return(
      <div className="mb-16">
        <section className="pl-72 z-40 absolute top-16">
      <FaArrowLeft className=" cursor-pointer " onClick={back}/>
      </section>
        <section className="w-full grid place-items-center">
       <div className="xl:w-270 w-260 "><p className="text-lg font-medium text-black">Select Funding Method</p></div>
      <div className=" xl:w-270 w-260 mt-8 flex justify-between ">
        <section className="flex green px-8 rounded-md py-3 items-center gap-2">
        <div className="w-5 grid place-items-center h-5 rounded-full  "><FaWallet className="greenfadetext"/></div>
        <div><p className="text-white text-base font-medium">Fund by Card</p></div>
        </section>
        <section className="flex bg-white px-8 rounded-md py-3 items-center gap-2">
        <div className="w-5 grid place-items-center h-5 rounded-full  "><FaCopy className="greentext text-lg"/></div>
        <div><p className="text-black text-base font-medium">Copy Wallet ID</p></div>
        </section>
        <section className="flex bg-white px-8 rounded-md py-3 items-center gap-2">
        <div className="w-5 grid place-items-center h-5 rounded-full  "><FaPaperPlane className="text-gray-300"/></div>
        <div><p className="text-gray-300 text-base font-medium">Request Funds</p></div>
        </section>
        
      </div>
      <div className="xl:w-270 mt-20 w-260">
      <p className=" text-lg font-medium text-black">Enter amount you would like to fund your wallet with.</p>
      </div>
      <section className=" mt-6"><input className="bg-white rounded-md placeholder:text-gray-300 xl:w-270 w-260 pl-3 py-3 outline-none border-none" placeholder="Amount"/></section>
      <section className="mt-6 xl:w-270 w-260">
      <p className=" text-lg font-medium text-black">Enter Card Details</p>
      <section className=" mt-4"><input className="bg-white rounded-md placeholder:text-gray-300 xl:w-270 w-260 pl-3 py-3 outline-none border-none" placeholder="Card Number"/></section>
      <section className=" mt-4 flex justify-between">
      <input className="bg-white rounded-md placeholder:text-gray-300 xl:w-80 w-75 pl-3 py-3 outline-none border-none" placeholder="Expiry Date"/>
      <input className="bg-white rounded-md placeholder:text-gray-300 xl:w-80 w-75 pl-3 py-3 outline-none border-none" placeholder="cvv"/>
      
      
      </section>
      <section className=" mt-6"><input className="bg-white rounded-md placeholder:text-gray-300 xl:w-270 w-260 pl-3 py-3 outline-none border-none" placeholder="Card Holder's Name"/></section>
      <section className="xl:w-270 mt-3 items-center  w-260 flex gap-2 "> 
         <label className="custom-checkbox mt-3 ">
        <input type="checkbox" />
        <span></span>
        
    </label>
      <p className="text-base mt-3 font-normal">Save Card</p>
      
      </section>
      </section>
      <button className="text-white mt-10 py-3 xl:w-270 w-260 green text-base font-medium rounded-md " onClick={Next}>Fund with N20,000</button>
        </section>
        </div>
    )
}

export default FundingCard;