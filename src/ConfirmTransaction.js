import { FaPaperPlane } from "react-icons/fa";
import { FaArrowLeft, FaCopy, FaWallet } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function ConfirmTransaction (){
  const navigate = useNavigate()
  const back = () => {
   navigate(-1)
  }

 
    return(
      <div className="mb-16">
        <section className="pl-72 z-40 absolute top-16">
      <FaArrowLeft className=" cursor-pointer " onClick={back}/>
      </section>
        <section className="w-full grid place-items-center">
       <div className="xl:w-270 w-260 "><p className="text-lg font-medium text-black">Confirm Transaction</p></div>
       <section className="flex mt-12 xl:w-270 w-260 justify-between">
        <p className="text-base text-gray-400 font-normal">Sub Total</p>
        <p className="text-black font-normal">N20,000.00</p>
       </section>
       <section className="flex mt-2 xl:w-270 w-260 justify-between"> 
        <p className="text-base text-gray-400 font-normal">VAT(15%)</p>
        <p className="text-black font-normal">N300.00</p>
       </section>
       <section className="flex mt-2 xl:w-270 w-260 justify-between">
        <p className="text-base text-gray-400 font-normal">In app charges</p>
        <p className="text-black font-normal">N1000.00</p>
       </section>
       <section className="flex mt-5 xl:w-270 w-260 justify-between">
        <p className="text-base text-gray-400 font-normal">Sub Total</p>
        <p className="text-black font-normal">N21,300.00</p>
       </section>
            <button className="text-white mt-8 py-3 xl:w-270 w-260 green text-base font-medium rounded-md " >Continue</button>
        </section>
        </div>
    )
}

export default ConfirmTransaction;