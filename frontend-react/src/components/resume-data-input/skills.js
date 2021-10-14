import React,{useState, useEffect,useRef} from 'react'
import '../../assets/css/resume-data-input/skills.css'
import Select from 'react-select'

const Skill = (props) => {


  const [skill,setSkill] = useState([{skill_name: "",skill_level: ""}])


const handleChange = (i,e) => {
  let newSkillValues = [...skill]
  newSkillValues[i][e.target.name] = e.target.value

  setSkill(newSkillValues)

}

const handleSelectChange = (i,selectedOption,e) => {
 let newSkillValues = [...skill]
 newSkillValues[i]["skill_level"] = selectedOption.value
  setSkill(newSkillValues)

}


const options = [
  {value: '0',label: "don't want to add level"},
  { value: '1', label: '★' },
  { value: '2', label: '★★' },
  { value: '3', label: '★★★' },
  { value: '4', label: '★★★★' },
  { value: '5', label: '★★★★★' }


]

const addSkillFields = (e) => {
    e.preventDefault()
  setSkill([...skill,{skill_name: "",skill_level: ""}])


}

const removeSkillFields = (i) => {
  let newSkillValues = [...skill]
  newSkillValues.splice(i,1);
  setSkill(newSkillValues)
}

const handleSubmit = (e) => {
  e.preventDefault()
    localStorage.setItem("skill",JSON.stringify(skill))
    props.history.push("/resume/summary/add")
}

useEffect(() => {
  const skills =  JSON.parse(localStorage.getItem('skill'))
   if(skills != undefined) {
     setSkill(skills)
   } else {
     setSkill([{skill_name: "",skill_level: ""}])
   }
},[])

console.log(skill)

  return (
    <div className="resume__input__data__contact">
      <div className="resume__input__data__header">
         <h3>Skills</h3>
         <p>Highlight 6-8 of your top skills.</p>
      </div>

      <form id="skill-form" className="skill-form" method='post'>
      { skill ? skill.map((sk,index) => {
        return (
          <div className="resume__input__data__skill" key={index}>
            <div className="resume__input__data__skill_name">
              <label className="resume__input__data__label">Skill</label>
              <input className="resume__input__data__inputvalue" name="skill_name"  value={sk.skill_name || ""} placeholder="skill_name" onChange={e => handleChange(index,e)} />
            </div>
            <div className="resume__input__data__skill_level">
              <label className="resume__input__data__label">Level</label>
                <Select options={options} value={options[sk.skill_level]}  className="resume__input__data__select__level"  onChange={e => handleSelectChange(index,e)} />
            </div>
            {
         index ?
           <button type="button"  className="button remove" onClick={() => removeSkillFields(index)}>Remove</button>
         : null
            }
          </div>

        )
      }) : ''

      }
      <div className="resume__experience__button">
          <button className="resume__experience__button__previous">Previous</button>
          <button className="resume__experience__button__add" onClick={(e) => addSkillFields(e)}>Add Position</button>
          <button className="resume__experience__button__next" onClick={handleSubmit}>Next</button>
      </div>

      </form>

    </div>
  )
}

export default Skill
