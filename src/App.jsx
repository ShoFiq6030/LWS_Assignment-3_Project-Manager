import { useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  const[showSidebar,setShowSidebar] =useState (true)
  return (
    <div className="bg-gray-900 text-white font-Inter">
      <div className="flex h-screen">
        <SideBar showSidebar={showSidebar} />
        <MainContent setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      </div>
    </div>
  );
}

export default App;
