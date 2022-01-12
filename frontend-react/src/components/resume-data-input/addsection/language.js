import React,{useState, useEffect,useRef} from 'react'
import '../../../assets/css/resume-data-input/addsection/language.css'
import Select from 'react-select'

const Language = (props) => {


  const [language,setLanguage] = useState([{language_name: "",language_level: ""}])


const handleChange = (i,e) => {
  let newLanguageValues = [...language]
  newLanguageValues[i][e.target.name] = e.target.value

  setLanguage(newLanguageValues)

}

const handleSelectChange = (i,selectedOption,e) => {
 let newLanguageValues = [...language]
 newLanguageValues[i]["language_level"] = selectedOption.value
  setLanguage(newLanguageValues)

}


const options = [
  {value: '0',label: "don't want to add level"},
  { value: '1', label: '★' },
  { value: '2', label: '★★' },
  { value: '3', label: '★★★' },
  { value: '4', label: '★★★★' },
  { value: '5', label: '★★★★★' }


]

const addLanguageFields = (e) => {
    e.preventDefault()
  setLanguage([...language,{Language_name: "",Language_level: ""}])


}

const removeLanguageFields = (i) => {
  let newLanguageValues = [...language]
  newLanguageValues.splice(i,1);
  setLanguage(newLanguageValues)
}

const handleSubmit = (e) => {
  e.preventDefault()
    localStorage.setItem("language",JSON.stringify(language))
    props.history.push("/resumetemplate")
}

useEffect(() => {
  const languages =  JSON.parse(localStorage.getItem('language'))
   if(languages != undefined) {
     setLanguage(languages)
   } else {
     setLanguage([{language_name: "",language_level: ""}])
   }
},[])

console.log(language)

  return (
    <div className="resume__input__data__contact">
      <div className="resume__input__data__header">
         <h3>Language</h3>
         <p>Highlight 3-4 of your top Languages.</p>
      </div>

      <form id="skill-form" className="skill-form" method='post'>
      { language ? language.map((sk,index) => {
        return (
          <div className="resume__input__data__skill" key={index}>
            <div className="resume__input__data__skill_name">
              <label className="resume__input__data__label">Language</label>
              <input className="resume__input__data__inputvalue" name="language_name"  value={sk.language_name || ""} placeholder="language_name" onChange={e => handleChange(index,e)} />
            </div>
            <div className="resume__input__data__skill_level">
              <label className="resume__input__data__label">Level</label>
                <Select options={options} value={options[sk.language_level]}  className="resume__input__data__select__level"  onChange={e => handleSelectChange(index,e)} />
            </div>
            {
         index ?
           <button type="button"  className="button remove" onClick={() => removeLanguageFields(index)}>Remove</button>
         : null
            }
          </div>

        )
      }) : ''

      }
      <div className="resume__experience__button">
          <button className="resume__experience__button__previous">Previous</button>
          <button className="resume__experience__button__add" onClick={(e) => addLanguageFields(e)}>Add Position</button>
          <button className="resume__experience__button__next" onClick={handleSubmit}>Next</button>
      </div>

      </form>

    </div>
  )
}

export default Language
