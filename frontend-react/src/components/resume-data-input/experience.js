import React,{useState, useEffect,useRef} from 'react'
import '../../assets/css/resume-data-input/experience.css'
import Calendar from 'react-calendar';
import getUserLocale from 'get-user-locale';
import {Editor, EditorState,RichUtils,convertToRaw,DefaultDraftBlockRenderMap,blockRenderMap} from 'draft-js';
import Immutable from 'immutable'

const Experience = (props) => {


  const [experience,setExperience] = useState([{
    employer: "",
    job_title:"",
    city: "",
    state: "",
    summary: "",

  }])

  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  const [start_date, onStartChange] = useState(new Date());
  const [startMonth, setStartMonth] = useState("");
  const [end_date, onEndChange] = useState(new Date());
  const [endMonth, setEndMonth] = useState("");
  const [startdatedisplay,setstartDateDisplay] = useState(false)
  const [enddatedisplay,setendDateDisplay] = useState(false)
  const [detailExperience,setDetailExperience] = useState([])
  const [addExperience,setAddExperience] = useState([])

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


  const onExperienceChange = (e) => {
    e.preventDefault()
    setExperience({
      ...experience,
      [e.target.name] : e.target.value
    })
  }


  const changeStartDate = (e) => {
   console.log(e)
   setStartMonth(e.toString().substring(4,7) + ' ' + e.toString().substring(11,15))
   onStartChange(e)
  }

  const changeEndDate = (e) => {
   setEndMonth(e.toString().substring(4,7) + ' ' + e.toString().substring(11,15))
  onEndChange(e)
  }



const startMonthCalenderDisplay = (e) => {

 setstartDateDisplay(true)
}

const endMonthCalenderDisplay = () => {
  setendDateDisplay(true)
}



const end_month = end_date.toString().substring(4,7) + ' ' + end_date.toString().substring(11,15)



       useEffect(() => {
         setDetailExperience(JSON.parse(localStorage.getItem('experience')))
         console.log(detailExperience)
       },[])


           const {employer,job_title,city,state,summary} = experience


const addnewexperience = (e) => {
  let summExp = []
   let summaryValue = convertToRaw(editorState.getCurrentContent()).blocks
   summaryValue.map((va,i) => {

     console.log(va.text)
      summExp.push({summary: va.text})

   })


     const newExperience = {employer:employer,job_title:job_title,
                                           city:city,state:state,start_month:startMonth,
                                            end_month:endMonth,summary:summExp}

    const exp = []
    if(detailExperience) {
      detailExperience.map((ex) => {
      exp.push(ex)
          })
          }


       if(Object.values(newExperience)[0] !== undefined) {

         exp.push(newExperience)
       }

      localStorage.setItem("experience",JSON.stringify(exp))
}


const onAddAnotherExperience = (e) => {
    e.preventDefault()
       addnewexperience(e)
       setDetailExperience(JSON.parse(localStorage.getItem('experience')))
      window.location.reload()

         props.history.push("/resume/experience/add")
}

    const onExperienceNext = (e) => {
      e.preventDefault()
     addnewexperience(e)

        props.history.push("/resume/education/add")
    }

    const editor = useRef(null);



     let {wrapper} = DefaultDraftBlockRenderMap.get('unordered-list-item')
     const blockRenderMap = Immutable.Map({
      'unstyled': {
        element: 'li',
        wrapper
        }
    });


const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);



        const removeExperienceFields = (i) => {
          let newExperienceValues = [...detailExperience]
          newExperienceValues.splice(i,1);
          setDetailExperience(newExperienceValues)
        }



      const  onUnderlineClick = (e) => {
        e.preventDefault()
          setEditorState(
             RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
           );
         };

      const  onBoldClick = e => {
          e.preventDefault()
           setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
         };

      const  onItalicClick = (e) => {
          e.preventDefault()
        setEditorState(
             RichUtils.toggleInlineStyle(editorState, "ITALIC")
           );
         };



  return (
    <div className="resume__input__data__contact">
      <div className="resume__input__data__header">
         <h3>Experience</h3>
         <p>We'll start there and work backward.</p>
      </div>
      {
        detailExperience ?  detailExperience.map((ex,index) => {
      return  (

              <div className="experience__detail" key={ex.employer}>
                <div className="experience__detail__about">

                  <div className="experience__detail__about__employer">
                    <h4>{ex.employer}</h4>
                  </div>
                  <div className="experience__detail__about__job_title">
                   <p>{ex.job_title}<span>, </span></p>
                    <p>{ex.start_month} - {ex.end_month}</p>
                  </div>
                  <div className="experience__detail__about__summary">
                    <p></p>
                  </div>
                </div>
                <div className="experience__detail__change">
                <button type="button"  className="button remove" onClick={() => removeExperienceFields(index)}>Remove</button>

                </div>

              </div>

            )

          }) : ''

      }


      <form id="contact-form" className="contact-form"  method="post" action="/">
      <div className="resume__input__data__job">
        <div className="resume__input__data__employer">
          <label className="resume__input__data__label">Employer</label>
          <input className="resume__input__data__inputvalue" name="employer" value={employer} placeholder="e.g Amazon" onChange={onExperienceChange} />
        </div>
        <div className="resume__input__data__job_title">
          <label className="resume__input__data__label">Job Title</label>
          <input className="resume__input__data__inputvalue" name="job_title" value={job_title} placeholder="e.g software developer" onChange={onExperienceChange} />
        </div>
      </div>
      <div className="resume__input__data__experience__address">
        <div className="resume__input__data__experience__address__city">
          <label className="resume__input__data__label">City</label>
          <input className="resume__input__data__inputvalue" name="city" value={city} placeholder="e.g Pune" onChange={onExperienceChange} />
        </div>
        <div className="resume__input__data__experience__address__state">
          <label className="resume__input__data__label">State</label>
          <input className="resume__input__data__inputvalue" name="state" value={state} placeholder="e.g Maaharashtra" onChange={onExperienceChange} />
        </div>
        </div>

        <div ref={node}  className="resume__input__data__experience__date">
          <div  className="resume__input__data__address__start_month" onClick={startMonthCalenderDisplay}>
            <div  className="resume__input__data__inputvalue__inst">
            <label className="resume__input__data__label">start Month</label>
            <input className="resume__input__data__inputvalue resume__input__data__inputvalue__startmonth" name="start_date" autoComplete="off"  onChange={()=>{}} value={startMonth} placeholder="select"  />
            </div>
 { startdatedisplay ?
            <div className="start_date__calendar">
              <Calendar maxDetail="year" onChange={changeStartDate} value={start_date}/>
            </div> : '' }
          </div>
            <div className="resume__input__data__address__end_month" onClick={endMonthCalenderDisplay}>
               <div>
              <label className="resume__input__data__label">End Month</label>
              <input className="resume__input__data__inputvalue resume__input__data__inputvalue__endmonth" name="end_date"  onChange={()=>{}} value={endMonth} placeholder="select"  />
              </div>
{ enddatedisplay ?
             <div className="end_date__calendar">
              <Calendar minDate={new Date(start_date)}    maxDetail="year" onChange={changeEndDate} defaultValue={end_date} />
            </div> : '' }
          </div>
          </div>

          <div className="resume__input__data__experience__summary">
            <label className="resume__input__data__label">Summary</label>
            <div className="resume__input__data__input__summary" >
            <div className="toolbar">
   <button className="styleButton" onClick={onUnderlineClick}>
     U
   </button>
   <button className="styleButton" onClick={onBoldClick}>
     <b>B</b>
   </button>
   <button className="styleButton" onClick={onItalicClick}>
     <em>I</em>
   </button>
 </div>
              <Editor
                ref={editor}
                 editorState={editorState}
                 onChange={editorState => setEditorState(editorState)}
                     blockRenderMap={extendedBlockRenderMap}
                  />
                </div>
          </div>
          <div className="resume__experience__button">
              <button className="resume__experience__button__previous">Previous</button>
              <button className="resume__experience__button__add" onClick={onAddAnotherExperience}>Add Another Position</button>
              <button className="resume__experience__button__next" onClick={onExperienceNext}>Next</button>
          </div>
      </form>

    </div>
  )
}

export default Experience
