import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import Updates from './Pages/Updates'
import Models from './Pages/Models'
import image from './Images/T-38.png'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className='pl-100 pr-100 min-h-screen bg-cover bg-center'
    style ={{
      backgroundImage: `url(${image})`,
      backgroundPositionY: `${offset * 0.5}px`,
    }}
    >
      <div className="text-1xl tracking-wide min-h-screen pt-10"
            style={{
            backgroundColor: darkMode ? '#03061A' : 'white',
            color: darkMode ? 'white' : 'black',
            }}>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home darkMode={darkMode}/>} />
          <Route path="/Updates" element={<Updates darkMode={darkMode}/>} />
          <Route path="/Models" element={<Models darkMode={darkMode}/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      </div>
      <div className ='pl-5'
      style = {{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
      }}>
        <button onClick={() => setDarkMode(!darkMode)} className='cursor-pointer mb-2'>
        Toggle Mode
        </button>
      </div>
    </div>
  )
}