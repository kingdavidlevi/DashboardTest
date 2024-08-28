 import Headerhomepage from "./Headerhomepage";
 import Header from "./Header";
 import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import MoneyTrasactions from "./MoneyTrasactions";
import Trasactions from "./Transactions";
function Homepage(){

    return(
        <>
           
        <section className="pl-72  w-full ">
      <Headerhomepage/>
      <MoneyTrasactions/>
  
 </section>
 <Trasactions/>
 </>
    )
}
export default Homepage;