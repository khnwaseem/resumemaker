import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import BannerImage from '../assets/img/banner-image.jpg'
import '../assets/css/homepagecontent.css'
import Resume from '../assets/img/resume.png'
import DownloadResume from '../assets/img/download-resume.png'
import EditResume  from '../assets/img/edit-resume.png'
import Resume1  from '../assets/img/resume-image-1.png'
import Resume2  from '../assets/img/resume-image-2.png'
import Resume3  from '../assets/img/resume-image-3.png'
import Resume4  from '../assets/img/resume-image-4.jpg'



const HomePageContent = ({onResumeSelect}) => {

  return (
    <main className='homepagecontent'>
      <div className="homepagecontent__container">
        <div className="homepagecontent__banner">
         <div className="homepagecontent__banner__text">
           <div className="homepagecontent__banner__text__header">
             <h2>Worzett Resume</h2>
             <h3>Build Free Resume</h3>
           </div>
           <div className="homepagecontent__banner__text__content">
             <p>Welcome to professional free resume builder. Feel free to create resume free.</p>
             <p>Save resume free for 1 month with your Login credentials.</p>
           </div>
           <div className="homepagecontent__banner__text__button">
             <button>Create My Resume</button>
           </div>
         </div>
         <div className="homepagecontent__banner__image">
           <picture>
  <source media="(min-width:650px)" srcSet={BannerImage}  />
  <source media="(min-width:465px)" srcSet={BannerImage} />
  <img className="homepagecontent__banner__image__img" src={BannerImage} alt="resume banner" />
        </picture>
         </div>
        </div>


           {/* // HOW TO CREATE REUME */}

        <div className="homepagecontent__createresumse">
          <div className="homepagecontent__createresumse__header">
          <h2>Create professional resume with 3 step</h2>
          </div>
          <div className="homepagecontent__createresumse__detail">
            <div className="homepagecontent__createresumse__detail__template">
             <div className="homepagecontent__createresumse__detail__template__icon">
               <img src={Resume} alt="resume template" />
             </div>
              <div className="homepagecontent__createresumse__detail__template__header">
                <h3>Choose your <br /> resume template</h3>
              </div>
              <div className="homepagecontent__createresumse__detail__template__content">
                <p>Our professional resume templates are designed strictly following all industry guidelines and best practices</p>
              </div>
            </div>
            <div className="homepagecontent__createresumse__detail__addcontent">
              <div className="homepagecontent__createresumse__detail__template__icon">
                <img src={EditResume} alt=" edit resume template" />
              </div>
               <div className="homepagecontent__createresumse__detail__template__header">
                 <h3>Show what  <br /> you´re made of</h3>
               </div>
               <div className="homepagecontent__createresumse__detail__template__content">
                  <p>Not finding the right words to showcase yourself? We´ve added thousands of pre-written examples and resume samples.  </p>
               </div>
            </div>
            <div className="homepagecontent__createresumse__detail__download">
              <div className="homepagecontent__createresumse__detail__template__icon">
                <img src={DownloadResume} alt="Download Resume" />
              </div>
               <div className="homepagecontent__createresumse__detail__template__header">
                  <h3>Download  <br /> Your resume </h3>
               </div>
               <div className="homepagecontent__createresumse__detail__template__content">
                 <p>Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly. </p>
               </div>
            </div>
          </div>
        </div>



                      {/* SELECT ANY TEMPLATE BUILDER FOR YOUR RESUME */}

           <div className="homepagecontent__selectresume">
             <div className="homepagecontent__selectresume__header">
               <h3>Professional Resume Template</h3>
               <p>Download with a single click. Land that dream job.</p>
             </div>
             <div className="homepagecontent__selectresume__content">

             </div>
             <div className="homepagecontent__selectresume__templates">
             <div className="homepagecontent__selectresume__resumebuilder" data-id="TRI1"  onClick={onResumeSelect} >
               <img className="homepagecontent__selectresume__resumebuilder__image" src={Resume1} alt="first resume template" />
               <button className="homepagecontent__selectresume__resumebuilder__button">Use This Template</button>
             </div>
             <div className="homepagecontent__selectresume__resumebuilder" data-id="TRI2" onClick={onResumeSelect}>
               <img style={{ height: "430px" }} className="homepagecontent__selectresume__resumebuilder__image" src={Resume2} alt="first resume template" />
               <button className="homepagecontent__selectresume__resumebuilder__button">Use This Template</button>
             </div>
             <div className="homepagecontent__selectresume__resumebuilder" data-id="TRI3" onClick={onResumeSelect}>
               <img style={{ height: "430px" }} className="homepagecontent__selectresume__resumebuilder__image" src={Resume3} alt="first resume template" />
               <button className="homepagecontent__selectresume__resumebuilder__button">Use This Template</button>
             </div>
             <div className="homepagecontent__selectresume__resumebuilder" data-id="TRI4" onClick={onResumeSelect}>
               <img className="homepagecontent__selectresume__resumebuilder__image" src={Resume4} alt="first resume template" />
               <button className="homepagecontent__selectresume__resumebuilder__button">Use This Template</button>
             </div>
             </div>
           </div>



      </div>
    </main>
  )
}

export default HomePageContent
