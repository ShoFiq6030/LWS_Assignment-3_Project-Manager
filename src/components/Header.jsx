/* eslint-disable react/prop-types */

import MassegeSVG from "./Svg/MassegeSVG";
import MenuSVG from "./Svg/MenuSVG";
import NotificationSVG from "./Svg/NotificationSVG";
import CloseSvg from "./Svg/CloseSvg";

export default function Header({ onSearch, setShowSidebar, showSidebar }) {
  function handleSidebar() {
    setShowSidebar((pre) => !pre);
  }
  return (
    //  Top Bar
    <header className="flex items-center justify-between bg-gray-800 p-4 sticky top-0">
      <button className="lg:hidden" onClick={handleSidebar}>
        {showSidebar && <MenuSVG />}
      </button>
      <button className="lg:hidden" onClick={handleSidebar}>{showSidebar || <CloseSvg />}</button>
      <div className="mx-4 flex-1">
        <input
          onChange={(e) => onSearch(e)}
          type="text"
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <NotificationSVG />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          <MassegeSVG />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
