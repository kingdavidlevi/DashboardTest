 import Headerhomepage from "./Headerhomepage";
 import Header from "./Header";
 import { Outlet, useLocation, useOutletContext } from "react-router-dom";
function Homepage(){
 
    return(
        <div>
            <Header/>
        <section className="pl-72  w-full mt-36">
 <Headerhomepage/>
 <Outlet/>
 </section>
 </div>
    )
}
export default Homepage;