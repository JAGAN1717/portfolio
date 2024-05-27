import React, { useEffect } from 'react'
import { Route, Routes, BrowserRouter, useNavigate, useLocation} from 'react-router-dom'
import Outlets from './Pages/Outlets'
import Home from './Home'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'

export default function AppRoutes() { 

  return (
    <div>
        <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route element={<Outlets/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about-Me' element={<AboutMe/>} /> 
                <Route path='/Projects' element={<Projects/>} /> 
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}


const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
      window.history.scrollRestoration = 'manual';
    }, [pathname]);
}

