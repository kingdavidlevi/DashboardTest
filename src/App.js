import ScrollToTop from "./ScrollToTop";
import OverAll from "./OverAll";
 import Wallet from "./Wallet";
 import Transactions from "./Transactions";
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Homepage from "./Homepage";
import Headerhomepage from "./Headerhomepage";
import CreateWalletTag from "./CreateWalletTag";
 
 const router = createBrowserRouter(createRoutesFromElements(
 
    <Route element={<OverAll/>} >
      
  <Route  element={<ScrollToTop/>} >

<Route path="/" element={<Homepage/>}/>

<Route path="Wallet" element={<Wallet/>}/>
<Route path="Transactions" element={<Transactions/>} />
<Route path="CreateWalletTag" element={<CreateWalletTag/>}/>
</Route>
<Route path="Headerhomepage" element={<Headerhomepage/>}/>

</Route>
 
  
))
function App() {
  return (
 
    <RouterProvider router={router} /> 
  );
}

export default App;
