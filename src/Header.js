import { FaCaretDown } from 'react-icons/fa';
import search from './images/Component 2.png'
import { useNavigate } from 'react-router-dom';
import Avatar from './images/vecteezy_man-avatar-clipart-illustration_9397835.png'

 
function Header({  setSecondDiv,setFirstDiv,setThirdDiv,setLastDiv}){
   const navigate = useNavigate()


    const lastBtn = () => {
        setSecondDiv(false)
        setFirstDiv(false)
        setThirdDiv(false)
        setLastDiv(true)
        navigate('Profile')
     }

    return (
        <section className=" top-0 w-95%  grid z-10 fixed items-center rounded-tl-md  h-28 bg-gray-100">
 <div className="flex items-center justify-end">
    <section className="relative ">
<input placeholder="Search" className="bg-white text-black text-sm pr-1 pl-11 cursor-pointer placeholder:text-sm placeholder:text-gray-300 w-96 outline-none rounded-md  h-11"/>
<img src={search} className="absolute h-5 w-5 left-3 text-sm top-3"/>
    </section>
    <section className='cursor-pointer ml-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25203 14.4239L4.8061 14.1427C2.95144 13.9295 2.42542 11.4844 4.02838 10.5274L4.0933 10.4886C4.966 9.96761 5.50045 9.02609 5.50045 8.00969V7.5C5.50045 5.01472 7.51517 3 10.0005 3C12.4857 3 14.5005 5.01472 14.5005 7.5V8.00969C14.5005 9.02609 15.0349 9.96761 15.9076 10.4886L15.9725 10.5274C17.5755 11.4844 17.0495 13.9295 15.1948 14.1427L12.652 14.435V14.8C12.652 16.2912 11.4432 17.5 9.95203 17.5C8.46086 17.5 7.25203 16.2912 7.25203 14.8V14.4239ZM11.152 14.5H8.75203V14.8C8.75203 15.4627 9.28929 16 9.95203 16C10.6148 16 11.152 15.4627 11.152 14.8V14.5ZM8.00045 13H12.0005L15.0235 12.6525C15.453 12.6032 15.5748 12.0369 15.2036 11.8153L15.1387 11.7766C15.0591 11.7291 14.9815 11.6793 14.9057 11.6273C14.7506 11.521 14.6036 11.4055 14.4651 11.2818C14.4405 11.2598 14.4162 11.2377 14.3922 11.2152C13.5144 10.395 13.0005 9.23833 13.0005 8.00969V7.5C13.0005 5.84315 11.6573 4.5 10.0005 4.5C8.3436 4.5 7.00045 5.84315 7.00045 7.5V8.00969C7.00045 9.23833 6.48651 10.395 5.60871 11.2152C5.58469 11.2377 5.56039 11.2598 5.53583 11.2818C5.39734 11.4055 5.25029 11.521 5.09523 11.6273C5.01945 11.6793 4.94176 11.7291 4.86222 11.7766L4.79729 11.8153C4.4261 12.0369 4.5479 12.6032 4.97739 12.6525L8.00045 13Z" fill="#000"/>
            </svg>
    </section>
    <section className='h-9 ml-6 relative w-9 grid place-items-center cursor-pointer rounded-full bg-green-300' onClick={lastBtn}>
        <img src={Avatar} className=''/>
    </section>
    <section className=' ml-1'>
        <FaCaretDown className='w-5 h-5'/>
    </section>
 </div>
        </section>
    )
}
export default Header;