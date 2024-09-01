import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Side from "./Side";

function OverAll({ title }) {
    const location = useLocation();

    // Safely initialize state by checking if the value exists in localStorage before parsing
    
    const [firstDiv, setFirstDiv] = useState(() => {
        const saved = localStorage.getItem('firstDiv');
        return saved !== null ? JSON.parse(saved) : false;
    });

 
    const [secondDiv, setSecondDiv] = useState(() => {
        const saved = localStorage.getItem('secondDiv');
        return saved !== null ? JSON.parse(saved) : false;
    });

    const [thirdDiv, setThirdDiv] = useState(() => {
        const saved = localStorage.getItem('thirdDiv');
        return saved !== null ? JSON.parse(saved) : false;
    });

    const [lastDiv, setLastDiv] = useState(() => {
        const saved = localStorage.getItem('lastDiv');
        return saved !== null ? JSON.parse(saved) : false;
    });

    // Save state changes to localStorage
    useEffect(() => {
        localStorage.setItem('firstDiv', JSON.stringify(firstDiv));
    }, [firstDiv]);

    useEffect(() => {
        localStorage.setItem('secondDiv', JSON.stringify(secondDiv));
    }, [secondDiv]);

    useEffect(() => {
        localStorage.setItem('thirdDiv', JSON.stringify(thirdDiv));
    }, [thirdDiv]);

    useEffect(() => {
        localStorage.setItem('lastDiv', JSON.stringify(lastDiv));
    }, [lastDiv]);

    // Scroll to the top of the page when the location changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-gray-100 w-full  overflow-hidden max-h-full overflow-y-scroll h-screen">
          <Header/>
            <Outlet context={{firstDiv,setFirstDiv,secondDiv,setSecondDiv,thirdDiv,setThirdDiv,lastDiv,setLastDiv}} />
            <Side
                title={title}
                firstDiv={firstDiv}
                setFirstDiv={setFirstDiv}
                secondDiv={secondDiv}
                setSecondDiv={setSecondDiv}
                thirdDiv={thirdDiv}
                setThirdDiv={setThirdDiv}
                lastDiv={lastDiv}
                setLastDiv={setLastDiv}
            />
        </div>
    );
}

export default OverAll;
