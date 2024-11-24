import DashboardSVG from "./Svg/DashboardSVG";
import ProjectsSVG from "./Svg/ProjectsSVG";
import ContactSVG from "./Svg/ContactSVG";
import KanbanSVG from "./Svg/KanbanSVG";
import CalenderSVG from "./Svg/CalenderSVG";
import MessagesSVG from "./Svg/MessagesSVG";
import SettingsSVG from "./Svg/SettingsSVG";
import logo from "../assets/img/lws-logo-en.svg";

export default function SideBar() {
  return (
    // Sidebar
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={logo} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center">
              <DashboardSVG />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <ProjectsSVG />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <ContactSVG />
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <KanbanSVG />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <CalenderSVG />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <MessagesSVG />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <SettingsSVG />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
