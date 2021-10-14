import React,{useState, useEffect,useRef} from 'react'
import '../../assets/css/resume-data-input/education.css'
import Calendar from 'react-calendar';
import getUserLocale from 'get-user-locale';

const Education = (props) => {


  const [education,setEducation] = useState([{
    school_name: "",
    school_location:"",
    select_degree: "",
    field_of_study: "",
    graduation_start: "",
    graduation_end: ""
  }])


  const [start_date, onStartChange] = useState(new Date());
  const [startMonth, setStartMonth] = useState("");
  const [end_date, onEndChange] = useState(new Date());
  const [endMonth, setEndMonth] = useState("");
  const [startdatedisplay,setstartDateDisplay] = useState(false)
  const [enddatedisplay,setendDateDisplay] = useState(false)
  const [detailEducation,setDetailEducation] = useState([])
  const [addEducation,setAddEducation] = useState([])

    const node = useRef();


    useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", starthandleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", starthandleClick);
    };
  }, [])


  const starthandleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }

  setstartDateDisplay(false)
  setendDateDisplay(false)

  };

  const changeStartDate = (e) => {
   console.log(e)
   setStartMonth(e.toString().substring(4,7) + ' ' + e.toString().substring(11,15))
   onStartChange(e)
  }

  const changeEndDate = (e) => {
   setEndMonth(e.toString().substring(4,7) + ' ' + e.toString().substring(11,15))
  onEndChange(e)
  }

  const onEducationChange = (e) => {
    e.preventDefault()
    setEducation({
      ...education,
      [e.target.name] : e.target.value
    })
  }



const startMonthCalenderDisplay = () => {
 setstartDateDisplay(true)
}

const endMonthCalenderDisplay = () => {
  setendDateDisplay(true)
}


  const {school_name,school_location,select_degree,field_of_study,graduation_start,graduation_end} = education


       useEffect(() => {
         setDetailEducation(JSON.parse(localStorage.getItem('education')))
       },[])

const addneweducation = (e) => {
  const newEducation = {school_name :school_name,school_location:school_location,
                                        select_degree:select_degree,field_of_study:field_of_study,start_month:startMonth,
                                         end_month:endMonth}

   const edu = []
   if(detailEducation) {
   detailEducation.map((ex) => {
   edu.push(ex)
     })
     }

if(Object.values(newEducation)[0] !== undefined) {
console.log(Object.values(newEducation))
   edu.push(newEducation)
     }

   localStorage.setItem("education",JSON.stringify(edu))
}

const onAddAnotherEducation = (e) => {
  e.preventDefault()
     addneweducation(e)
     setDetailEducation(JSON.parse(localStorage.getItem('education')))
    window.location.reload()

       props.history.push("/resume/education/add")
}

    const onEducationNext = (e) => {
            e.preventDefault()
        addneweducation(e)
        props.history.push("/resume/skill/add")
  }

  const removeEducationFields = (i) => {
    let newEducationValues = [...detailEducation]
    newEducationValues.splice(i,1);
    setDetailEducation(newEducationValues)
  }




  return (
    <div className="resume__input__data__contact">
      <div className="resume__input__data__header">
         <h3>Education</h3>
         <p>Add information about your educational background.</p>
      </div>
      {
        detailEducation ?  detailEducation.map((edu,index) => {
            return (
              <div className="experience__detail" key={edu.school_name}>
                <div className="experience__detail__about">

                  <div className="experience__detail__about__employer">
                    <h4>{edu.school_name}</h4>
                  </div>
                  <div className="experience__detail__about__job_title">
                    <p>{edu.select_degree}<span></span></p>
                    <p>{edu.field_of_study}</p>
                  </div>
                  <div className="experience__detail__about__summary">
                    <p>{edu.school_location}</p>

                    <p>{edu.start_month} - {edu.end_month}</p>
                  </div>
                </div>
                <div className="experience__detail__change">
                 <button type="button"  className="button remove" onClick={() => removeEducationFields(index)}>Remove</button>
                </div>
              </div>
            )
           }) : ''

      }

      <form id="education-form" className="education-form"  method="post" action="/">
      <div className="resume__input__data__job">
        <div className="resume__input__data__school_name">
          <label className="resume__input__data__label">School Name</label>
          <input className="resume__input__data__inputvalue" name="school_name" value={school_name} placeholder="e.g Jai ambe" onChange={onEducationChange} />
        </div>
        <div className="resume__input__data__school_location">
          <label className="resume__input__data__label">School Location</label>
          <input className="resume__input__data__inputvalue" name="school_location" value={school_location} placeholder="e.g vapi, Gujarat" onChange={onEducationChange} />
        </div>
      </div>
      <div className="resume__input__data__education__info">
        <div className="resume__input__data__education__info__select_degree">
          <label className="resume__input__data__label">Select Degree</label>
          <input className="resume__input__data__inputvalue" name="select_degree" value={select_degree} placeholder="e.g B.E. " onChange={onEducationChange} />
        </div>
        <div className="resume__input__data__education__info__field_of_study">
          <label className="resume__input__data__label">Field Of Study</label>
          <input className="resume__input__data__inputvalue" name="field_of_study" value={field_of_study} placeholder="e.g Software Engineer" onChange={onEducationChange} />
        </div>
        </div>

        <div ref={node}  className="resume__input__data__experience__date">
          <div  className="resume__input__data__address__start_month" onClick={startMonthCalenderDisplay}>
            <div  className="resume__input__data__inputvalue__inst">
            <label className="resume__input__data__label">Graduation Start</label>
            <input className="resume__input__data__inputvalue resume__input__data__inputvalue__startmonth" name="start_date"  onChange={()=>{}} value={startMonth} placeholder="select"  />
            </div>
 { startdatedisplay ?
            <div className="start_date__calendar">
              <Calendar maxDetail="year" onChange={changeStartDate} value={start_date}/>
            </div> : '' }
          </div>
            <div className="resume__input__data__address__end_month" onClick={endMonthCalenderDisplay}>
               <div>
              <label className="resume__input__data__label">Graduation End</label>
              <input className="resume__input__data__inputvalue resume__input__data__inputvalue__endmonth" name="end_date"  onChange={()=>{}} value={endMonth} placeholder="select"  />
              </div>
{ enddatedisplay ?
             <div className="end_date__calendar">
            <Calendar minDate={new Date(start_date)}    maxDetail="year" onChange={changeEndDate} defaultValue={end_date} />
            </div> : '' }
          </div>
          </div>
          {/*
          <div className="resume__input__data__experience__summary">
            <label className="resume__input__data__label">Summary</label>
            <textarea rows="6" cols="50" className="resume__input__data__inputvalue resume__input__data__inputvalue__experience__textarea"  name="summary" value={summary} placeholder="e.g develop and manage website" onChange={onExperienceChange}>
              {summary}
          </textarea>
          </div> */}
          <div className="resume__experience__button">
              <button className="resume__experience__button__previous">Previous</button>
              <button className="resume__experience__button__add" onClick={onAddAnotherEducation}>Add Position</button>
              <button className="resume__experience__button__next" onClick={onEducationNext}>Next</button>
          </div>
      </form>

    </div>
  )
}

export default Education
