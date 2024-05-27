import React from 'react'
import Projects from './Pages/Projects'
import ContactMe from './Pages/ContactMe'
import Skills from './Pages/TopDes'

export default function Home() {
    return (<>
        <div> 
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    </>)
}
