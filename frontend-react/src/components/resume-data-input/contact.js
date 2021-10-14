import React,{useState,useEffect} from 'react'
import '../../assets/css/resume-data-input/contact.css'

const Contact = (props) => {



  const [contact,setContact] = useState({
    fname: "",
    lname: "",
    profession: "",
    address: "",
    city: "",
    zipcode: "",
    state: "",
    email: "",
    phone: ""
  })

  const onContactChange = (e) => {
    e.preventDefault()
    setContact({
      ...contact,
      [e.target.name] : e.target.value
    })
  }

useEffect(() => {

  const contacts =  JSON.parse(localStorage.getItem('contact'))
   if(contacts != null) {
      setContact(contacts)
   }

},[])


 const {fname,lname,profession,address,city,zipcode,state,email,phone} = contact

    const onContactSubmit = (e) => {



      localStorage.setItem("contact",JSON.stringify({fname:fname,lname:lname,profession:profession,address:address,city:city,zipcode:zipcode,state:state,email:email,phone:phone}))
      props.history.push("/resume/experience/add")
      console.log('click')

      e.preventDefault()

    }



  return (
    <div className="resume__input__data__contact">
      <div className="resume__input__data__header">
         <h3>Complete Your Resume Contact Form</h3>
         <p>Employers will use this information to contact you.</p>
      </div> {

      }
      <form onSubmit={onContactSubmit} id="contact-form" className="contact-form" method="post" action="/" >
      <div className="resume__input__data__name">
        <div className="resume__input__data__firstname">
          <label className="resume__input__data__label">First Name</label>
          <input className="resume__input__data__inputvalue" name="fname" value={fname} placeholder="e.g khan" onChange={onContactChange} />
        </div>
        <div className="resume__input__data__lastname">
          <label className="resume__input__data__label">Last Name</label>
          <input className="resume__input__data__inputvalue" name="lname" value={lname} placeholder="e.g waseem" onChange={onContactChange} />
        </div>
      </div>
      <div className="resume__input__data__address">
          <label className="resume__input__data__label">Profession</label>
          <input className="resume__input__data__inputvalue" name="profession" value={profession} placeholder="e.g software developer" onChange={onContactChange} />
      </div>
      <div className="resume__input__data__address">
          <label className="resume__input__data__label">Address</label>
          <input className="resume__input__data__inputvalue" name="address" value={address} placeholder="e.g siddarth complex" onChange={onContactChange} />
      </div>
      <div className="resume__input__data__address2">
        <div className="resume__input__data__address2__city">
          <label className="resume__input__data__label">City</label>
          <input className="resume__input__data__inputvalue" name="city" value={city} placeholder="e.g vapi" onChange={onContactChange} />
        </div>
        <div className="resume__input__data__address2__zipcode">
          <label className="resume__input__data__label">Zip Code</label>
          <input className="resume__input__data__inputvalue" name="zipcode" value={zipcode} placeholder="e.g 396191" onChange={onContactChange} />
        </div>
        <div className="resume__input__data__address2__state">
          <label className="resume__input__data__label">State</label>
          <input className="resume__input__data__inputvalue" name="state" value={state} placeholder="e.g gujarat" onChange={onContactChange} />
        </div>
      </div>
      <div className="resume__input__data__contactinfo">
        <div className="resume__input__data__contactinfo__email">
          <label className="resume__input__data__label">Email</label>
          <input className="resume__input__data__inputvalue" name="email" value={email} placeholder="e.g worzett@gmail.com" onChange={onContactChange} />
        </div>
        <div className="resume__input__data__lastname">
          <label className="resume__input__data__label">Phone</label>
          <input className="resume__input__data__inputvalue" name="phone" value={phone} placeholder="e.g 8679292837" onChange={onContactChange} />
        </div>
      </div>
      <div className="resume__contact__button">
          <button className="resume__contact__button__next">Next</button>
      </div>
      </form>
    </div>
  )
}

export default Contact
