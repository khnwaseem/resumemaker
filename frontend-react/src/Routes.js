import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './containers/Home'
import Layout from './components/layout'
import ResumeTemplate from './components/resume-template/resume-template-design'
import Contact  from './components/resume-data-input/contact'
import Experience  from './components/resume-data-input/experience'
import Education  from './components/resume-data-input/education'
import Skill  from './components/resume-data-input/skills'
import Summary  from './components/resume-data-input/summary'
import Language  from './components/resume-data-input/addsection/language'


const Routes  = () => {

   return (
     <React.Fragment>
      <Switch>
       <Layout>
         <Route exact component={Home} path='/' />
         <Route exact component={ResumeTemplate} path='/resumetemplate' />
         <Route exact component={Contact} path='/resume/contact/add' />
         <Route exact component={Experience} path='/resume/experience/add' />
         <Route exact component={Education} path='/resume/education/add' />
         <Route exact component={Skill} path='/resume/skill/add' />
         <Route exact component={Summary} path='/resume/summary/add' />
         <Route exact component={Language} path='/resume/language/add' />
       </Layout>
      </Switch>
     </React.Fragment>
   )

}

export default Routes
