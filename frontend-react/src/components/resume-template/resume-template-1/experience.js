import React,{useEffect,useState} from 'react'
import '../../../assets/css/resume-template/resume-template-1/experience.css'


const Experience = ({fontsize}) => {


    const [experience,setExperience] = useState([{
      employer: "",
      job_title:"",
      city: "",
      state: "",
      summary: "",

    }])

    useEffect(() => {
      setExperience(JSON.parse(localStorage.getItem('experience')))
    },[])


  return (
    <div className="resume-template-1-experience">
    <div className='resumet1ex' >
    <div className="resumet1ex__head">
      <h3>WORK Experience</h3>
    </div>
    { experience ? experience.map((ex,index) => {
      return (
        <div className="resumet1ex__info" key={index}>
          <div className="resumet1ex__info__exp1">
             <div className="resumet1ex__info__exp1__comp__desi">
             <div className="resumet1ex__info__exp1__comp">
               <p style={{fontSize: fontsize + 'rem'}}>{ex.employer}, </p>
             </div>
             <div className="resumet1ex__info__exp1__desi">
               <p style={{fontSize: fontsize + 'rem'}}> {ex.job_title}</p>
             </div>
             </div>
              <div className="resumet1ex__info__year">
              <p style={{fontSize: fontsize + 'rem'}} >   {ex.start_month} - {ex.end_month} </p>
              </div>
              {ex.summary ? ex.summary.map((summ,index) => {
                return (
                  <div className="resumet1ex__info__jobdetail" key={index}>
                    {summ.summary ? <div className="resumet1ex__info__jobdetail__point">
                    <span className='resumet1ex__info__jobdetail__point__buttlet'></span>
                    <p style={{fontSize: fontsize + 'rem'}}>{summ.summary}</p>
                  </div> : ""}

                  </div>
                )
              }) : ""
            }

          </div>
        </div>
      )


    }): ""
  }



        </div>
    </div>
  )
}

export default Experience
