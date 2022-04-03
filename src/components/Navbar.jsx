import { Link } from "react-router-dom";
import Search from "./Search";
const Navbar = ({ darkMode, setDarkMode }) => (
  <div className="p-5 pb-0 flex  flex-wrap sm:justify-beetween  items-center border-b dark:border-gray-700 border-gray-200">
    <div className="flex justify-between items-center space-x-5 w-screen">
      <Link to="/">
        <p className="text-2xl mb-2 bg-blue-500 font-bold text-white py-1 px-2  rounded dark:bg-gray-50 dark:text-gray-500">
          websurfer 🔎
        </p>
      </Link>
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
      >
        {darkMode ? "💡 Light" : "🌙 Dark"}
      </button>
    </div>
    <Search />
  </div>
);
export default Navbar;
