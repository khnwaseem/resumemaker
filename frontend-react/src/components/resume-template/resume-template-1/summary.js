import React, {useEffect,useState} from 'react'
import '../../../assets/css/resume-template/resume-template-1/summary.css'

const Summary = ({fontsize}) => {

    const [summary,setSummary] = useState([])

    useEffect(() => {
      const summ =  JSON.parse(localStorage.getItem('summary'))

       if(summ) {
          setSummary(summ)
       }

    },[])



  return (
    <div className="resume-template-1-summary">
    <div className='resumet1s'>
      <div className='resumet1s__head'>
        <h6>Personal Profile</h6>
      </div>
      <div className="resumet1s__info">
      { summary ? summary.map((summ,index) => {
        return (
          <div key={index}>
          <p style={{marginBottom: "10px",fontSize: fontsize + 'rem'}}>{summ.summary} </p>
        </div>
        )
      }): ""

      }
      </div>
    </div>
    </div>
  )
}

export default Summary
