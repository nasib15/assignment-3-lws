import {
  CalendarSVG,
  ContactSVG,
  HomeSVG,
  KanbanSVG,
  MessageSVG,
  ProjectSVG,
  SettingsSVG,
} from "./SVG/IconSVG";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
        <div className="mb-8 flex items-center">
          <div className="flex items-center justify-center rounded-full text-xl font-bold">
            <img src="/lws-logo-en.svg" className="mx-auto h-10 text-center" />
          </div>
        </div>
        <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
          + New Project
        </button>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center">
                <HomeSVG />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <ProjectSVG />
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
                <CalendarSVG />
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <MessageSVG />
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
    </>
  );
};
export default Sidebar;
