import { FaWallet,FaGreaterThan,FaPaperPlane } from "react-icons/fa"
 
import WalletHeader from "./WalletHeader"
import { useNavigate } from "react-router-dom"
function Wallet (){
    const navigate = useNavigate()


    const CreateNewWallet = () =>{
        navigate('/CreateWalletTag')
    }
    const FundingCard = () =>{
        navigate('/FundingCard')
    }

    return(
        <>
         
        <div className="pl-72  w-full ">
            <WalletHeader/>
        <section className=" mb-4 w-95% mt-10 ">
            <div className="bg-white px-5 cursor-pointer rounded-md h-14 items-center flex justify-between" onClick={CreateNewWallet}>
                <section className="flex items-center gap-3" >
                <FaWallet className="greentext"/>
                <p className="text-base font-medium">Create New Wallet</p>  
                </section>
                <section><FaGreaterThan/></section>
            </div>
            <div className="bg-white px-5 cursor-pointer mt-2 rounded-md h-14 items-center flex justify-between" onClick={FundingCard}>
                <section className="flex items-center gap-3">
                <FaWallet className="greentext" />
                <p className="text-base font-medium">Fund Wallet</p>  
                </section>
                <section><FaGreaterThan/></section>
            </div>
            <div className="bg-white px-5 cursor-pointer mt-2 rounded-md h-14 items-center flex justify-between">
                <section className="flex items-center gap-3">
                <FaPaperPlane className="greentext"/>
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