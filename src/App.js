import React from "react";
import backgroundImg from './assets/images/background-img.jpg'
import Search from "./components/search/Search";
import Weather from "./components/Weather";
import CorrentWeather from "./components/CorrentWeather";

const App =()=> {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    }} className=" min-w-full min-h-screen">
     <Search/>
     <CorrentWeather/>
     {/* <Weather/> */}
    </div>
  );
}

export default App;
