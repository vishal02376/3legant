import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="footer-content">
            <div className="footer-left">
                {/* <img src={assets.logo} alt="" /> */}
                <h2 className='tomoto'>3legant</h2>
                <p>hop effortlessly with our eCommerce website, offering a wide range of products and exclusive deals.
                     Enjoy a seamless shopping experience with easy navigation and secure checkout.</p>


                 <div className="footer-Social-item">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src="" alt="" />
                 </div>

            </div>

            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div className="footer-right">

                <h2>Get in touch</h2>
                <ul>
                    <li>+919534822376</li>
                    <li>imvksb@gmail.com</li>
                </ul>

            </div>

        </div>

        <hr />
        <p className="footercopyright">
            Copyright 2024 3legant.com - All Right Reserved
        </p>
      
    </div>
  )
}

export default Footer
