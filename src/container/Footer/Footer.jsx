import React from 'react';
import { images } from '../../constants'
import { FooterOverlay, Newsletter } from '../../components'; 
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';


import './Footer.css';


const Footer = () => (
  <div className='app__footer section__padding'> 
        {/* <FooterOverlay />   */}
       <Newsletter />
  <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <h1 className='app__footer-headtext'>Contact Us</h1>
      <p className='p__opensans'>Khulna City KDA 215</p>
      <p className='p__opensans'>01776424089</p>
      <p className='p__opensans'>01776424089</p>
    </div>
    <div className="app__footer-links__logo">
    <img src={images.gericht} alt='footer_logo' />
    <p className='p__opensans'>The best way to find youeself is to lose yourself in the service of others.</p>
    <img src={images.spoon} alt='spoon' className='spoon__img'  style={{ marginTop: 15}}/>
    <div className="app__footer-links_icons">
      <FiFacebook />
      <FiInstagram />
      <FiTwitter/>
    </div>
    </div>
    <div className="app__footer-links_work">
    <h1 className='app__footer-headtext'>Working Hours</h1>
      <p className='p__opensans'>Monday-Friday</p>
      <p className='p__opensans'>08:00am -12:00am</p>
      <p className='p__opensans'>Saturday-Sunday</p>
      <p className='p__opensans'>07:00am -11:00pm</p>
    </div>
  </div>
  <div className="footer__copyright">
    <p className='p__opensans'>2024 sazzad. All Rights Reserved.</p>

  </div>
  </div>
);

export default Footer;
