import { useState } from "react";
 
import { FaEye,FaEyeSlash,FaCopy,FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function WalletHeader(){
    const [main, setMain] = useState("378,032")
    const [copy, setCopy] = useState("XDOB3...9452")
    const [mainview,setMainview] = useState(false)
    const [savingsview,setSavingsview] = useState(false)
    const [savings, setSavings] = useState("236,012")
    const [copied, setCopied] = useState(false);
    const [copied1, setCopied1] = useState(false);
    const navigate = useNavigate()

 //toggle password function
    const toggleSavings = () => {
        setSavingsview(prevstate => !prevstate)
    }
    //toggle password function
    const togglemain = () => {
        setMainview(prevstate => !prevstate)
    }
//copy function
    const handleCopy = () => {
        navigator.clipboard.writeText(copy)
        .then(() => {
            setCopied(true); // Show "Copied" text
            setTimeout(() => setCopied(false), 3000); // Hide it after 2 seconds
          })
          .catch(err => console.error('Failed to copy text: ', err));
      }
    const handleCopy1 = () => {
        navigator.clipboard.writeText(copy)
        .then(() => {
            setCopied1(true); // Show "Copied" text
            setTimeout(() => setCopied1(false), 3000); // Hide it after 2 seconds
          })
          .catch(err => console.error('Failed to copy text: ', err));
      }

     
    return(
        <section >
            <h1 className="text-black text-lg font-medium">Overview</h1>
        <div className="w-95%  mt-5 flex justify-between "  >
            
 <section className="rounded-md pt-4 lg:w-72  xl:w-80  pl-10 pr-8 green"  >
    <div className="flex justify-between">
        <p className="text-white text-base font-medium">Main Wallet</p>
        <div>
        {!mainview ? (   <FaEyeSlash className="text-white mt-1 cursor-pointer" onClick={togglemain}/>):<FaEye className="text-white mt-1 cursor-pointer" onClick={togglemain}/> }
        </div>
    </div>
    <div className="mt-5 relative   flex">
   <p className=" flex text-4xl font-medium text-white"> <span>N</span> <input disabled={true}  type={`${mainview ? "password" : "text"}`} className="green w-32 outline-none mb-1 text-white text-4xl border-none" value={main}/></p><span className="text-green-500 font-medium absolute right-4 xl:right-12 mt-1.5 text-3xl">.00</span>
    </div>
    <div className="mt-5 relative flex gap-1 text-white">
    <input disabled={true} type="text" className="border-none w-22 text-sm text-white outline-none green " value={copy}/>
    <FaCopy  className="cursor-pointer" onClick={handleCopy1}/>
    {copied1 && <p className="absolute font-medium text-xs xl:right-24 right-16 bottom-3 text-white">Copied!</p>}
    </div>
 </section>
 <section className="rounded-md pt-4 lg:w-72 w-60 xl:w-80 pl-10 pb-4 pr-8 bg-orange-600">
    <div className="flex justify-between">
        <p className="text-white text-base font-medium" >Savings Wallet</p>
        <div>
         {!savingsview ? (   <FaEyeSlash className="text-white mt-1 cursor-pointer" onClick={toggleSavings}/>):<FaEye className="text-white mt-1 cursor-pointer" onClick={toggleSavings}/> }
        </div>
     
    </div>
    <div className="mt-5 flex relative">
   <p className="flex text-4xl font-medium text-white "> <span>N</span> <input disabled={true} type={`${savingsview ? "password" : "text"}`} className="border-none text-4xl text-white outline-none bg-orange-600 w-32 " value={savings}/></p><span className="font-medium absolute text-white right-4 xl:right-12 mt-1.5 text-3xl">.00</span>
    </div>
    <div className="mt-5 relative flex gap-1 text-white">
    <input disabled={true} type="text" className="border-none w-22 text-sm  text-white outline-none bg-orange-600 " value={copy}/>
    <FaCopy className="cursor-pointer" onClick={handleCopy}/>
    {copied && <p className="absolute font-medium text-xs right-16 xl:right-24 bottom-3 text-white">Copied!</p>}
    </div>
 </section>
 <section className="rounded-md   grid place-items-center lg:w-72 w-70 xl:w-80 pl-10 pr-8 cursor-pointer bg-gray-200">
    <div className=" flex gap-3 items-center  justify-center">
       <section><FaPlus className="text-gray-400"/></section>
       <p className="text-base font-medium text-gray-400">Add Wallet</p>  
    </div>
 </section>
 
        </div>
         
        </section>
    )
}
export default WalletHeader;