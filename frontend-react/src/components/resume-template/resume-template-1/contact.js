import React,{useEffect,useState} from 'react'
import '../../../assets/css/resume-template/resume-template-1/contact.css'



const Contact = ({fontsize}) => {

  const [contact,setContact] = useState({
    address: "",
    city: "",
    zipcode: "",
    state: "",
    email: "",
    phone: ""
  })


  useEffect(() => {

    const contacts =  JSON.parse(localStorage.getItem('contact'))
     if(contacts != null) {
        setContact(contacts)
     }

  },[])

  const {address,city,zipcode,state,email,phone} = contact



  return (
    <div className="resume-template-1-contact">
    <div className='resumet1c'>
      <div className="resumet1c__head">
        <h3>Contact</h3>
      </div>
      <div className="resumet1c__info">
        <ul>
          <li style={{fontSize: fontsize + 'rem'}}>
          {address}
          </li>
          <li style={{fontSize: fontsize + 'rem'}}>{email}</li>
          <li style={{fontSize: fontsize + 'rem'}}>{phone}</li>
          <li style={{fontSize: fontsize + 'rem'}}>{city},{state}</li>
          <li style={{fontSize: fontsize + 'rem'}}> {zipcode} </li>
          {/* <li>/khn_waseem</li> */}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Contact
