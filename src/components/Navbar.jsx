import useProjectContext from "./hooks/useProjectContext";
import { MailSVG, MenuSVG, NotificationSVG } from "./SVG/IconSVG";

const Navbar = () => {
  const { state, dispatch } = useProjectContext();
  // Search functionality

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    dispatch({ type: "SEARCH_PROJECT", searchValue });
  };

  return (
    <>
      <header className="flex items-center justify-between bg-gray-800 p-4">
        <button className="lg:hidden">
          <MenuSVG />
        </button>
        <div className="mx-4 flex-1">
          <input
            type="text"
            placeholder="Search here"
            className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center">
          <button className="relative mr-4">
            <NotificationSVG />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="relative mr-4">
            <MailSVG />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
