import React from 'react';

import SubHeading from './../../components/SubHeading/SubHeading';
import MenuItem from './../../components/Menuitem/MenuItem';
import { images, data } from '../../constants'


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
      <p className="p__opensans">Bangladesh, Khulna KDA road 2015</p>
      <p className="p__opensans" style={{ color: '#DCCA87', margin: '2rem 0'}}>Open Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00 am - 02:00am</p>
      <p className="p__opensans">sat - sun: 10:00 am - 02:00am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
