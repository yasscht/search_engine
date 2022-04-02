import { Navbar, Footer, Routes, Search } from "./components";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes />
        <Footer />
        <Search />
      </div>
    </div>
  );
}

export default App;
