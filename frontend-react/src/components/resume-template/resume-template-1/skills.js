import React,{useEffect,useState} from 'react'
import '../../../assets/css/resume-template/resume-template-1/skills.css'


const Skill = ({fontsize}) => {

  const [skill,setSkill] = useState([{skill_name: "",skill_level: ""}])
  useEffect(() => {
    const skills =  JSON.parse(localStorage.getItem('skill'))
     if(skills != undefined) {
       setSkill(skills)
     } else {
       setSkill([{skill_name: "",skill_level: ""}])
     }
  },[])


const skilllevel = (level) => {
  switch(level) {
    case '1' : return <div  className="star-total"><div className="star-level">
                       <span></span>
                       </div>
                       <div className="star-remain">
                      <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                       </div>
                       </div>
    case '2' : return <div  className="star-total"><div className="star-level">
                       <span></span>
                       <span></span></div>
                       <div className="star-remain">
                       <span></span>
                       <span></span>
                       <span></span>
                       </div>
                       </div>
    case '3' : return <div  className="star-total"><div className="star-level">
                       <span></span>
                       <span></span>
                        <span></span>
                        </div>
                       <div className="star-remain">
                       <span></span>
                       <span></span>
                       </div>
                       </div>
    case '4' : return <div  className="star-total"><div className="star-level">
                       <span></span>
                       <span></span>
                        <span></span>
                         <span></span>
                        </div>
                       <div className="star-remain">
                       <span></span>
                       </div>
                       </div>
    case '5' : return <div  className="star-total"><div className="star-level">
                       <span></span>
                       <span></span>
                        <span></span>
                         <span></span>
                        <span></span>
                        </div>
                       <div className="star-remain">

                       </div>
                       </div>
      default: return ''
  }
}

  return (
    <div className="resume-template-1-skills">
    <div className='resumet1sk'>
    <div className="resumet1sk__head">
    <h3>Skills</h3>
    </div>
    {skill ? skill.map((sk) => {
      return (
        <div className="resumet1sk__info" key={sk.skill_name}>
          <div className="resumet1sk__info__skilldetail">
            <div className="resumet1sk__info__skilldetail__point">
            <span className='resumet1sk__info__skilldetail__point__buttlet'></span>
            <p style={{fontSize: fontsize + 'rem'}}>{sk.skill_name}</p>
            </div>
            <div className="resumet1sk__info__skilldetail__level">
            <div>{skilllevel(sk.skill_level)}</div>
            </div>
          </div>
        </div>
      )
    }) :""
  }

    </div>
    </div>
  )
}

export default Skill
