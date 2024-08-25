import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
function Homepage(){
    const [main, setMain] = useState("378,032")
    const [mainview,setMainview] = useState(false)
    const [savingsview,setSavingsview] = useState(false)
    const [savings, setSavings] = useState("236,012")

    const toggleSavings = () => {
        setSavingsview(prevstate => !prevstate)
    }
    const togglemain = () => {
        setMainview(prevstate => !prevstate)
    }
    return(
        <section className="pl-72  w-full mt-32">
            <h1 className="text-black">Overview</h1>
        <div className="w-95%  mt-5 flex justify-between "  >
            
 <section className="rounded-md pt-4 w-80 pl-10 pr-8 green">
    <div className="flex justify-between">
        <p className="text-white text-x">Main Wallet</p>
        <div>
        {!mainview ? (   <FaEyeSlash className="text-white mt-1 cursor-pointer" onClick={togglemain}/>):<FaEye className="text-white mt-1 cursor-pointer" onClick={togglemain}/> }
        </div>
    </div>
    <div>
   <p className="flex"> <span>N</span> <input disabled={true}  type={`${mainview ? "password" : "text"}`} className="green outline-none  border-none" value={main}/></p>
    </div>
 </section>
 <section className="rounded-md pt-4 w-80 pl-10 pr-8 bg-orange-600">
    <div className="flex justify-between">
        <p className="text-white text-x" >Savings Wallet</p>
        <div>
         {!savingsview ? (   <FaEyeSlash className="text-white mt-1 cursor-pointer" onClick={toggleSavings}/>):<FaEye className="text-white mt-1 cursor-pointer" onClick={toggleSavings}/> }
        </div>
     
    </div>
    <div>
   <p className="flex"> <span>N</span> <input disabled={true} type={`${savingsview ? "password" : "text"}`} className="border-none text-lg text-white outline-none bg-orange-600 " value={savings}/></p>
    </div>
 </section>
 <section className="rounded-md pt-4 w-80 pl-10 pr-8 green">
    <div className="flex justify-between">
        <p className="text-white text-x">Main Wallet</p>
        <div>
            <FaEye className="text-white"/>
        </div>
    </div>
 </section>
 
        </div>
        </section>
    )
}
export default Homepage;