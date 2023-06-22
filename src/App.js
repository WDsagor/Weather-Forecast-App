import React from "react";
import backgroundImg from './assets/images/background-img.jpg'
import Search from "./components/search/Search";

const App =()=> {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    }} className=" min-w-full min-h-screen">
     <Search/>
     
    </div>
  );
}

export default App;
