 import Headerhomepage from "./Headerhomepage";
 import Header from "./Header";
 import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import MoneyTrasactions from "./MoneyTrasactions";
import Trasactions from "./Transactions";
function Homepage(){

    return(
        <div>
            <Header/>
        <section className="pl-72  w-full mt-36">
      <Headerhomepage/>
      <MoneyTrasactions/>
      <Trasactions/>
  
 </section>
 </div>
    )
}
export default Homepage;