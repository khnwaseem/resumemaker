import React from 'react'
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <React.Fragment>
    <nav className='menu-navi'>
   <ul className='menu__list'>
     <li className='menu__item submenu__wrapper'>
       <span className='menu__link'>
         <NavLink to='/'>Tools</NavLink>
        </span>
     </li>

     <li className='menu__item submenu__wrapper'>
       <span className='menu__link'>
         <NavLink to='/'>Resume</NavLink>
        </span>
     </li>

     <li className='menu__item submenu__wrapper'>
       <span className='menu__link'>
         <NavLink to='/'>CV</NavLink>
        </span>
     </li>

     <li className='menu__item submenu__wrapper'>
       <span className='menu__link'>
         <NavLink to='/'>Cover Letter</NavLink>
        </span>
     </li>

     <li className='menu__item submenu__wrapper'>
       <span className='menu__link'>
         <NavLink to='/'>Career Blog</NavLink>
        </span>
     </li>

     <li className='menu__item submenu__wrapper'>
       <span className='menu__link'>
         <NavLink to='/'>About</NavLink>
        </span>
     </li>

   </ul>
   </nav>
    </React.Fragment>
  )
}

export default Navigation
