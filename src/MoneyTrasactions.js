import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import Trasactions from "./Transactions";
function MoneyTrasactions(){
    const [main, setMain] = useState("378,032")
    return(
        <>
        <section className="bg-white w-95% over mt-10 flex justify-between">
 <section className="rounded-md pt-4  lg:w-72 h-44 grid place-content-center  xl:w-80   ">
  
    <section className="grid place-content-center rightb lg:w-72  xl:w-80 ">
        <div className="flex gap-2 relative">
    <p className="font-medium text-base">Money In</p>
    <span><FaCaretDown className="greentext mt-1 abolute"/></span>
    </div>
    <div className="mt-3    relative flex">
   <p className=" flex text-4xl font-medium greentext"> <span>N</span> <input disabled={true}  type="text" className="greentext w-32 outline-none bg-white  text-4xl border-none" value={main}/></p><span className="greentext font-medium   mt-1.5 text-3xl">.00</span>
    </div>
    </section>
    
 

 </section>


<section className="rounded-md pt-4 lg:w-72 h-44 grid place-content-center  xl:w-80   ">
  
  <section className=" grid place-content-center rightb lg:w-72  xl:w-80">
      <div className="flex gap-2  relative">
      <p className="font-medium text-base">Money Out</p>
  <span><FaCaretDown className="text-orange-600 mt-1 abolute"/></span>
  </div>
  <div className="mt-3 relative flex">
 <p className=" flex text-4xl font-medium text-orange-600"> <span>N</span> <input disabled={true}  type="text" className=" w-32 outline-none bg-white  text-4xl border-none" value={main}/></p><span className="text-orange-600 font-medium  mt-1.5 text-3xl">.00</span>
  </div>
  </section>
  
</section>


<section className="rounded-md pt-4 lg:w-72 h-44 grid place-content-center  xl:w-80   ">
  
  <section>
      <div className="">
  <p className="font-medium text-black text-base">Total transactions</p>
 
  </div>
  <div className="mt-3   gap-4 relative flex">
 <p className=" flex text-4xl font-medium text-black"> <span>N</span> <input disabled={true}  type="text" className="text-black w-32 outline-none bg-white  text-4xl border-none" value={main}/></p><span className="text-black font-medium absolute -right-10 mt-1.5 text-3xl">.00</span>
  </div>
  </section>
  


</section>
        </section>
        <Trasactions/>

        </>
    )
}

export default MoneyTrasactions;