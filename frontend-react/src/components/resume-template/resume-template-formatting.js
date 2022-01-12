import React, {useState,useEffect} from 'react'
import Slider from 'react-rangeslider'
import '../../assets/css/resume-template/resume-template-formatting.css'
import 'react-rangeslider/lib/index.css';
import { NavLink } from "react-router-dom";
import Select from 'react-select'

const ResumeFormatting = ({handleChange,fontsizes,fontfamily,handleSelectFontFamilyChange}) => {



  const options = [
  {value: "Arial",label: "Arial"},
  { value: "'Bodoni Moda',serif", label: 'Bodoni MT' },
  { value: "'Courier Prime',monospace", label: 'Courier Prime' },
  { value: 'georgia', label: 'Georgia' },
  { value: "'Palatino Linotype',serif", label: 'Palatino Linotype' },
  { value: 'tahoma', label: 'Tahoma' },
  { value: 'verdana', label: 'Verdana' },
  { value: "'Open Sans',sans-serif", label: 'Open Sans' },
  { value: "'Merriweather',serif", label: 'Merriweather' },
  { value: "'Roboto',sans-serif", label: 'Roboto' },
  { value: "'PT Serif',serif", label: 'PT Serif' },
  { value: "'PT Sans',sans-serif", label: 'PT Sans' },
  { value: "'Saira',sans-serif", label: 'Saira' }
  ]


  return(
    <div className="resume__formatting">
      <div className="resume__formatting__header">
        <div className="resume__formatting__header__name">
          <h3>Resume Formatting</h3>
        </div>
      </div>
      <div className="resume__formatting__content">
        <form method="post" action="/">

           <div className="resume__formatting__font">
        {/* font size */}
        <div className="resume__formatting__content__slider">
          <div className="resume__formatting__content__slider__label">
            <label>Font Size</label>
          </div>
            <div className='resume__formatting__content__slider__value'>{fontsizes}</div>
        <div className='slider__fontsize' >
         <Slider
        min={1.2}
        max={1.8}
        step={0.1}
        value={fontsizes}
        onChange={handleChange}
        labels={{1.2: '', 1.3: '',1.4: '',1.5: '',1.6:'',1.7:'',1.8:''}}
      />

       </div>
       </div>

         {/* font familt */}
       <div className="resume__formatting__content__slider">
         <div className="resume__formatting__content__slider__label">
           <label>Font Family</label>
         </div>
           {/* // <div className='resume__formatting__content__slider__value'>{fontfamily}</div> */}
       <div className='select__fontfamily' >
         <Select options={options} value={options[fontfamily]}  className="select__fontfamily__value"  onChange={e => handleSelectFontFamilyChange(e)} />

      </div>
      </div>
      </div>
        </form>
      </div>

      <div className="resume__add_section">
        <div className="resume__add_section__language">
          <button><span style={{fontSize: "2rem",paddingRight: "1rem"}}>+</span><NavLink to="/resume/language/add" >Add Language</NavLink></button>
        </div>
        <div className="resume__add_section__othersection">
          <button><span style={{fontSize: "2rem",paddingRight: "1rem"}}>+</span><NavLink to="/resume/add-section" >Add Other Section</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default ResumeFormatting
