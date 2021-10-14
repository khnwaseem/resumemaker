import React from 'react'
import '../../../assets/css/resume-template/resume-template-2/index.css'
import Header from './header'
import Contact from './contact.js'
import Summary from './summary.js'
import Skill from './skills.js'
import Experience from './experience.js'
import Education from './education.js'

const ResumeB = () => {
  return (
    <div id="TRI2" className="TRI2">
    <Header />
     <div className="template-resume-2">
     <Contact />
         <Summary />
          <Experience />
          <Education />
         <Skill />
     </div>
    </div>
  )
}

export default ResumeB
