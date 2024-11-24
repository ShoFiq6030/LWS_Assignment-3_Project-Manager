import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-gray-900 text-white font-Inter">
      <div className="flex h-screen">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
