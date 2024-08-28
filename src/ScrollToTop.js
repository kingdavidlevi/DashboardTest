 
import { Outlet, useOutletContext } from "react-router-dom";


function ScrollToTop() {
    const {firstDiv,setFirstDiv,secondDiv,setSecondDiv,thirdDiv,setThirdDiv,lastDiv,setLastDiv} = useOutletContext()

    return (
        <div className="bg-gray-100 mt-36 ">
          
            <Outlet  context={{firstDiv,setFirstDiv,secondDiv,setSecondDiv,thirdDiv,setThirdDiv,lastDiv,setLastDiv}}/>
         </div>
    );
}

export default ScrollToTop;
