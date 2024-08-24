import ScrollToTop from "./ScrollToTop";
 
 
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Homepage from "./Homepage";

 const router = createBrowserRouter(createRoutesFromElements(
 
    
  <Route  element={<ScrollToTop/>} >
    
<Route path="/" element={<Homepage/>}/>
</Route>

 
  
))
function App() {
  return (
 
    <RouterProvider router={router} /> 
  );
}

export default App;
