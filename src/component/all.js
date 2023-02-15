import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import About from './about';
import Profile from './profile';
import Service from './service';
import Home from './home';
import Nopage from './nopage'
import {AnimatePresence} from 'framer-motion'

function All() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path='/' element ={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Nopage/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default All