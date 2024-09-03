import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function CreateWalletTag (){
  const navigate = useNavigate()
  const GenerateId = () => {
   navigate('/GenerateWalletId')
  }

  const back = () => {
    navigate('/Wallet')
  }
    return(
      <div>
        <section className="pl-72 z-40 absolute top-16">
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
          <div className="w-5 grid place-items-center h-5 rounded-full  greenfade"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className="text-gray-300 text-lg font-medium">Generate Wallet ID</p></div>
        </section>
        <section className="flex items-center gap-2">
          <div className="w-5 grid place-items-center h-5 rounded-full  greenfade"><p className="text-white text-sm font-medium">1</p></div>
          <div><p className=" text-gray-300 text-lg font-medium">Fund Wallet</p></div>
        </section>
      </div>
      <section className="mt-12"><input className="bg-white rounded-md placeholder:text-gray-300 xl:w-270 w-260 pl-3 py-3 outline-none border-none" placeholder="what is this wallet for?"/></section>
      <button className="text-white mt-8 py-3 xl:w-270 w-260 green text-sm font-medium rounded-md " onClick={GenerateId}>Continue</button>
        </section>
        </div>
    )
}

export default CreateWalletTag;