import React, {useState,useEffect} from 'react';
import '../../../assets/css/resume-template/resume-template-1/header.css'
import {Template1ProfileImage} from '../../../assets/img/data64.js'

const Header = () => {

  const [contact,setContact] = useState({
    fname: "",
    lname: "",
    profession: ""
  })


  useEffect(() => {

    const contacts =  JSON.parse(localStorage.getItem('contact'))
     if(contacts != null) {
        setContact(contacts)
     }

  },[])

  const {fname,lname,profession} = contact


  return (
    <div className="resume-template-1-header">
      <div className="resumete1h">
     <div className="resumete1h__name__desig">
       <div className="resumete1h__name">
         <h2>{fname} {lname}</h2>
       </div>
       <div className="resumete1h__designation">
         <p>{profession}</p>
       </div>
     </div>
     </div>
    </div>
  )
}

export default Header
