import React from 'react';
import './Appd.css';
import { assets } from '../../assets/assets';

const App = () => {
  return (
    <div className='AppDownload' id='Appdownload'>
      <div className="container">
        <div className="box1">
          <img src={assets.play_store} alt="Play Store" />
          <p>Free Shipping <br /> <span>Order above $200</span></p>
        </div>
        <div className="box2">
          <img src={assets.Money} alt="Money" />
          <p>Money-back <br /> <span>30 days Guarantee</span></p>
        </div>
        <div className="box3">
          <img src={assets.lock} alt="Lock" />
          <p>Secure Payments <br /> <span>Secured by stripe</span></p>
        </div>
        <div className="box4">
          <img src={assets.app_store} alt="App Store" />
          <p>24/7 Supports <br /> <span> Phone and supports</span></p>
        </div>
      </div>
      <div className="container2">
        <div className="mainimg">
          <img src={assets.place} alt="Sale" />
        </div>
        <div className="content">
          <p className='pr'>Sale Up To 35% OFF</p>
          <h2>HUNDREDS of  <br /> New lower price</h2>
          <p>It's more affordable than ever to give every room <br /> in your home a stylish makeover</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;

