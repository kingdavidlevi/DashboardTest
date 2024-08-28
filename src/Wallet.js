import { FaWallet,FaGreaterThan } from "react-icons/fa6"
import Header from "./Header"
import WalletHeader from "./WalletHeader"
function Wallet (){
    return(
        <>
        <Header/>
        <div className="pl-72  w-full mt-36">
            <WalletHeader/>
        <section className=" mb-4 w-95% mt-10 ">
            <div className="bg-white px-5 cursor-pointer rounded-md h-14 items-center flex justify-between">
                <section className="flex items-center gap-3">
                <FaWallet/>
                <p className="text-base font-medium">Create New Wallet</p>  
                </section>
                <section><FaGreaterThan/></section>
            </div>
            <div className="bg-white px-5 cursor-pointer mt-2 rounded-md h-14 items-center flex justify-between">
                <section className="flex items-center gap-3">
                <FaWallet/>
                <p className="text-base font-medium">Fund Wallet</p>  
                </section>
                <section><FaGreaterThan/></section>
            </div>
            <div className="bg-white px-5 cursor-pointer mt-2 rounded-md h-14 items-center flex justify-between">
                <section className="flex items-center gap-3">
                <FaWallet/>
                <p className="text-base font-medium">Send Money</p>  
                </section>
                <section><FaGreaterThan/></section>
            </div>
        </section>
        </div>
        </>
    )
}

export default Wallet