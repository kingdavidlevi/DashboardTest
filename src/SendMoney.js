import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate,useOutletContext } from "react-router-dom";
import Rocket from "./images/—Pngtree—rocket launch in 3d rendering_3710025.jpg"
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
      <div className=" xl:w-270 w-260 mt-8 flex gap-4 ">
        
      
      </div>
      <section className="mt-8"><img src={Rocket} className="xl:w-270 rounded-md h-60 w-260"/></section>
      <button className="text-white mt-8 py-3 xl:w-270 w-260 green text-sm font-medium rounded-md "  >Continue</button>
      <button className="text-black mt-8 py-3 xl:w-270 w-260  fullgreen text-sm font-medium rounded-md " onClick={firstBtn}>I'll do that later</button>
        </section>
        </div>
    )
}

export default SendMoney;