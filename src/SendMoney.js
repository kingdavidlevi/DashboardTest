import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate,useOutletContext } from "react-router-dom";
import Rocket from "./images/—Pngtree—rocket launch in 3d rendering_3710025.jpg"
import Avatar from './images/vecteezy_man-avatar-clipart-illustration_9397835.png'
import download1 from "./images/download (1).png"
import download2 from "./images/download (2).jpeg"
function SendMoney (){
  const navigate = useNavigate()
  const {setFirstDiv, setSecondDiv,setThirdDiv,setLastDiv} = useOutletContext()
  

  const firstBtn = () => {
    setFirstDiv(true)
    setSecondDiv(false)
       setThirdDiv(false)
       setLastDiv(false)
    navigate('/')
    
  }

  const back = () =>{
    navigate(-1)
  }
    return(
      <div>
        <section className="pl-72 z-40 absolute top-16">
      <FaArrowLeft className=" cursor-pointer " onClick={back}/>
      </section>
        <section className="w-full grid place-items-center">
       <div className="xl:w-270 w-260 "><p className="text-lg font-medium text-black">Send to</p></div>
      <div className=" xl:w-270 w-260 mt-8 flex gap-10 ">
        
        <div className="grid place-items-center">
      <section className='h-9  relative w-9 grid place-items-center cursor-pointer rounded-full bg-green-300'>
        <img src={Avatar} className=''/>
    </section>
    <p>Olalekan M</p>
    </div>
    <div className="grid place-items-center">
      <section className='h-9 relative w-9 grid place-items-center cursor-pointer rounded-full bg-green-300'>
        <img src={download1} className='w-9 h-9 rounded-full'/>
    </section>
    <p>Akinye E...</p>
    </div>
    <div className="grid place-items-center">
      <section className='h-9  relative w-9 grid place-items-center cursor-pointer rounded-full '>
        <img src={download2} className='w-9 h-9 rounded-full'/>
    </section>
    <p>Ejinkeo.. P</p>
    </div>
    <div className="grid place-items-center">
      <section className='h-9  relative w-9 grid place-items-center bg-green-300 cursor-pointer rounded-full '>
        <img src={Avatar} className=''/>
    </section>
    <p>John Nicholas</p>
    </div>
     <div className="grid place-items-center">
      <section className='h-9  relative w-9 grid place-items-center bg-gray-300 cursor-pointer rounded-full bg-gray'>
        <p className="text-black font-medium text-base">ED</p>
    </section>
    <p>Edwards</p>
    </div>
      </div>

      <section className="mt-8 xl:w-270  w-260">
        <div className=" xl:w-270 relative my-8 bg-white py-1.5 px-1 rounded-md flex w-260">
          <section className="grid py-1 place-items-center w-75 xl:w-90"><p className="text-base font-medium  text-gray-300">Wallet ID</p></section>
          <section className="py-1 grid place-items-center w-75 xl:w-90 "><p className="text-base font-medium  text-gray-300">Email</p></section>
          <section className="py-1 absolute grid place-items-center bg-green-100  w-75 xl:w-90 "><p className="text-base font-medium  text-gray-300">Email</p></section>
        </div>
       <p className="text-base font-medium ">Enter Transaction Details</p>
      <input placeholder="Enter Amount" className="text-white mt-5 py-3 xl:w-270 w-260 bg-white placeholder:text-gray-300 pl-3 text-sm font-medium rounded-md "  />
      <input placeholder="Enter Receipient's Email" className="text-white mt-4 py-3 xl:w-270 w-260 bg-white placeholder:text-gray-300 pl-3 text-sm font-medium rounded-md "  />
      </section>
      <button className="text-white mt-8 py-3 xl:w-270 w-260 green text-sm font-medium rounded-md "  >Continue</button>
 
        </section>
        </div>
    )
}

export default SendMoney;