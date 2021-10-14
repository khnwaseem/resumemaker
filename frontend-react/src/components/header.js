import React, {useState} from 'react'
import '../assets/css/header.css'
import { NavLink } from "react-router-dom";
import Navigation from '../components/navigation'

const Header = () => {

    const [open,setOpen] = useState(false)

    const [active,setActive] = useState(false)

    const activeClickHandler = () => {
      setActive(!active)
    }

 const valueActive = active ? "active" : ""

  return (
    <React.Fragment>
     <div className='container__header'>

        <div className='header'>
           <div className='header__logo'>
                <NavLink to='/'>
                <h2>Worzett Resume</h2>
               </NavLink>
           </div>
           {valueActive == "active" ? <div className="mm-menu-sidebar">
             <div class='mm-menu-sidebar__header'>
               <a>Menu</a>
             </div>
             <div className="mm-menu-sidebar__nav">
             <Navigation />
             </div>
           </div> :
             ''
          }

           <div className={"m-menu " + valueActive} onClick={activeClickHandler}>
             <span></span>
             <span></span>
             <span></span>
           </div>
           <div className='header__menu'>
             <div className='menu'>
                <Navigation />
           </div>

         </div>
           <div className='header__account'>
            <NavLink to='/'>Account</NavLink>
           </div>
        </div>
     </div>
    </React.Fragment>
  )
}

export default Header
