import React from 'react'
import { NavLink } from "react-router-dom";
import '../assets/css/footer.css'


const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-footer">
        <div className='footer__nav'>
          <div className="footer__nav__job">
            <ul>
              <li className="footer__nav__job__header">
                <NavLink to='/'>Job Seekers</NavLink>
              </li>
              <li className="footer__nav__job__link">
                <NavLink to='/'>Build a Resume</NavLink>
              </li>
              <li className="footer__nav__job__link">
                <NavLink to='/'>Sample</NavLink>
              </li>
              <li className="footer__nav__job__link">
                <NavLink to='/'>Cover Letter Samples</NavLink>
              </li>
              <li className="footer__nav__job__link">
                <NavLink to='/'>Job search</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__nav__resources">
            <ul>
              <li className="footer__nav__resources__header">
                <NavLink to='/'>Resources</NavLink>
              </li>
              <li className="footer__nav__resources__link">
                <NavLink to='/'>Career Advice</NavLink>
              </li>
              <li className="footer__nav__resources__link">
                <NavLink to='/'>Resume</NavLink>
              </li>
              <li className="footer__nav__resources__link">
                <NavLink to='/'>Career Development</NavLink>
              </li>
              <li className="footer__nav__resources__link">
                <NavLink to='/'>Getting Job</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__nav__needhelp">
            <ul>
              <li className="footer__nav__needhelp__header">
                <NavLink to='/'>Need Help?</NavLink>
              </li>
              <li className="footer__nav__needhelp__link">
                <NavLink to='/'>Help Center</NavLink>
              </li>
              <li className="footer__nav__needhelp__link">
                <NavLink to='/'>About Us</NavLink>
              </li>
              <li className="footer__nav__needhelp__link">
                <NavLink to='/'>Terms</NavLink>
              </li>
              <li className="footer__nav__needhelp__link">
                <NavLink to='/'>Privacy Center</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__nav__social">
            <ul>
              <li className="footer__nav__social__header">
                <NavLink to='/'>Stay Connected</NavLink>
              </li>
              <div>
              <li className="footer__nav__social__link">
                <NavLink to='/'><img width="20" src="https://cdn.shopify.com/s/files/1/0072/5467/1433/t/42/assets/facebook-icon.png?v=6361375980349262153" /></NavLink>
              </li>
              <li className="footer__nav__social__link">
                <NavLink to='/'><img  width="20" src="https://cdn.shopify.com/s/files/1/0072/5467/1433/t/42/assets/instagram-icon.png?v=9317041580275696902" /></NavLink>
              </li>
              </div>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
