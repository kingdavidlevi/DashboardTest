import ScrollToTop from "./ScrollToTop";
import OverAll from "./OverAll";
 import Wallet from "./Wallet";
 import Transactions from "./Transactions";
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Homepage from "./Homepage";
import Headerhomepage from "./Headerhomepage";
import CreateWalletTag from "./CreateWalletTag";
import GenerateWalletId from "./GenerateWalletId";
import FundWallet from "./FundWallet";
import FundingCard from "./FundingCard";
 import ConfirmTransaction from "./ConfirmTransaction";
 const router = createBrowserRouter(createRoutesFromElements(
 
    <Route element={<OverAll/>} >
      
  <Route  element={<ScrollToTop/>} >

<Route path="/" element={<Homepage/>}/>

<Route path="Wallet" element={<Wallet/>}/>
<Route path="Transactions" element={<Transactions/>} />
<Route path="CreateWalletTag" element={<CreateWalletTag/>}/>
<Route path="GenerateWalletId" element={<GenerateWalletId/>}/>
<Route path="FundWallet" element={<FundWallet/>}/>
<Route path="FundingCard" element={<FundingCard/>} />
<Route path="ConfirmTransaction" element={<ConfirmTransaction/>}/>

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
