import React from 'react'
import '../../../assets/css/resume-template/resume-template-2/experience.css'
import { NavLink } from "react-router-dom";

const Experience = () => {
  return (
    <div className="resume-template-2-experience">
    <div className='resumet2ex' >
    <div className="resumet2ex__head">
      <h3>WORK Experience</h3>
    </div>
    <div className="resumet2ex__info">
      <div className="resumet2ex__info__exp1">
        <div className="resumet2ex__info__exp1__detail">
         <div className="resumet2ex__info__year">
           <p>JAN 2020 - AUG 2021</p>
         </div>
         <div className="resumet2ex__info__exp1__detail__info">
         <div className="resumet2ex__info__exp1__comp__desi">
         <div className="resumet2ex__info__exp1__comp">
           <h6>ZAVI LLC,</h6>
         </div>
         <div className="resumet2ex__info__exp1__desi">
           <NavLink to={{pathname: "https://lrnncode.com"}}>Software Engineer</NavLink>
         </div>
         </div>
         <div className="resumet2ex__info__jobdetail">
           <div className="resumet2ex__info__jobdetail__point">
           <span className='resumet2ex__info__jobdetail__point__buttlet'></span>
           <p>Reviewed code,debugged problems and connected issues.</p>
           </div>
           <div className="resumet2ex__info__jobdetail__point">
           <span className='resumet2ex__info__jobdetail__point__buttlet'></span>
           <p>Contributed ideas and suggestions in team meetings and updates on deadlines, designs and enhancement.</p>
           </div>
         </div>
       </div>
       </div>
      </div>
      <div className="resumet2ex__info__exp1">
        <div className="resumet2ex__info__exp1__detail">
         <div className="resumet2ex__info__year">
          <p>JULY 2019 - JAN 2020</p>
         </div>
         <div className="resumet2ex__info__exp1__detail__info">
         <div className="resumet2ex__info__exp1__comp__desi">
         <div className="resumet2ex__info__exp1__comp">
           <h6>SPNS HEALTH AND FITNESS PVT LTD,</h6>
         </div>
         <div className="resumet2ex__info__exp1__desi">
           <p>Full Stack Developer Intern</p>
         </div>
         </div>
         <div className="resumet2ex__info__jobdetail">
           <div className="resumet2ex__info__jobdetail__point">
           <span className='resumet2ex__info__jobdetail__point__buttlet'></span>
           <p>Completed Ecommerce website to improve navigation,enhance visuals.</p>
           </div>
           <div className="resumet2ex__info__jobdetail__point">
           <span className='resumet2ex__info__jobdetail__point__buttlet'></span>
           <p>developed, coded and updated website.</p>
           </div>
         </div>
       </div>
       </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Experience
