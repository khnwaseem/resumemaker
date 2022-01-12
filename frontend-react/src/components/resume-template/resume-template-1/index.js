import React from 'react'
import '../../../assets/css/resume-template/resume-template-1/index.css'
import Header from './header'
import Contact from './contact.js'
import Summary from './summary.js'
import Skill from './skills.js'
import Experience from './experience.js'
import Education from './education.js'

const ResumeA = ({fontsize,fontfamily}) => {

console.log(fontfamily)


  return (
    <div id="TRI1" className="TRI1">
    <Header />
     <div className="template-resume-1" style={{fontFamily: fontfamily}}>
       <div className="template-resume-1-leftSide">
         <Summary fontsize={fontsize}/>
          <Contact fontsize={fontsize}/>
           <Skill fontsize={fontsize}/>

       </div>
       <div className="template-resume-1-rightSide">
       <Experience fontsize={fontsize}/>
            <Education fontsize={fontsize}/>

       </div>
     </div>
    </div>
  )
}

export default ResumeA
