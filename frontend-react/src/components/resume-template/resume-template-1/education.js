import React, {useEffect,useState} from 'react'
import '../../../assets/css/resume-template/resume-template-1/education.css'


const Education = ({fontsize}) => {

  const [education,setEducation] = useState([{
    school_name: "",
    school_location:"",
    select_degree: "",
    field_of_study: "",
    graduation_start: "",
    graduation_end: ""
  }])

  useEffect(() => {
    setEducation(JSON.parse(localStorage.getItem('education')))
  },[])



  return (
    <div className="resume-template-1-education">

    <div className='resumet1e'>
      <div className="resumet1e__head">
        <h3>Education</h3>
      </div>
      {education ? education.map((edu,index) => {
        return (
          <div className="resumet1e__info" key={index} >
            <div className="resumet1e__info__edu1">
               <div className="resumet1e__info__edu1__coll">
                 <p style={{fontSize: fontsize + 'rem'}}><b>{edu.school_name}</b></p>
               </div>
               <div className="resumet1e__info__edu1__fl__yr">
                 <div className="resumet1e__info__edu1__fl">
                   <p style={{fontSize: fontsize + 'rem'}}>{edu.select_degree} -</p>
                   <p style={{fontSize: fontsize + 'rem'}}>{edu.school_location}</p>
                 </div>
                 <div className="resumet1e__info__edu1__yr">
                    <p style={{fontSize: fontsize + 'rem'}}>{edu.start_month} - {edu.end_month}</p>
                 </div>
               </div>
            </div>

          </div>
        )
      }) : ""
      }

    </div>
    </div>
  )
}

export default Education
