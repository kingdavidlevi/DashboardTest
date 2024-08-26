 import Headerhomepage from "./Headerhomepage";
 import { Outlet, useLocation, useOutletContext } from "react-router-dom";
function Homepage(){
 
    return(
        <section className="pl-72  w-full mt-36">
 <Headerhomepage/>
 <Outlet/>
 </section>
    )
}
export default Homepage;