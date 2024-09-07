import { FaPencil, FaGreaterThan } from "react-icons/fa6";
import ProfileEdit from "./ProfileEdit";

function Profile() {
 return(
    <section className="w-full  bg-gray-100">
        <div className="top-0 pl-60 z-10 fixed w-full h-16 shadow-md bg-white flex items-center ">
        <p className="text-black font-medium text-base">My Profile</p>
        </div>
           
        <section className="bg-gray-100  pl-7 z-20  h-full top-0 shadow-lg  rounded-tl-md mt-18 fixed left-56 w-60">
        <div className="absolute flex items-center justify-around top-0 w-full left-0.5 bg-white h-14 shadow-md ">
            <div><FaPencil/></div>
            <div><p className="text-black text-base font-normal">Edit Profile</p></div>
            <div><FaGreaterThan/></div>
        </div>
        </section>
        
      <ProfileEdit/>
    </section>
 )
}

export default Profile;