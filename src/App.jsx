import { useEffect, useReducer, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Updates from "./Pages/Updates";
import Models from "./Pages/Models";
import image from "./Images/Background.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const parallaxRef = useRef(null);

    useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const offset = window.scrollY * 0.6;
      parallaxRef.current.style.backgroundPositionY = `${offset}px`;
    };

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="overflow-y-auto no-scrollbar">
      <div
      ref={parallaxRef}
      className="min-h-screen bg-cover bg-center flex justify-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
      >
        <div
          className={`w-full max-w-5xl min-h-screen text-[15px] transition-colors duration-300 font-roboto leading-relaxed tracking-normal pt-10 ${
            darkMode
              ? "bg-[#03061A] text-white"
              : "bg-[#E8E8E8] text-black"
          }`}
          style={{
            backgroundColor: darkMode ? "#03061A" : "#E8E8E8",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route index element={<Home darkMode={darkMode} />} />
              <Route path="/Updates" element={<Updates darkMode={darkMode} />} />
              <Route path="/Models" element={<Models darkMode={darkMode} />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div
          className="fixed bottom-4 left-4 p-2 rounded-md shadow-md transition-colors duration-300"
          style={{
            backgroundColor: darkMode ? "#03061A" : "#E8E8E8",
            color: darkMode ? "white" : "black",
          }}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-sm sm:text-base"
          >
            Switch Modes
          </button>
        </div>
      </div>
    </div>
  );
}