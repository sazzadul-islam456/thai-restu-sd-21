import React from 'react';
import { images } from '../../constants'

import './Header.css';
import SubHeading from './../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section___padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>At SFC Restaurant, we believe that every meal is an opportunity to create memories, to weave stories through flavors, and to celebrate the artistry of culinary craftsmanship.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt='header img' />

    </div>
  </div>
);

export default Header;
